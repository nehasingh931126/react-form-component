import useForm from "./hooks/use-form";
const BasicForm = (props) => {
  let formValid = false;
  const { inputValue: nameInput,
    isFieldValid: isNameValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurChangeHandler,
    resetValue: resetName } = useForm((value) => {
      return value.trim() !== ''
    })

  const { inputValue: lnameInput,
    isFieldValid: isLnameValid,
    hasError: lnameHasError,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurChangeHandler,
    resetValue: resetLname } = useForm((value) => {
      return value.trim() !== ''
    })

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
  
  return (
    <form onSubmit={formChangeHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={nameInput} onChange={nameChangeHandler} onBlur={nameBlurChangeHandler}/>
          {nameHasError  && <p class="error-text">Name is not valid</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lnameInput} onChange={lnameChangeHandler} onBlur={lnameBlurChangeHandler } />
          {lnameHasError && <p class="error-text">Lname is not valid</p>}
        </div>
      </div>
      <div className='form-control'>
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
