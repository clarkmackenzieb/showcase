import React, {Component} from 'react';



class EvenAndOdd extends Component {

constructor(props){
    super(props);
    this.state = {
        evenArray: [],
        oddArray: [],
        userInput: "",
    }
    this.solveProblem = this.solveProblem.bind(this);
}

solveProblem(nums){
    let newArr = [];
    let evenArr = [];
    let oddArr = [];
    newArr = nums.split(',');
    newArr.map(function(i){
        i = parseInt(i);
        (i%2 === 0 || i === 0) ? evenArr.push(i) : oddArr.push(i);
    })
    this.setState({ evenArray: evenArr, oddArray: oddArr})
}

    render(){
        return(
             <div className="puzzleBox evenAndOddPB">
             <h4> Evens and Odds </h4>
             <input className="inputLine" onChange={(e) => this.setState({ userInput: e.target.value})}></input>
             <button className="confirmationButton" onClick={() => this.solveProblem(this.state.userInput)}> Split </button>
             <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
             <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
             </div>
        )
    }
}

export default EvenAndOdd;