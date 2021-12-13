import '../styles/global.css';
import '../styles/ContactForm.css';
import { Component } from 'react';

class ContactForm extends Component {
    state = {
        emailVhex: {
            recipient: '',
            sender: 'vhex.eip@gmail.com',
            subject: 'Contact From Customer',
            text: ''
        },
        emailCustomer: {
            recipient: '',
            sender: 'vhex.eip@gmail.com',
            subject: 'Contact Vhex',
            text: 'We have received your request and will respond as soon as it is processed !',
            firstName: '',
            lastName: ''
        }
    }

    // sendEmailVhex = _ => {
    //     const { emailVhex } = this.state;
    //     fetch(`http://127.0.0.1:4567/send-email-vhex?recipient=${emailVhex.recipient}&sender=${emailVhex.sender}&topic=${emailVhex.subject}&text=${emailVhex.text}`)
    //     .catch(err => console.log(err))
    // }

    // sendEmailCustomer = _ => {
    //     const { emailCustomer } = this.state;
    //     fetch(`http://127.0.0.1:4567/send-email-customer?recipient=${emailCustomer.recipient}&sender=${emailCustomer.sender}&topic=${emailCustomer.subject}&text=${emailCustomer.text}&firstName=${emailCustomer.firstName}&lastName=${emailCustomer.lastName}`)
    //     .catch(err => console.log(err))
    // }

    render() {
        const { emailVhex } = this.state;
        const { emailCustomer } = this.state;
        return (
            <div className="ContactForm-content">
                <div className="contact-container">
                    <h1 className="contactform-title first-letter-g">Contact</h1>
                    <select className="contact-select-reason"
                        onChange={e => this.setState({ emailCustomer: { ...emailCustomer, subject: e.target.value }, emailVhex: { ...emailVhex, subject: e.target.value } })}>
                        <option>Type of request</option>
                        <option>Products Information</option>
                        <option>Orders and Deliveries</option>
                        <option>After Sale Service</option>
                        <option>Returns</option>
                        <option>Contact Vhex</option>
                    </select>
                    <div className="contact-left-right-container">
                        <div className="contact-left-container">
                            <input className="first-letter-g contact-first-name" placeholder="Prénom *"
                                onChange={e => this.setState({ emailCustomer: { ...emailCustomer, firstName: e.target.value } })}/>
                            <input className="first-letter-g contact-last-name" placeholder="NOM *"
                                onChange={e => this.setState({ emailCustomer: { ...emailCustomer, lastName: e.target.value } })}/>
                            <input placeholder="Email *"
                                onChange={e => this.setState({ emailCustomer: { ...emailCustomer, recipient: e.target.value }, emailVhex: { ...emailVhex, recipient: e.target.value } })}/>
                            <div className="contact-agreement">
                                <input type="checkbox"/>
                                <p>J'accepte de partager mes informations avec Vhex</p>
                            </div>
                        </div>
                        <div className="contact-right-container">
                            <textarea className="contact-input-msg" placeholder="Comment pouvons-nous vous aider ?"
                                onChange={e => this.setState({ emailVhex: { ...emailVhex, text: e.target.value } })}/>
                        </div>
                    </div>
                    <button className="contact-send-form" onClick={(e) => {
                        fetch(`http://127.0.0.1:4567/send-email-vhex?recipient=${emailVhex.recipient}&sender=${emailVhex.sender}&topic=${emailVhex.subject}&text=${emailVhex.text}`)
                        .catch(err => console.log(err));
                        fetch(`http://127.0.0.1:4567/send-email-customer?recipient=${emailCustomer.recipient}&sender=${emailCustomer.sender}&topic=${emailCustomer.subject}&text=${emailCustomer.text}&firstName=${emailCustomer.firstName}&lastName=${emailCustomer.lastName}`)
                        .catch(err => console.log(err));
                    }}>CONFIRMER</button>
                </div>
            </div>
        );
    }
}

export default ContactForm;