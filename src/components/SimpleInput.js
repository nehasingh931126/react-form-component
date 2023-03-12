import useInput from './hooks/use-input-reducer';
const SimpleInput = () => {
  const { value: enteredName, 
    isValid: nameIsValid,
    hasError: nameHasError, 
    valueChangeFieldHandler : nameChangeHandler, 
    valueInputBlurHandler: nameBlurChangeHandler, resetFunction:resetName} = useInput(value=> {
    return value.trim() !== ''
  });

  const { value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeFieldHandler: emailChangeHandler,
    valueInputBlurHandler: emailBlurHandler, resetFunction: resetEmail } = useInput(value => {
      return value.includes('@')
    });

  const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';
  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true
  }
  
  const formSubmissionHandler = (event)=> {
    event.preventDefault(); //Why because the HTTP Server request is sent so to avoid the default behaviour
    if (!nameIsValid) {
      return;
    }

    resetName('');
    resetEmail('');
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
        <input type='email' id='email' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailHasError && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
