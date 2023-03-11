import {useRef, useState} from 'react';
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameChangeFieldHandler = (event) => {
    setEnteredNameIsValid(false);
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = (event)=> {
    event.preventDefault(); //Why because the HTTP Server request is sent so to avoid the default behaviour
    console.log(enteredName);
    if(enteredName.trim() === '') { // validations
      setEnteredNameIsValid(false);
      return;
    }

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue)
  }
  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' value={enteredName} onChange={nameChangeFieldHandler}/>
        {!enteredNameIsValid  && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
