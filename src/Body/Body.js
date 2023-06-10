import "./Body.css";
import Book from "./book";

const Body = () => {
    return ( 
        <div className="body">
            <div className="cover">
                <div className="overlay"></div>
                <div className="discover">Discover</div>
                {/* <img class="image" src="./././assets/download.jpeg" alt="" /> */}
                <hr />
            </div>
            <div className="book-list">
                <Book />
            </div>
        </div>
     );
}
 
export default Body;