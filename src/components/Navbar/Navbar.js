import "./navbar.css";
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return <div id="navbar">
        <div id="navbarInner">
        <div id="navLeft">
            <span><Link><p className="navMenu" style={{color:"rgb(15, 15, 15)", fontFamily:"cursive"}}>YUGAL</p></Link></span>
        </div>
        <div id="navRight">
        <span className="menuHover"><Link to="#about"><p className="navMenu">ABOUT</p></Link></span>
        <span className="menuHover"><Link to="#skills"><p className="navMenu">SKILLS</p></Link></span>
        <span className="menuHover"><Link to="#portfolio"><p className="navMenu">PORTFOLIO</p></Link></span>
        <span className="menuHover"><Link to="#contact"><p className="navMenu">CONTACT</p></Link></span>
        <span><button className="resumeBtn">Resume</button></span>
        </div>
        </div>
    </div>
}

export default Navbar;
