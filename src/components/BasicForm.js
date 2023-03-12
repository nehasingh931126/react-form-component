import useForm from "./hooks/use-input-reducer";
const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== '';
  let formValid = false;
  const { inputValue: nameInput,
    isFieldValid: isNameValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurChangeHandler,
    resetValue: resetName } = useForm(isNotEmpty)

  const { inputValue: lnameInput,
    isFieldValid: isLnameValid,
    hasError: lnameHasError,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurChangeHandler,
    resetValue: resetLname } = useForm(isNotEmpty)

  const { inputValue: emailInput,
    isFieldValid: isEmailValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurChangeHandler,
    resetValue: resetEmail } = useForm((value) => {
      return value.trim() !== '' && value.includes('@')
    })
  
  const formChangeHandler = (event) => {
    event.preventDefault()
    if (!(isNameValid && isLnameValid && isEmailValid)) {
      return;
    }

    resetName('');
    resetLname('');
    resetEmail('');
  } 
  formValid = isNameValid && isLnameValid && isEmailValid;
  const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const lnameInputClasses = lnameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formChangeHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={nameInput} onChange={nameChangeHandler} onBlur={nameBlurChangeHandler}/>
          {nameHasError  && <p class="error-text">Name is not valid</p>}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lnameInput} onChange={lnameChangeHandler} onBlur={lnameBlurChangeHandler } />
          {lnameHasError && <p class="error-text">Lname is not valid</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailInput }  onChange={emailChangeHandler} onBlur={emailBlurChangeHandler} />
        {emailHasError && <p class="error-text">Email is not valid</p>}
      </div>
      <div className='form-actions'>
        <button type="submit" disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
