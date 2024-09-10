import '../styles/About.css'

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaRust, FaLaravel, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>I am a programmer with strong analytical skills and extensive experience in software development. With a proven ability to identify and solve complex technical issues, I have a track record of efficiently and effectively addressing challenging problems.</p>
                <p>My expertise includes working with SQL Server for database management and data analysis, as well as application development and maintenance. I also have experience as an Application Administrator, which allows me to ensure that applications run smoothly and meet user needs.
                I believe that teamwork is crucial for project success, and I always strive to collaborate with team members to achieve common goals. With a structured approach and attention to detail, I am committed to delivering the best results in every project I undertake.
                </p>
                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaPhp /><FaHtml5 /><SiJavascript /><FaReact /><MdOutlineCss />
                    <FaGolang /><FaBootstrap /><FaRust /><RiTailwindCssFill />
                    <FaLaravel /><DiCodeigniter /><FaGit />

                </div>
            </div>
        </section>
    )
}

export default About