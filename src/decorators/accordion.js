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

    accordion = id => ev => {
        this.setState({
            openArticleId: id
        })
    }
}