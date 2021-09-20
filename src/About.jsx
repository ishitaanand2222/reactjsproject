import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "../src/images/about.png";

const About =()=>{
  return(
    <>
     <Common name='Welcome To about page' imgsrc={web} visit="./contact"
      btname="Contact Now"/>
    </>
  )
}

export default About;