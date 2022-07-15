import {FaGithub} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer_container">
            © 2022 PiquedInterest developed by Dayton Chen
            <div className="github_link">
                <a href="https://github.com/spursforever/PiquedInterest">
                <FaGithub id="my-github" />                    
                </a>
            <a href="https://www.linkedin.com/in/dayton-chen-0abb7abb/">
                <FaLinkedinIn id="my_linkedin" />
            </a>
            </div>
        </footer>
    )
}

export default Footer;