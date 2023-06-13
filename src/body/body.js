import './body.css'

const Body = () => {
    return ( 
        <div className="body-content">
            <div className="settings">
                <p><i class="bi bi-gear"></i> Login Information</p>
                <p><i class="bi bi-bell"></i> Notification Preferences</p>
                <p><i class="bi bi-lock"></i> Privacy</p>
                <p><i class="bi bi-person-fill-x"></i> Blocked Members</p>
                <p><i class="bi bi-people"></i> Group Invites</p>
                <p><i class="bi bi-cloud-arrow-down"></i> Export Data</p>
            </div>
            <div className="content">
                <p>Login Information</p>
                    <form action="">
                    <div className="password">
                        <p>Current Password</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="email">
                        <p>Account Email</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="new-password">
                        <p>Add Your New Password</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="repeat-password">
                        <p>Repeat your New Password</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='button'>
                        Save Changes
                    </div>
            </form>
            </div>
        </div>
     );
}
 
export default Body;