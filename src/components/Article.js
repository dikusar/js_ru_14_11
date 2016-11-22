import React, { Component } from 'react'
import CommentsList from './CommentsList'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            obj: { foo: 'bar' }
        }
    }

    render() {
        const { article } = this.props
        const { text, title } = article
        // Article's content
        const body = this.state.isOpen ? <div><p>{text}</p> <CommentsList comments={article.comments} /></div> : null

        return (
            <section>
                <h3 onClick = {this.showHideBody}>
                    {title}
                </h3>

                {body}

            </section>
        )
    }

    // Actions
    showHideBody = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default Article