import * as ActionTypes from './ActionTypes';
import { connect } from 'react-redux';

import CounterComponent from '../Components/CounterComponent';


const mapStateToProps = (state) => ({
     count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(counterIncrement()),
    decrement: () => dispatch(counterDecrement()),
});

function counterIncrement() {
    return {
        type: ActionTypes.COUNTER_INCREMENT
    }
}

function counterDecrement() {
    return {
        type: ActionTypes.COUNTER_DECREMENT
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);