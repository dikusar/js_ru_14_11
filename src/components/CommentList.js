import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment, loadComments } from '../AC/comments'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        // commentIds: PropTypes.array.isRequired,
        //from connect
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: [],
        // commentIds: []
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen && !this.props.isOpen) this.props.loadComments(this.props.article.id)
    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        if (this.props.loading) return <Loader/>
        const { article, isOpen, comments, addComment } = this.props
        const commentForm = <NewCommentForm articleId = {article.id} addComment = {addComment} />

        if (!isOpen || !comments.length) return <div>{commentForm}</div>
        debugger
        const commentItems = comments.map(comment => <li key = {comment.get(id)}><Comment comment = {comment} /></li>)

        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => {
    return (
        {
            // comments: (props.article.comments || []).map(id => state.comments.entities.get(id)),
            comments: (props.article.comments || []).map(id => state.comments.entities.get(id)),
            loading: state.comments.loading
        }
    )
}, { addComment, loadComments })(toggleOpen(CommentList))
