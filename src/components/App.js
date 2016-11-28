import React, { Component, PropTypes } from 'react'
// Addons
import Select from 'react-select'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'

// Components
import ArticleList from './ArticleList'
import Chart from './Chart'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <Select
                    placeholder='Select the article'
                    options={ options }
                    value={ this.state.selected }
                    onChange={ this.handleChange }
                    // multi={ true } 
                    />
                <DateRange />
               <ArticleList articles={this.props.articles} />
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
}

export default App