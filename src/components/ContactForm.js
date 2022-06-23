import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  // const [state, handleSubmit] = useForm("contactFirst");
  // console.log(state);
  // if (state.succeeded) {
  //   return (
  //     <StyledForm>
  //       <h3>Thanks for joining!</h3>
  //     </StyledForm>
  //   );
  // }
  // return (
  //   <StyledForm onSubmit={handleSubmit}>
  //     <div className='form-control'>
  //       <label htmlFor='email'>Email Address: </label>
  //       <input id='email' type='email' name='email' />
  //       <br />
  //       <ValidationError prefix='Email' field='email' errors={state.errors} />
  //     </div>
  //     <div className='form-control'>
  //       <label htmlFor='name'>Full Name: </label>
  //       <input type='text' id='name' name='name' />
  //       <br />
  //       <ValidationError prefix='name' field='name' errors={state.errors} />
  //     </div>
  //     <div className='form-control'>
  //       <label htmlFor='message'>Message: </label>
  //       <textarea id='message' name='message' />
  //       <br />
  //       <ValidationError
  //         prefix='message'
  //         field='message'
  //         errors={state.errors}
  //       />
  //     </div>

  //     <button
  //       type='submit'
  //       disabled={state.submitting}
  //       className='styled-button'
  //     >
  //       Submit
  //     </button>
  //   </StyledForm>
  return (
    <StyledForm>
      <h1>Contact Form</h1>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  .form-styling {
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .form-control {
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  label {
    font-size: 1.6rem;
  }
  input {
    width: 100%;
    min-height: 2.5rem;
  }
  textarea {
    min-height: 10rem;
  }
  .styled-button {
    font-size: 1.6rem;
    background-color: var(--clr-primary-6);
    color: var(--clr-white);
    border: 1px solid var(--clr-primary-2);
    padding: 0.75rem 0.25rem;
    border-radius: var(--radius);
  }
`;

export default ContactForm;
