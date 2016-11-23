import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

function Article(props) {
    const { article, accordion } = props
    return (
        <section>
            <h3 onClick = {accordion}> {article.title} </h3>
            {getBody(props)}
        </section>
    )
}

function getBody(props) {
    const { article, isOpen } = props
    if (!isOpen) return null
    return (
        <div>
            <p>{article.text}</p>
            <CommentList comments = {article.comments} />
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        comments: PropTypes.array,
        text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    accordion: PropTypes.func.isRequired
}


export default Article