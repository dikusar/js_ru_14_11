import React, { Component } from 'react'

export class Comment extends Component {
	render() {
		const { comment } = this.props
		return (
			<p className="comment">
				<span className="comment__title">{comment.user}</span><br/>
				<span className="commnet__text">{comment.text}</span>
			</p>
		)
	}
}

export default Comment
