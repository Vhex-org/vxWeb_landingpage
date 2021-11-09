import logo_round from '../assets/logo_round_vhex.png';
import logo_text from '../assets/logo_text_vhex.JPG';
import logo_account from '../assets/logo_account.JPG';
import '../styles/global.css';
import '../styles/Header.css';

function Header() {
    return (
        <div className="header_container">
            <div className="header_logo_container">
                <a href="/">
                    <img src={logo_round} className="header_logo_round" alt="logo_rond_vhex"></img>
                    <img src={logo_text} className="header_logo_text" alt="logo_text_vhex"></img>
                </a>
            </div>
            <div className="header_menu_entry_container">
                <h1 className="header_menu_entry header_menu_blog">BLOG</h1>
                <h1 className="header_menu_entry header_menu_forum">FORUM</h1>
                <h1 className="header_menu_entry header_menu_forge">FORGE</h1>
                <h1 className="header_menu_entry header_menu_shop">SHOP</h1>
            </div>
            <div className="header_account_container">
                <a href="/account"><img src={logo_account} alt="logo_account"></img></a>
            </div>
        </div>
    );
}

export default Header;