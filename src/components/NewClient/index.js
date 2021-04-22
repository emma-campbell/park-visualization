import { Link } from "react-router-dom";
import styled from "styled-components";

// LOGO
import PARK from "../../images/PARK.png";

// Sub-Components
import Confidence from "./Confidence";
import Speech from "./Speech";
import Face from "./Face";
import ShareResults from "./ShareResults";

const NewClientDiv = styled.div`
  height: 100vh;
`;

const LogoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & img {
    padding: 0.5em;
    padding-left: 2em;
    width: 4em;
    height: 4em;
  }
`;

const Content = styled.div`
  justify-content: space-between;
  height: 90vh;
  display: flex;
  padding: 2em;
`;

const SideBar = styled.div`
  padding-bottom: 1em;
  display: grid;
  grid-template-rows: 55vh 25vh;
  gap: 15px;
  width: 45%;
`;

const Data = styled.div`
  padding-left: 2em;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
`;

const Scores = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  gap: 15px;
  width: 100%;
  padding-bottom: 2em;
`;

const Graph = styled.div`
  height: 45vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const NewClient = () => {
  return (
    <NewClientDiv>
      <LogoBar>
        <Link to="/">
          <img src={PARK} alt="PARK" />
        </Link>
      </LogoBar>
      <Content>
        <SideBar>
          <Confidence />
          <ShareResults />
        </SideBar>
        <Data>
          <Scores>
            <Speech />
            <Face />
          </Scores>
          <Graph>
            <h2>GRAPH</h2>
          </Graph>
        </Data>
      </Content>
    </NewClientDiv>
  );
};

export default NewClient;