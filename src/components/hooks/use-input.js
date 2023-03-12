import {useState} from 'react';
const useInput = (validateValue)=> {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeFieldHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const valueInputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const resetFunction = (event)=> {
        setEnteredValue('')
    }
    return {
        value: enteredValue, isValid: valueIsValid, hasError, valueChangeFieldHandler, valueInputBlurHandler, resetFunction
    }
}

export default useInput;