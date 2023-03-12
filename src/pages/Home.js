import React from "react";
import { Link, useNavigate } from "react-router-dom"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Dinesh Bhadane</h2>
        <div className="prompt">
          <p>A computer engineering graduate specializing in the development of web applications with problem-solving skills. Passionate about coding and seeking to apply knowledge and skills across a range of applications.</p>
          <a href="https://www.linkedin.com/in/iamdb" target="_blank"><LinkedInIcon /></a>
          <a href="mailto:bhadanedinesh49@gmail.com" target="_blank"><EmailIcon /></a>
          <a href="https://github.com/Dinesh3098" target="_blank"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, StyledComponents, Apollo client
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer, MongoDB, Rest API, AliBaba Cloud, AWS S3, AWS SES, AWS EC2
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, TypeScript</span>
          </li>
          <li className="item">
            <h2>Other Skills</h2>
            <span>
             GitHub, Git, Gitlab, Socket.io, Stripe, Razorpay, VPS Hosting
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
