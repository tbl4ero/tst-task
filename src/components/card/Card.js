import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./Profile";

const CardsContainer = styled.div`
  display: grid;
  width: 100%;
  padding-top: 40px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(290px, 500px));
  grid-gap: 40px;
`;

const StyledCard = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  margin: 0 auto;
`;

const Card = (props) => {
  const [liked, setLiked] = useState(false);

  return (
    <StyledCard>
      <Image src="/public/no-image.png" />
      <Profile {...props} />
    </StyledCard>
  );
};

const CardList = (props) => {
  return (
    <CardsContainer>
      {props.flatList.map((entry) => {
        console.log(entry);
        return <Card key={entry.id} flat={entry} />;
      })}
    </CardsContainer>
  );
};

export default CardList;
