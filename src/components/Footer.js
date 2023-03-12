import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link, useNavigate } from "react-router-dom"
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/iamdb" target="_blank"><LinkedInIcon /></a>
                <a href="https://instagram.com/i_am_db_?igshid=ZDdkNTZiNTM=" target="_blank"><InstagramIcon /></a>
                <a href="https://mobile.twitter.com/i_am_db__" target="_blank"> <TwitterIcon /></a>
                {/* <a href="https://www.facebook.com/dinesh.bhadane.18" target="_blank"> <FacebookIcon /></a> */}
            </div>
            <p>Contact: <a href="tel:7048555941" style={{ color: "yellow", textDecoration: "none" }}>+91 7048555941</a></p>
            <p> &copy; 2023 dineshinfo.com</p>
        </div >
    );
}

export default Footer;
