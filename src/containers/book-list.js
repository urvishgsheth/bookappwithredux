import React, {Component} from "react";
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map(book => {
            return (
            <li 
                className="list-group-item"
                onClick={() => this.props.selectBook(book)}
                key={book.title}>
                {book.title} </li>
            )
        });
    }

    render(){
        return(
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //Whatever we return will show it as props inside book list
    return{
        books:state.books
    }
}

//Action return will be available as props in book list
function mapDispatchToProps(dispatch){
    //Whenever selectbook is called, the result should be pass to all of the reducers
    return bindActionCreators({selectBook:selectBook},dispatch);
}

//Promote booklist from a component to a container  - it need to know about
// this new dispatch method, select book - make it available as prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);