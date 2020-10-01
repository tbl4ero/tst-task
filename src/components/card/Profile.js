import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ownerTypes = {
  agent: "Агент",
};

const LikeButton = styled.button`
  background: unset;
  outline: unset;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: red;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Row = styled.div`
  display: flex;
  height: ${(props) => props.rowHeight};
  flex-direction: ${(props) => (props.hasRows ? "column" : "row")};
  align-items: center;
`;

const Column = styled.div`
  margin-left: ${(props) => props.end && "auto"};
`;

const Title = styled.h3`
  font-weight: 300;
`;

const Faded = styled.p`
  font-weight: 900;
  color: rgba(0, 0, 0, 0.3);
`;

const FeatureList = styled.ul`
  list-style: none;
`;

const Profile = ({ flat }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Container>
      <Row rowHeight="100px">
        <Column end>
          <LikeButton onClick={() => setLiked(!liked)}>
            {liked ?  <AiFillHeart /> : <AiOutlineHeart />}
          </LikeButton>
        </Column>
      </Row>
      <Row rowHeight="40px">
        <Column>
          <Title>{flat.attributes.title}</Title>
        </Column>
        <Column end="true">
          <Faded>
            {flat.attributes.area} {flat.attributes.unit}
          </Faded>
        </Column>
      </Row>
      <Row>
        <FeatureList>
          <Row>
            <Faded>Улица</Faded> : {flat.attributes.address.street}
          </Row>
          <Row>
            <Faded>Дом</Faded> : {flat.attributes.address.house}
          </Row>
          <Row>
            <Faded>Квартира</Faded> : {flat.attributes.address.room}
          </Row>
        </FeatureList>
      </Row>
      <Row rowHeight="100px">
        <Column>
          {flat.relationships.attributes.last_name},{" "}
          {flat.relationships.attributes.first_name}{" "}
          {flat.relationships.attributes.middle_name}
        </Column>
        <Column end>
          <Faded>{ownerTypes[flat.relationships.type]}</Faded>
        </Column>
      </Row>
    </Container>
  );
};

export default Profile;
