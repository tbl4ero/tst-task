import React, { useState, useEffect } from "react";
import CardList from "./card/Card";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f4f4f4;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
`;

const App = () => {
  const [flatList, setFlatList] = useState([]);

  useEffect(() => {
    fetch("public/entities.json")
      .then((resp) => resp.json())
      .then((data) => setFlatList(data.response));
  }, []);

  return (
    <Wrapper>
      <CardList {...{ flatList }} />
    </Wrapper>
  );
};

export { App };
