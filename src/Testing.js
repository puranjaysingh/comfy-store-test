import React from "react";
import styled from "styled-components";

function Testing() {
  return (
    <Wrapper>
      <h3>Hello World</h3>
      <p>
        Testing
        <div>Banana</div>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  p {
    div {
      color: green;
    }
    color: red;
  }
`;

export default Testing;
