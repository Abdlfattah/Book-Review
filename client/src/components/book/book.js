import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBookWithReviewer, clearBookWithReviewer  } from '../../actions'
import BookUI from './bookUI'
class Book extends Component {
    componentWillMount = () =>{
        this.props.dispatch(getBookWithReviewer(this.props.match.params.id))
    } 
    componentWillUnmount = () =>{
        this.props.dispatch(clearBookWithReviewer())
    }
    render () {
        console.log(this.props)
        return (
            <div>
                <BookUI {...this.props.books}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(Book)