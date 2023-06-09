import './Nav.css'

const Nav = () => {
    return ( 
        <div className="nav">
            <hr/>
            <ul>
                <li>
                    <i></i>
                    <span>Reading</span>
                </li>
                <li>
                    <i></i>
                    <span>History</span>
                </li>
                <li>
                    <i></i>
                    <span>Saved</span>
                </li>
            </ul>
            <button>
                Explore
            </button>
        </div>
     );
}
 
export default Nav;