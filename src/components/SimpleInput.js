import {useEffect, useRef, useState} from 'react';
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  
  const nameChangeFieldHandler = (event) => {
    setEnteredName(event.target.value);
  }


  // flaw of setting the state as true for enteredNameIsValid
  useEffect(()=> {
    if(enteredNameIsValid) {
      console.log('Name input is valid')
    }
  }, [enteredNameIsValid])
  // flaw of setting the state as true for enteredNameIsValid

  const formSubmissionHandler = (event)=> {
    event.preventDefault(); //Why because the HTTP Server request is sent so to avoid the default behaviour
    setEnteredNameTouched(true);

    if(enteredName.trim() === '') { // validations
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    const enteredValue = nameInputRef.current.value;
  }
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' value={enteredName} onChange={nameChangeFieldHandler}/>
        {nameInputIsInvalid  && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
