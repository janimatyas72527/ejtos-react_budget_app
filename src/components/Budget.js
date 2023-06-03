import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const dispatchIfCorrect = (dispatch, remaining, event) => {
    if (event.target.value > 20000) {
        window.alert("Budget cannot exceed £20000");
    } else if (remaining < 0) {
        window.alert("Budget cannot be lower than the spending!");
    } else {
        dispatch({type: "SET_BUDGET", payload: event.target.value });
    }
} 

const Budget = () => {
    const { budget, remaining, currency, dispatch } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number"
                step="10"
                min="0"
                value={budget}
                onChange={event => dispatchIfCorrect(dispatch, remaining, event)}
                />
        </div>
    );
};
export default Budget;