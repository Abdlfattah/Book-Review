import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../../actions'
import HomeUI from './home_ui'


class HomeContainer extends Component {
    componentWillMount=()=>{
        this.props.dispatch(getBooks(1,0,'asc'))
    }
    loadMore = () =>{
        const length = this.props.books.list.length
        this.props.dispatch(getBooks(2,length,'asc',this.props.books.list))
    }

    render() {
        return (
            <HomeUI {...this.props.books}
                    loadMore={()=>this.loadMore()}
            
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(HomeContainer)