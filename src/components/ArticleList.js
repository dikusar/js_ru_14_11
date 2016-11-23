import React, { Component }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    render() {
        const { articles, accordion, openArticleId } = this.props

        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id == openArticleId}
                    toggleOpen = {accordion(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default accordion(ArticleList)