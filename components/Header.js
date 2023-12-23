import styled from "styled-components";

const Header = ({ height }) => {
  return <Container height={height}>Kanban</Container>;
};
const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.height};
  background-color: white;

  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 26px;
  font-weight: 600;
`;

export default Header;
