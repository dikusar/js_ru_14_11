import React, { Component } from 'react';
import CommentList from '../components/CommentList'

export class CommentsRoute extends Component {
    render() {
        return (
            <div>
                <h1>Hrennnn a ne comments</h1>
                <CommentList />
            </div>
        );
    }
}

export default CommentsRoute