import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  const tryArray = Array.from({ length: 5 }, (_, index) => {
    return <BsStar />;
  });
  console.log(tryArray);
  const newArray = tryArray.map((star, index) => {
    if (index < stars - (stars % 1)) {
      star = <BsStarFill />;
    }
    return star;
  });
  newArray[stars - (stars % 1)] = <BsStarHalf />;
  // const [numStars, setNumStars] = useState(0);

  // const numStars = stars - (stars % 1);
  // console.log(numStars);
  // const starArray = [];
  // for (let i = 0; i < numStars; i++) {
  //   starArray.push(<BsStarFill />);
  // }
  // if (stars % 1 !== 0) {
  //   starArray.push(<BsStarHalf />);
  // }
  // console.log(starArray);

  //Create array of 5 elements with stars
  // const starArray = [];
  // const wholeStars = stars - (stars % 1);
  // for (let i = 0; i < 5; i++) {
  //   starArray.push(<BsStar />);
  // }
  // const newArray = starArray.map((star, index) => {
  //   if (index < wholeStars) {
  //     star = <BsStarFill />;
  //   }
  //   return star;
  // });
  // newArray[wholeStars] = <BsStarHalf />;
  // return (
  //   <Wrapper>
  //     <div className='stars'>
  //       {newArray.map((star, index) => {
  //         return <span key={index}>{star}</span>;
  //       })}
  //     </div>
  //     <p className='reviews'>{`(${reviews} customer reviews)`}</p>
  //   </Wrapper>
  // );
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  console.log(tempStars);
  return (
    <Wrapper>
      <div className='stars'>
        {newArray.map((star, index) => {
          return <span key={index}>{star}</span>;
        })}
      </div>
      <p className='reviews'>{`(${reviews} customer reviews)`}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
