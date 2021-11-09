import '../styles/global.css';
import '../styles/ContactForm.css';

function ContactForm() {
    return (
        <div className="ContactForm-content">
            <div className="contact-container">
                <h1 className="contactform-title first-letter-g">Contact</h1>
                <select className="contact-select-reason">
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
                <div className="contact-left-right-container">
                    <div className="contact-left-container">
                        <input className="first-letter-g contact-first-name" placeholder="Prénom *"></input>
                        <input className="first-letter-g contact-last-name" placeholder="NOM *"></input>
                        <input placeholder="Email *"></input>
                        <div className="contact-agreement">
                            <input type="checkbox"/>
                            <p>J'accepte de partager mes informations avec Vhex</p>
                        </div>
                    </div>
                    <div className="contact-right-container">
                        <textarea className="contact-input-msg" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                    </div>
                </div>
                <button className="contact-send-form">CONFIRMER</button>
            </div>
        </div>
    );
}

export default ContactForm;