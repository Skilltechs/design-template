import SideNav from "../side-nav/side-nav";
import "./header.css";
import profile from "./TensorFlow2.jpg"
import logo from './Logo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return ( 
        <div className="header">
            <SideNav />
            <div className="header-content">
                <img src={logo} alt="img" />
                <div className="divider"></div>
                <p className="title-1"><b>Online Communities</b></p>
                <div className="icons">
                    <i class="bi bi-soundwave"></i>
                    <i class="bi bi-person-circle"></i>
                    <i class="bi bi-people-fill"></i>
                    <i class="bi bi-chat-dots"></i>
                    <i class="bi bi-file-earmark"></i>
                    <i class="bi bi-speaker-fill"></i>
                </div>
                <div className="search">
                    <i className="bi bi-search"></i>
                </div>
                <div className="divider"></div>
                <div className="icons-2">
                    <i class="bi bi-inbox"></i>
                    <i class="bi bi-bell"></i>
                    <i class="bi bi-cart"></i>
                    
                </div>
                <div className="profile">
                    <p> <b>GoldenBrain</b></p>
                    <img src={profile} alt="" />
                </div>
            </div>
        </div>
     )
}
 
export default Header;