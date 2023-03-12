import {useState} from 'react';
const useForm = (validateInput)=> {
    const [inputValue, setInputValue] = useState('');
    const [inputTouched, setInputTouched] = useState(false);
    const isFieldValid = validateInput(inputValue);
    const hasError = !isFieldValid && inputTouched;
    
    const inputChangeHandler = (event)=> {
        setInputValue(event.target.value);
    }
    const inputBlurHandler = (event) => {
        setInputTouched(true);
    }

    const resetValue = (event)=> {
        setInputValue(event.target.value);
    }

    return {
        inputValue, 
        isFieldValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        resetValue
    }
}

export default useForm;