import '../styles/global.css';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer_container">
            <div className="footer-one-third first-footer-elem">
                <h1>POUR NE RIEN RATER</h1>
                <h2>Inscris-toi à la newsletter</h2>
                <div className="email-NL-container">
                    <a target="_blank" rel="noreferrer" href="https://cdn.forms-content.sg-form.com/4dbd3c97-88c4-11ec-90e5-12613d3760bf" className="go-to-sg-form">REJOINDRE LA LISTE DE CONTACT</a>
                </div>
            </div>
            <div className="footer-one-third second-footer-elem">
                <h1>BESOIN D'AIDE ?</h1>
                <ul>
                    <li><a href="mailto:vhex.eip@gmail.com?subject=Prise de contact depuis la Landing Page">Contact</a></li>
                    <li><a href="/vxWeb_landingpage/story">Qui sommes-nous ?</a></li>
                </ul>
            </div>
            <div className="footer-one-third third-footer-elem">
                <h1>SUIVEZ-NOUS</h1>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="https://github.com/Vhex-org">Github</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;