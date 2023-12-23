import styled from "styled-components";
import Calendar from "@/public/calendar-minus.svg";

const Task = ({ title }) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      <Info>
        <InfoContainer>
          <Calendar
            width={12}
            height={12}
            fill={"gray"}
            style={{ marginRight: "7px", marginTop: "-1px" }}
          />
          <UntilWhen>내일까지</UntilWhen>
        </InfoContainer>
        <StatusContainer>
          <Status>High</Status>
        </StatusContainer>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;
  height: auto;
  /* min-height: 110px; */
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  padding: 15px 15px;
  cursor: pointer;
`;
const TitleText = styled.div`
  width: 100%;
  height: auto;

  font-size: 16px;
  font-weight: 600;
  word-break: break-all;
`;

const Info = styled.div`
  height: fit-content;
  margin-top: 15px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StatusContainer = styled.div`
  margin-top: 10px;
`;

const UntilWhen = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: gray;
  margin-top: 1px;
`;

const Status = styled.div`
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-size: 12px;
  background-color: var(--color-green);
  color: white;
  border-radius: 15px;
  padding: 0px 7px;
`;

export default Task;
