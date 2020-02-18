import { connect } from 'react-redux'
import Action from './actions';
import Counter from './components/counter';
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Counter
          value={this.props.counter}
          onIncrement={() => this.props.increment()}
          onDecrement={() => this.props.decrement()}
        ></Counter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: Action.INCREMENT, text: "INCREMENT Redux" }),
  decrement: () => dispatch({ type: Action.DECREMENT, text: "DECREMENT Redux" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
