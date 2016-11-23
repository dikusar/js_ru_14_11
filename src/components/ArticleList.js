import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

function ArticleList(props) {

    return (
        <ul>
            {getArticleItems(props)}
        </ul>
    )
}

function getArticleItems(props) {
    const { articles, accordion, openArticleId, isOpen } = props

    const articleItems = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id == openArticleId}
                accordion = {accordion(article.id)}
            />
        </li>
    ))
    return articleItems
}

ArticleList.PropTypes = {
    articles: PropTypes.array.isRequired,
    openArticleId: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    accordion: PropTypes.func.isRequired
}

export default accordion(ArticleList)