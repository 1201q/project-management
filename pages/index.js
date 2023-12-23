import { authService } from "@/utils/firebase/client";
import { admin } from "@/utils/firebase/admin";
import styled from "styled-components";
import nookies from "nookies";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Test from "@/components/Test";
import KanbanPage from "@/components/kanban/KanbanPage";

const SIDEBAR_WIDTH = `230px`;
const HEADER_HEIGHT = `90px`;
const CONTENTS_WIDTH = `calc(100% - ${SIDEBAR_WIDTH})`;
const CONTENTS_HEIGHT = `calc(100vh - ${HEADER_HEIGHT})`;

export const getServerSideProps = async (ctx) => {
  try {
    // 토큰
    const cookies = nookies.get(ctx);
    const token = cookies.token
      ? await admin.auth().verifyIdToken(cookies.token)
      : null;
    let isLogin = false;
    let uid;

    if (token) {
      uid = token.uid;
      isLogin = true;
    }
    //

    return {
      props: {
        data: 1,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { isLogin: isLogin, uid: uid || null },
    };
  }
};

export default function Home() {
  return (
    <Container>
      <Sidebar width={SIDEBAR_WIDTH} />
      <Contents width={CONTENTS_WIDTH}>
        <Header height={HEADER_HEIGHT} />
        <Bottom height={CONTENTS_HEIGHT}>
          <Render>
            <KanbanPage />
          </Render>
        </Bottom>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Contents = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: 100%;
`;

const Bottom = styled.div`
  height: ${(props) => props.height};
  min-height: ${(props) => props.height};
  /* overflow-x 지우기 금지 */
  overflow-x: scroll;
`;

const Render = styled.div`
  width: fit-content;
`;
