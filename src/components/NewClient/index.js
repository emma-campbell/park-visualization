import { Link } from "react-router-dom";
import styled from "styled-components";

// RECHART
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer
} from "recharts";

// LOGO
import PARK from "../../images/PARK.png";

// Sub-Components
import Confidence from "./Confidence";
import SubScore from "./SubScore";
import ShareResults from "./ShareResults";

const NewClientDiv = styled.div`
  height: 100vh;
`;

const LogoBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 2em;
  padding-right: 2em;
  align-items: center;
  & img {
    padding: 0.5em;
    width: 4em;
    height: 4em;
  }

  & h1 {
    padding: 0;
    margin: 0;
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
  gap: 20px;
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
  display: flex;
  width: 100%;
  padding-bottom: 1em;
`;

const Graph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const NewClient = () => {
  var data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <NewClientDiv>
      <LogoBar>
        <Link to="/">
          <img src={PARK} alt="PARK" />
        </Link>
        <h1>Your results are in...</h1>
      </LogoBar>
      <Content>
        <SideBar>
          <Confidence score="3" confidence="78" />
          <ShareResults />
        </SideBar>
        <Data>
          <Scores>
            <SubScore />
          </Scores>
          <Graph>
            <ResponsiveContainer width="95%" height="95%">
              <BarChart fontFamily={'Hind, sans-serif'} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip wrapperStyle={{fontFamily: 'Hind, san-serif'}}/>
                <Legend wrapperStyle={{fontFamily: 'Hind, san-serif'}}/>
                <Bar dataKey="pv" fill="#003972" />
                <Bar dataKey="uv" fill="#003972" />
              </BarChart>
            </ResponsiveContainer>
          </Graph>
        </Data>
      </Content>
    </NewClientDiv>
  );
};

export default NewClient;
