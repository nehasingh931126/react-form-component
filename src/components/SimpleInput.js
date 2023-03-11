import {useState} from 'react';
const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputIsInvalid = enteredName.trim() === '' && enteredNameTouched;  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

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
        <input ref={nameInputRef} type='text' id='name' value={enteredName} onChange={nameChangeFieldHandler} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid  && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
