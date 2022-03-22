import logo_round from '../assets/logo_round_vhex.png';
import logo_text from '../assets/logo_text_vhex.JPG';
import logo_account from '../assets/logo_account.JPG';
import '../styles/global.css';
import '../styles/Header.css';

function Header() {
    function verifLocalStorage() {
        console.log(localStorage.getItem("user_email"));
        if (localStorage.getItem("user_email") && localStorage.getItem("user_password")) {
            window.location.href = "/account";
        } else {
            window.location.href = "/login";
        }
    }
    return (
        <div className="header_container">
            <div className="header_logo_container">
                <a href="/">
                    <img src={logo_round} className="header_logo_round" alt="logo_rond_vhex"></img>
                    <img src={logo_text} className="header_logo_text" alt="logo_text_vhex"></img>
                </a>
            </div>
            <div className="header_menu_entry_container">
                <h1 className="header_menu_entry header_menu_blog">BIENVENUE CHEZ VHEX</h1>
            </div>
            <div className="header_account_container">
                <img src={logo_account} alt="logo_account"></img>
            </div>
        </div>
    );
}

export default Header;