import styled from "styled-components";

const Test = () => {
  return (
    <div>
      <Mock>!</Mock>
      <Mock>!</Mock>
      <Mock>!</Mock>
      <Mock>!</Mock>
      <div style={{ display: "flex" }}>
        <Mock>!</Mock> <Mock>!</Mock> <Mock>!</Mock> <Mock>!</Mock>{" "}
        <Mock>!</Mock> <Mock>!</Mock> <Mock>!</Mock> <Mock>!</Mock>{" "}
        <Mock>!</Mock> <Mock>!</Mock> <Mock>!</Mock> <Mock>!</Mock>
      </div>
    </div>
  );
};

const Mock = styled.div`
  width: 400px;
  min-width: 400px;
  height: 300px;
  border: 1px solid black;
`;

export default Test;
