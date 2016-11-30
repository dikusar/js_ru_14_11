import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {

    static defaultProps = {
        articles: []
    }

    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        isOpen: PropTypes.func.isRequired,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted', this.containerRef)
        console.log('---', this.refs)
    }

    componentWillReceiveProps(nexProps) {
        //console.log('isEqual', Object.keys(nexProps).every(key => nexProps[key] == this.props[key]))
        //console.log('---', 'AL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'AL will update')
    }

    getContainerRef = ref => {
        this.containerRef = ref
    }

    getArticles(articles, props) {
        const { isOpen, toggleOpenItem }=props

        const articleItems = articles.map(article => (
                <li key = {article.id}>
                    <Article
                        article = {article}
                        isOpen = {isOpen(article.id)}
                        toggleOpen = {toggleOpenItem(article.id)}
                    />
                </li>
            ))
        return articleItems
    }


    render() {
        const props = this.props
        const { articles, selectedArticles }=props
        const articleItems = selectedArticles.length ? this.getArticles(selectedArticles, props) : this.getArticles(articles, props)
        

        return (
            <ul ref = {this.getContainerRef}>
                {articleItems}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    selectedArticles: state.selected
}))(accordion(ArticleList))