import './header.css'

const Header = () => {
    return ( 
        <div className="header">
            <div class="logo">
                <p> Ever<span>Green</span> </p>
            </div>
            <div class="separator"></div>
            <div class="input-container">
                <button><i className="fa fa-search"></i></button>
                <input type="text" placeholder="Search by book title or author name"/>
            </div>
        </div>
     );
}
 
export default Header;