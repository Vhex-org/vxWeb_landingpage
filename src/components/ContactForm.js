import '../styles/global.css';
import '../styles/ContactForm.css';
import { Component } from 'react';

class ContactForm extends Component {
    state = {
        email: {
            recipient: '',
            sender: 'vhex.eip@gmail.com',
            subject: 'Contact From Customer',
            text: ''
        }
    }
    
    sendEmail = _ => {
        const { email } = this.state;
        fetch(`http://127.0.0.1:4567/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`)
        .catch(err => console.log(err))
    }

    render() {
        const { email } = this.state;
        return (
            <div className="ContactForm-content">
                <div className="contact-container">
                    <h1 className="contactform-title first-letter-g">Contact</h1>
                    <select className="contact-select-reason"
                        onChange={e => this.setState({ email: { ...email, subject: e.target.value } })}>
                        <option>Option 1</option>
                        <option>Option 2</option>
                    </select>
                    <div className="contact-left-right-container">
                        <div className="contact-left-container">
                            <input className="first-letter-g contact-first-name" placeholder="Prénom *"/>
                            <input className="first-letter-g contact-last-name" placeholder="NOM *"/>
                            <input placeholder="Email *"
                                onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })}/>
                            <div className="contact-agreement">
                                <input type="checkbox"/>
                                <p>J'accepte de partager mes informations avec Vhex</p>
                            </div>
                        </div>
                        <div className="contact-right-container">
                            <textarea className="contact-input-msg" placeholder="Comment pouvons-nous vous aider ?"
                                onChange={e => this.setState({ email: { ...email, text: e.target.value } })}/>
                        </div>
                    </div>
                    <button className="contact-send-form" onClick={this.sendEmail}>CONFIRMER</button>
                </div>
            </div>
        );
    }
}

export default ContactForm;