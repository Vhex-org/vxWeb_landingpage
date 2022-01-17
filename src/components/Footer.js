import '../styles/global.css';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer_container">
            <div className="footer-one-third first-footer-elem">
                <h1>POUR NE RIEN RATER</h1>
                <h2>Inscris-toi à la newsletter</h2>
                <div className="email-NL-container">
                    <input className="input-email-NL" placeholder="Email"></input>
                    <button className="ok-button">OK</button>
                </div>
            </div>
            <div className="footer-one-third second-footer-elem">
                <h1>BESOIN D'AIDE ?</h1>
                <ul>
                    <li><a href="/contact">Contact</a></li>
                    <li>FAQ</li>
                    <li><a href="/story">Qui sommes-nous ?</a></li>
                </ul>
            </div>
            <div className="footer-one-third third-footer-elem">
                <h1>SUIVEZ-NOUS</h1>
                <ul>
                    <li>Facebook</li>
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;