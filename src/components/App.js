import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import { selectArticle } from '../AC/select'

import 'react-select/dist/react-select.css'

class App extends Component {

    // state = {
    //     selected: null
    // }

    render() {
        const { articles, selected }=this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id,
            text: article.text,
            date: article.date,
            comments: article.comments
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />
                <Select 
                    options = {options}
                    value = {selected}
                    onChange = {this.handleChange}
                    multi = {true}/>
            </div>
        )
    }

    handleChange = selected => {
        // this.setState({ selected })
        const { selectArticle }=this.props
        selectArticle(selected)
    }
}

export default connect(state => ({
    articles: state.articles,
    selected: state.selected
}), { selectArticle } )(App)