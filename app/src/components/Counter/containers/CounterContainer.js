import React, { Component } from 'react';
import CounterView from "../components/CounterView";

class CounterContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         countValue: 0,
         parityType: 'even',
      }
   }

   handleIncrement = () =>{
      this.setState({countValue: this.state.countValue + 1});
      
      // this.setState((state) => {
      //    const incrementedValue = state.countValue + 1;
   
      //    return {
      //       countValue: incrementedValue
      //    }
      // })
  
   }

   handleDecrement = () => {
      this.setState({countValue: this.state.countValue - 1});}

   handleReset = () => {this.setState({countValue: 0});}

   evenValue = () => {
   this.setState((state) => {
      function evenValue () {
         if (this.state.countValue % 2 === 0)
   
       return {parityType: 'Введено чётное число'}
   }
   })
}

   render() {
      return (
         <CounterView countValue={this.state.countValue}
         handleIncrement={this.handleIncrement}
         handleDecrement={this.handleDecrement}
         handleReset={this.handleReset}
         evenValue={this.evenValue}

          />
      );
   }
}

export default CounterContainer;
