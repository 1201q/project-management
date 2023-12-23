import styled from "styled-components";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import Group from "./Group";
import { useEffect, useState } from "react";
import { observeDoc, updateArrayField } from "@/utils/common/db";
import Controller from "./Controller";

const KanbanPage = () => {
  const [groups, setGroups] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectGroup, setSelectGroup] = useState();

  //
  const [task, setTask] = useState("");
  const [group, setGroup] = useState("");

  useEffect(() => {
    observeDoc("kanban", "kanban-collection", callback);

    return () => {
      observeDoc("kanban", "kanban-collection", callback);
    };
  }, []);

  const callback = (data) => {
    console.log(data);
    if (data.groups) {
      setGroups(data.groups);
      setSelectGroup(data.groups[0]?.id);
      setTasks(data.tasks);
    }
  };
  const addNewTask = async (e) => {
    e.preventDefault();

    const data = {
      writer: "currentUser",
      title: task,
      createdAt: dayjs().format(""),
      group: selectGroup,
      id: uuidv4(),
    };

    updateArrayField("kanban", "kanban-collection", "tasks", data)
      .then((res) => {
        console.log(res);
        setTask("");
      })
      .catch((error) => console.log(error));
  };

  const addNewGroup = async (e) => {
    e.preventDefault();

    const data = {
      name: group,
      id: uuidv4(),
    };

    updateArrayField("kanban", "kanban-collection", "groups", data)
      .then((res) => {
        console.log(res);
        setGroup("");
      })
      .catch((error) => console.log(error));
  };

  const returnSortedTasks = (tasks, groupId) => {
    return tasks?.filter((task) => task.group === groupId);
  };

  return (
    <Container>
      {groups.length > 0 && (
        <form onSubmit={addNewTask}>
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <select
            onChange={(e) => {
              setSelectGroup(e.target.value);
              console.log(e.target.value);
            }}
          >
            {groups.map((group) => (
              <option value={group.id} key={group.id}>
                {group.name}
              </option>
            ))}
          </select>
          <button type="submit">태스크를 새로 생성</button>
        </form>
      )}
      <form onSubmit={addNewGroup}>
        <input
          type="text"
          value={group}
          onChange={(e) => {
            setGroup(e.target.value);
          }}
        />
        <button type="submit">그룹을 새로 생성</button>
      </form>
      {/* <Controller /> */}
      <GroupContainer>
        {groups.map((group) => (
          <Group
            groupName={group.name}
            key={group.id}
            tasks={returnSortedTasks(tasks, group.id)}
          />
        ))}
      </GroupContainer>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  padding: 0px 30px 20px 30px;
  background-color: white;
`;

const GroupContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export default KanbanPage;
