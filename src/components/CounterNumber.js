import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../store/actions'

const CounterNumber = ({ message, counter, dispatch }) => (
  <div className="container">
    <h1>Counter : {counter}</h1>

    <div>
      <button
        onClick={() => dispatch(increment(1))}
        className="button is-primary is-outlined"
      >
        Increment Value +1
      </button>
      <button
        onClick={() => dispatch(decrement(1))}
        className="button is-warning"
      >
        Decrement Value -1
      </button>
    </div>
  </div>
)

const mapStateToProps = state => ({
  message: 'This is message from mapStateToProps',
  counter: state.counters || 0
})

// const AppWithConnect = connect(mapStateToProps)(App)

export default connect(mapStateToProps)(CounterNumber)
