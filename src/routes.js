import React from 'react'
import { Router, Route, IndexRedirect, IndexRoute, Redirect } from 'react-router'
import history from './history'
import Root from './RouteHandlers/Root'
import ArticleRoot from './RouteHandlers/ArticleRoot'
import Filters from './RouteHandlers/Filters'
import Counter from './RouteHandlers/Counter'
import ArticlePage from './RouteHandlers/ArticlePage'
import CommentsRoot from './RouteHandlers/CommentsRoot'
import CommentsPage from './RouteHandlers/CommentsPage'
import NewArticlePage from './RouteHandlers/NewArticlePage'
import ArticleIndexPage from './RouteHandlers/ArticleIndexPage'
import NotFound from './RouteHandlers/NotFound'
import ErrorPage from './RouteHandlers/ErrorPage'
import { authorize } from './store/utils'

export default (
    <Router history={history}>
        <Route path = "/" component={Root}>
            <Route path = "counter" component={Counter} />
            <Redirect from = "article" to = "/articles"/>
            <Route path = "articles" component={ArticleRoot}>
                <IndexRoute component={ArticleIndexPage}/>
                <Route path = "/new_article" component={NewArticlePage}
                    onEnter = {(route, replace) => {
                        authorize(route.location.pathname) || replace('/error?message=Not Authorized')
                    }}
                />
                <Route path = ":id" component={ArticlePage}
                />
            </Route>
            <Route path = "filters" component={Filters} />
            <Route path = "comments" component = {CommentsRoot}>
                <IndexRedirect to="1"/>
                <Route path = ":page" component = {CommentsPage} />
            </Route>
            <Route path = "error" component={ErrorPage} />
            <Route path = "*" component={NotFound} />
        </Route>
    </Router>
)