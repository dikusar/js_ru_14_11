import React from 'react'

function CommentForm() {
	const { commentForm, input, textarea, label }=styles()
	return (
		<div className="comment-form" style={ commentForm }>
			<span className="comment-form__label" style={ label }>Add comment</span>
			<div className="comment-form__body">
				<input className="comment-form__input" type="text" placeholder="Your name" style={ input } />
				<textarea className="comment-form__textarea" placeholder="Your comment" style={ textarea } />
				<button>Save</button>
			</div>
		</div>
	)
}

function styles() {
	const styles = {
		commentForm: { marginTop:20, maxWidth:300, padding: 10, border: '1px solid #eee' },
		label: { display:'block', textAlign:'center' },
		input: { display: 'block', width:'100%', marginTop:10, marginBottom:10, padding: 10, boxSizing:'border-box' },
		textarea: { display: 'block', marginBottom:10, padding:10, width:'100%', boxSizing:'border-box' }
	}
	return styles
}

export default CommentForm