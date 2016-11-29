import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'

class App extends Component {

    state = {
        selected: null
    }

    render() {
        const { articles }=this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi = {true}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
}

export default connect(state => ({
    articles: state.articles
}) )(App)