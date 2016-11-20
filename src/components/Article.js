import React, { Component } from 'react'
import Comment from './Comment'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            //Слишком перегруженный компонент выходит, Сделай еще CommentList и вынеси этот стейт туда
            isCommentsShow: false,
            obj: { foo: 'bar' }
        }
    }

    render() {
        const { article } = this.props

        // Article's content
            const body = this.renderBody(this.state, article)

        return (
            <section>

                {/*Article title*/}
                    <h3 onClick = {this.showHideBody}>
                        {article.title}
                    </h3>

                {/*Article text and comments block*/}
                    {body}

            </section>
        )
    }

    renderBody(state, article) {
        const buttonText = state.isCommentsShow ? 'Hide Comments' : 'Show Comments'

        // Article's comments
        const { commentsContent, isCommentsPresent } = this.renderComments(state, article.comments)

        // Boolean to show/hide comments
        const { isCommentsShow } = this.state

        if (state.isOpen) {
            return (
                <div>
                     <p>{article.text}</p>

                    {isCommentsPresent ? <button onClick={this.showHideComments}>{buttonText}</button> : <span>No comments</span>}

                    {/*Article comments block*/}
                    {isCommentsShow ? commentsContent : null}
                 </div>
            )
        }else {
            return null
        }
    }
 
    renderComments(state, comments) {
        let commentsObj = {}
        if (comments && comments.length > 0) {
            commentsObj = {
                commentsContent: <div>
                                    {/*Render article comments block*/}
                                    {comments.map(comment => <div key={comment.id}> <Comment comment = {comment}/> </div>)}
                                </div>,
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

    // Actions
    showHideBody = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    showHideComments = () => {
        this.setState({
            isCommentsShow: !this.state.isCommentsShow
        })
    }
}

export default Article
