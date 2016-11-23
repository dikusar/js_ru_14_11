import React from 'react'

export default (Component) => class accordionDecorator extends React.Component {
    
    state = {
        openArticleId: null,
        isOpen: false
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
            openArticleId: id,
            isOpen: !this.state.isOpen
        })
    }
}