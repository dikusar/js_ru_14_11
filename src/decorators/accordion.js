import React from 'react'

export default (Component) => class accordionDec extends React.Component {
    
    state = {
        openArticleId: null
    }

    render() {
        return <Component 
                    {...this.props}
                    {...this.state}
                    accordion={this.accordion}
                />
    }

    accordion = (id) => ev => {
        const openArticleId = this.state.openArticleId
        if (openArticleId && openArticleId == id) {
            this.setState({
                openArticleId: null
            })    
        }else {
            this.setState({
                openArticleId: id
            })
        }
    }
}