import {useRef, useState} from 'react';
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameChangeFieldHandler = (event)=> {
    setEnteredName(event.target.value);
  }
  const formSubmissionHandler = (event)=> {
    event.preventDefault(); //Why because the HTTP Server request is sent so to avoid the default behaviour
    console.log(enteredName);
    // if(enteredName)
  }
  return (
    <form>
      <div className='form-control' onSubmit={formSubmissionHandler}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeFieldHandler}/>
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
