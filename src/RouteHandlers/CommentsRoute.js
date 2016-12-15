import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadComentsByLimit } from '../AC/comments'
import CommentList from '../components/CommentList'

export class CommentsRoute extends Component {

    state = {
        limit: 5,
        offset: 0
    }

    handleClick = button => ev => {
        ev.preventDefault
        const { offset }=this.state
        if (offset >= 0) { 
            const updateOffset = button === 'next' ? offset + 5 : offset - 5
            const querytParam = {...this.state, offset: updateOffset}
            this.setState(querytParam)
        }
        // debugger
        // const { loadComentsByLimit }=this.props
        // loadComentsByLimit(querytParam) 
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick('prev')}>Prev</button> 
                <button onClick={this.handleClick('next')}>Next</button>
                <CommentList isOpen = {true} querytParam={this.state}/>
                {this.state.offset}
            </div>
        );
    }
}

export default connect(null, { loadComentsByLimit })(CommentsRoute)