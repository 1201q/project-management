import styled from "styled-components";

const Sidebar = ({ width }) => {
  return <Container width={width}>1</Container>;
};

const Container = styled.div`
  background-color: lightgray;
  min-width: ${(props) => props.width};
  width: ${(props) => props.width};
  height: 100%;
  min-height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
`;

export default Sidebar;
