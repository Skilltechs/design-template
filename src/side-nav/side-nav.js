import './side-nav.css'

const SideNav = () => {
    return ( 
        <div className="side-nav">
            <i class="bi bi-layout-sidebar-inset"></i>
            <div className="side-icons">
                <i className="bi bi-person"></i>
                <i className="bi bi-soundwave"></i>
                <i className="bi bi-inbox"></i>

                <i className="bi bi-chat-dots"></i>
                <i className="bi bi-file-earmark"></i>
                <i className="bi bi-speaker-fill"></i>
            </div>
        </div>
     );
}
 
export default SideNav;