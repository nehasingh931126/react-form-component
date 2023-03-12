import { useReducer } from 'react';
const initialInputState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action)=> {
    if(action.type === 'INPUT') {
        // return {...state, value: action.value};
        return { value: action.value, isTouched: state.isTouched }
    } 
    if(action.type === 'RESET') {
        return { ...state, value: '' }
    } 
    if (action.type === 'BLUR') {
        return { ...state, isTouched: true }
    }
    return initialInputState;
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeFieldHandler = (event) => {
        dispatch({type: 'INPUT', value: event.target.value});
    }

    const valueInputBlurHandler = (event) => {
        dispatch({ type: 'BLUR'});
    }

    const resetFunction = (event) => {
        dispatch({ type: 'RESET'});
    }
    return {
        value: inputState.value, isValid: valueIsValid, hasError, valueChangeFieldHandler, valueInputBlurHandler, resetFunction
    }
}

export default useInput;