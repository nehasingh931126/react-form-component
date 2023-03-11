import {useState} from 'react';
const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true
  }
  const nameChangeFieldHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = (event)=> {
    event.preventDefault(); //Why because the HTTP Server request is sent so to avoid the default behaviour
    setEnteredNameTouched(true);  
    if (nameInputIsInvalid) {
      return;
    }
      
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameChangeFieldHandler} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid  && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
