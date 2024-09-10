import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
import '../styles/Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} />
                <h3>Aditya Bagus</h3>
                <p>Programmer</p>
                <div className='socialMedia'>
                    <Link to='https://instagram.com/aditmv'><FaInstagram /></Link>
                    {/* <a href=''><FaTiktok /></a>
                    <a href=''><FaTwitter /></a>
                    <a href=''><FaFacebookF /></a> */}
                </div>
            </div>
        </header>
    )
}

export default Header