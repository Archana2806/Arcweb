import React from "react";
import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/Archana2806" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="www.linkedin.com/in/archanamhany" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
            <a href="mailto:archanamohanty2002@gmail.com" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiMail />
            </a>
        </div> 
    ); 
}

export default Social;