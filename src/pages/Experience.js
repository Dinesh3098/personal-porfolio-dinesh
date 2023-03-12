import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#0b0c0e">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - March 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sr. Software Developer - VHM Infotech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ahmedabad
          </h4>
          <p>Developed the backend infrastructure for 3 projects.</p>
          <ol>
            <li>Skillsture</li>
            <li>Eautogen</li>
            <li>Mgram Chat App</li>
          </ol>
          <p><b>1. Skillsture</b></p>
          <ul>
            <li>Skillsture is the platform where a user can get training and certification based on skills they want to learn.</li>
            <li>Implemented the backend from scratch for skillsture which is one of the malaysia's largest
              training and certification platform.</li>
            <li>Wrote APIs using graphql at backend and done the integration of APIs for dashboard of skillsture platform</li>
            <li>Technologies Used: JavaScript, Node.js,Express.js, Gitlab, Zoom meet API, Ali OSS, React.js, JWT Token, Graphql, REST APIs, MongoDB, Stripe</li>
            <li>Website Link: https://skillsture.com/</li>
          </ul>
          <p><b>2. Eautogen</b></p>
          <ul>
            <li>Eautogen is the platform where a user can buy car insurance quote based there car brand ,car model and car year</li>
            <li>Implemented the backend using node.js and express.js from scratch.</li>
            <li>Wrote APIs using graphql at backend and done the integration of APIs for eautogen dashboard</li>
            <li>Technologies Used: JavaScript, Node.js,Express.js, Gitlab, Ali OSS, React.js, JWT Token, Graphql, REST APIs, MongoDB, RevPay, Ipay88</li>
            <li>Website Link: https://www.eautogen.my/</li>
          </ul>
          <p><b>3. Mgram Chat App</b></p>
          <ul>
            <li>Mgram is a chat app that provides features like sending and deleting text messages and multi-media messages. Users can also create groups. The message is seen or not.</li>
            <li>Learned the socket.io to implement concurrent messaging.</li>
            <li>Technologies Used: JavaScript, Node.js,Express.js, Gitlab, JWT Token, Graphql, REST APIs, MongoDB, Socket.io</li>
          </ul>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2021 - May 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer - Quoality
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gurgaon
          </h4>
          <ul>
            <li>Ancillary Services Management platform for Hotels.</li>
            <li>Implemented the backend from scratch for The
              Hosteller which is one of india's largest
              backpacker hostel chains.</li>
            <li>Wrote APIs using eZee which is an online reservation
              service for those hotels & hotel groups that aims to
              boost guest’s bookings revenue by offering a
              customized booking engine</li>
            <li>Technologies Used: JavaScript, Node.js,Express.js, Github, AWS Lambda, S3, SES, React.js, JWT Token, Graphql, REST APIs, MongoDB, Razorpay</li>
            <li>Website Link: https://www.thehosteller.com/</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2020 - Jun 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer Trainee - 10X Academy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Banglore
          </h4>

          <ul>
            <li>Successfully implemented a full-stack application
              that includes the features of social media where
              users can post, like and delete the posts.</li>
            <li>Contributed to developing the front and back end of
              the application.</li>
            <li>Technologies Used: JavaScript, Node.js, React.js, JWT Token, Express.js, Github , REST APIs, MongoDB</li>
            <li>Github: https://github.com/Dinesh3098/apprenticeship-team-f</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2019"
          iconStyle={{ background: "#0b0c0e", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SAL Institute of technology and engineering research, Ahmedabad
          </h3>

          {/* <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4> */}

          <p> Bachelor's Degree, Computer Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={{ background: "#0b0c0e", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Governmant Polytechnic, Ahmedabad
          </h3>
          <p> Diploma, Computer Engineering</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
