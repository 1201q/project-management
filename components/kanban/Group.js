import styled from "styled-components";
import Task from "./Task";
import Dot from "@/public/menu-dots-vertical.svg";
import Plus from "@/public/plus-small.svg";

const Group = ({ groupName, tasks }) => {
  return (
    <Container>
      <GroupHeader>
        <GroupName>{groupName}</GroupName>
        <Controller>
          <Plus width={23} height={23} fill={"gray"} />
          <Dot
            width={14}
            height={14}
            style={{ marginLeft: "5px" }}
            fill={"gray"}
          />
        </Controller>
      </GroupHeader>
      {tasks?.map((task, index) => (
        <Task key={index} title={task.title} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 280px;
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  width: 100%;
  height: 50px;
  /* border: 1px solid blue; */
  background-color: white;

  z-index: 2;
  padding: 0px;
  /* border-bottom: 1px solid lightgray; */
`;

const GroupName = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const Controller = styled.div`
  display: flex;
  align-items: center;
`;

export default Group;
