import "./features.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import info from "./pageData";
import MainChart from "../Chart/MainChart";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Features() {
  const [mainChart, setMainChart] = useState({
    target: info.mainchart,
    name: "Traffic",
  });

  // _____ line chart maker _______
  const reavanueLineChart = (information) => {
    return (
      <ResponsiveContainer>
        <LineChart width="100%" height={150} data={information}>
          <Line dataKey="uv" stroke="#000000bd" />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  // }
  return (
    <section className="flex flex-wrap gap-3 " >
      {/* ==================   Reavanue  ================= */}
      <Link
        onClick={() => {
          setMainChart({ target: info.reavanue, name: "Reavanue" });
        }} 
        className="feature-box Reavanue"
      >
        <h3 className="font-medium text-xl">
          6.200k ( 40.9% &nbsp;
          <KeyboardArrowUpIcon className="text-[rgba(157,228,148,0.93)] bg-[#000]/50 rounded-full" />
          &nbsp;)
        </h3>
        <h2 className="feature-box__title">Accidents(2019)</h2>
        {reavanueLineChart(info.reavanue)}
      </Link>
      {/* nnnnn */}
      <Link
        onClick={() => {
          setMainChart({ target: info.sessions, name: "sessions" });
        }}
        className="feature-box sessions"
      >
        <h3 className="font-medium text-xl">
          2.9k ( 23.6% &nbsp;
          <KeyboardArrowDownIcon className="text-[rgb(255,55,55)]  bg-[#000]/50 rounded-full" />
          &nbsp;)
        </h3>
        <h2 className="feature-box__title ">Accidents(2020)</h2>
        {reavanueLineChart(info.sessions)}
      </Link>
      {/* ===================  sales  ================= */}
      <Link
        onClick={() => {
          setMainChart({ target: info.sales, name: "sales" });
        }}
        className="feature-box sales"
      >
        <h3 className="font-medium text-xl">
          6.200K ( 10.3% &nbsp;
          <KeyboardArrowDownIcon className="text-[rgb(255,55,55)]  bg-[#000]/50 rounded-full " />
          &nbsp;)
        </h3>
        <h2 className="feature-box__title ">Accidents(2021)</h2>
        {reavanueLineChart(info.sales)}
      </Link>

      {/* =================    Costs  =================== */}
      <Link
        onClick={() => {
          setMainChart({ target: info.costs, name: "Costs" });
        }}
        className="feature-box costs"
      >
        <h3 className="font-medium text-xl">
          8.430k ( 7.4% &nbsp;
          <KeyboardArrowUpIcon className="text-[rgba(157,228,148,0.93)]  bg-[#000]/50 rounded-full" />
          &nbsp;)
        </h3>
        <h2 className="feature-box__title ">Accidents(2022)</h2>
        {reavanueLineChart(info.costs)}
      </Link>

      {/* =================   sessions ==================== */}



      {/* _____________  Main chart box _______________*/}
      <div className="h-[300px] sm:h-[400px] lg:h-[500px] box-container pb-12 sm:pb-4 " style={{ boxShadow:'0px 30px 60px -5px #000', borderRadius: '20px', backgroundColor:'#050629', minHeight:'580px' }}>
        {/* main chart detail */}


        {/* _____  main chart ______ */}
        <MainChart ></MainChart>
      </div>
    </section>
  );
}
