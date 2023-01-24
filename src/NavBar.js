import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const NavBar = ( ) =>{
    return(
        <div className="header">
            <div className="header_logo">TANN &nbsp;TRIM</div>&nbsp;
            <div className="center_list">
                <span className="icon">Bags</span>
                <span className="icon">Travel</span>
                <span className="icon">Accesories</span>
                <span className="icon">Gifting</span>
                <span className="icon">Jewelery</span>
            </div>
            <div className="header_icon">
                <SearchIcon />
                <PersonIcon />
                <BookmarkIcon />
                <ShoppingBagIcon/>
            </div>
        </div>


    );
}
export default NavBar;