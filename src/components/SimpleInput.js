import {useState} from 'react';
import useInput from './hooks/use-input';
const SimpleInput = () => {
  const { value: enteredName, 
    isValid: nameIsValid,
    hasError: nameHasError, 
    valueChangeFieldHandler : nameChangeHandler, 
    valueInputBlurHandler: nameBlurChangeHandler, resetFunction:resetName} = useInput(value=> {
    return value.trim() !== ''
  });

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched; 

  const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';
  let formIsValid = false;
  if (nameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }
  
  const formSubmissionHandler = (event)=> {
    event.preventDefault(); //Why because the HTTP Server request is sent so to avoid the default behaviour
    if (!nameIsValid) {
      return;
    }

    resetName('');
  }

  const emailChangehandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const emailBlurHandler = (event)=> {
    setEnteredEmailTouched(true);
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurChangeHandler}/>
        {nameHasError  && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>  
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' value={enteredEmail} onChange={emailChangehandler} onBlur={emailBlurHandler} />
        {emailInputIsInvalid && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
