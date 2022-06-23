import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { PageHero, ContactForm } from "../components";

const Contact = () => {
  return (
    <main>
      <PageHero title='Contact' />
      <Wrapper className='page-100'>
        <div className='section-center'>
          <ContactForm />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  h2 {
    font-size: 1.6rem;
    text-align: center;
  }
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default Contact;
