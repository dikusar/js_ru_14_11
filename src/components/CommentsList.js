import React, { Component } from 'react'
import Comment from './Comment'

export class CommentsList extends Component {

	state = {
		isCommentsShow: false
	}

	render() {
		const buttonText = this.state.isCommentsShow ? 'Hide Comments' : 'Show Comments'
		// Article's comments
		const { comments } = this.props
		const { commentsContent, isCommentsPresent } = this.renderComments(comments)
		// Boolean to show/hide comments
		const { isCommentsShow } = this.state

		return (
			<div>
				{isCommentsPresent ? <button onClick={this.showHideComments}>{buttonText}</button> : <span>No comments</span>}
				{isCommentsShow ? commentsContent : null}
			 </div>
		)
	}

	renderComments(comments) {
		let commentsObj = {}
		if (comments && comments.length > 0) {
			commentsObj = {
				commentsContent: <div>{comments.map(comment => <div key={comment.id}> <Comment comment = {comment}/> </div>)}</div>,
				isCommentsPresent: true
			}
			return commentsObj
		}else {
			commentsObj = {
				commentsContent: null,
				isCommentsPresent: false
			}
			return commentsObj
		}          
	}

	// Action
	showHideComments = () => {
        this.setState({
            isCommentsShow: !this.state.isCommentsShow
        })
    }
}

export default CommentsList