import React, { Component } from 'react'
import AddReviewUI from './Add_Review_ui'
import { connect } from 'react-redux'
import { postReview, clearPostBook } from '../../../actions'
class AddReview extends Component {
    state={
       rating:'',
       success:'',
       messageText:''

    }

    componentWillReceiveProps = (nextProps)=>{
        if(nextProps.books.book.success){
            this.props.history.push(`/book/${nextProps.books.book.bookId}`)
        }
        else{
            this.setState({
                success:false,
                messageText:'The posting has failed'
            })
        }
    } 

    componentWillUnmount = () => {
        this.props.dispatch(clearPostBook())
    }
    handleSubmit = ( data ) =>{
        this.props.dispatch(postReview({...data,
                                        OwnerId:this.props.user.login.id,
                                        rating:this.state.rating
                                    }))
    }

    handleRatingState = (e,data)=>{
        this.setState({
            rating:data.rating
        })
    }
    render() {
        return (
            <AddReviewUI
                handleForm={(e)=>this.handleSubmit(e)}
                handleRatingState={this.handleRatingState}
                {...this.state}
            />
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(AddReview)
