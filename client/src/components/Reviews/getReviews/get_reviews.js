import React, { Component } from 'react'
import { connect } from 'react-redux'
import GetReviewsUI from "./get_reviews_ui"
class GetReviews extends Component {
    render() {
        console.log('getReviews',this.props)
        return (
            <GetReviewsUI/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(GetReviews)
