import React from 'react'

export default (Component) => class AccordionDecorator extends React.Component {
    
    state = {
        openItemId: null
    }

    componentWillReceiveProps() {
        //console.log('---', 'accordion receiving props')
    }

    componentWillUpdate() {
        ///console.log('---', 'accordion will update')
    }

    render() {
        return <Component 
                    {...this.props}
                    {...this.state}
                    isOpen={this.isOpen}
                    toggleOpenItem={this.toggleOpenItem}
                />
    }

    isOpen = id => this.state.openItemId == id

    toggleOpenItem = id => ev => {
        this.setState({
            openItemId: this.state.openItemId == id ? null : id
        }) 
    }
}