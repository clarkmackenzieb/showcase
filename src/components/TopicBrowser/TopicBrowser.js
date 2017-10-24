import React, {Component} from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import FilterObject from '../Topics/FilterObject';
import Sum from '../Topics/Sum';



class TopicBrowser extends Component {
    render(){
        return(
            <div>
                <EvenAndOdd/>
                <FilterObject/>
                <FilterString/>
                <Palindrome/>
                <Sum/>
            </div>
        )
    }
}

export default TopicBrowser;