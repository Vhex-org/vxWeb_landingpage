import '../styles/global.css';
import '../styles/Account.css';
import logo_crayon from '../assets/crayon.png';

import React, { useState } from 'react';

function Account() {
    const [accountCategory, setCategory] = useState('Informations');
    const userEmail = localStorage.getItem("user_email");
    const userPassword = localStorage.getItem("user_password");

    function displayLogout() {
        if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
            localStorage.removeItem('user_email');
            localStorage.removeItem('user_password');
            window.location.href = "/login";
        } else {
            //Do nothing
        };
    }

    return (
        <div className="my-account-container">
            <div className="my-account-banner">
            {(() => {
                        switch (accountCategory) {
                            case 'Informations':
                                return (
                                    <h1 className="fl-bold-gold">INFORMATIONS</h1>
                                )
                            case 'Adresses':
                                return (
                                    <h1 className="fl-bold-gold">ADRESSES</h1>
                                )
                            case 'Posts':
                                return (
                                    <h1 className="fl-bold-gold">POSTS</h1>
                                )
                            case 'Commandes':
                                return (
                                    <h1 className="fl-bold-gold">COMMANDES</h1>
                                )
                            default:
                                return (
                                    <h1 className="fl-bold-gold">OOPS</h1>
                                )
                        }
                    })()}
            </div>
            <div className="my-account-content">
                <div className="my-account-left">
                    <ul style={{listStyleType:'none'}}>
                        <li className="fl-bold-gold" onClick={() => setCategory("Informations")}>Informations</li>
                        <li className="fl-bold-gold" onClick={() => setCategory("Adresses")}>Adresses</li>
                        <li className="fl-bold-gold" onClick={() => setCategory("Commandes")}>Commandes</li>
                        <li className="fl-bold-gold" onClick={() => setCategory("Posts")}>Posts</li>
                        <li className="fl-bold-gold" onClick={() => displayLogout()}>Déconnexion</li>
                    </ul>
                </div>
                <div className="my-account-right">
                    {(() => {
                        switch (accountCategory) {
                            case 'Informations':
                                return (
                                    <div>
                                        <div className="my-account-info-line">
                                            <img src={logo_crayon} alt="bouton modifier"></img>
                                            <h3>Email :</h3>
                                            <p>{userEmail}</p>
                                        </div>
                                        <div className="my-account-info-line">
                                            <img src={logo_crayon} alt="bouton modifier"></img>
                                            <h3>Mot de passe :</h3>
                                            <p>{userPassword}</p>
                                        </div>
                                        <div className="my-account-save-container">
                                            <button className="my-account-save">SAUVEGARDER LES CHANGEMENTS</button>
                                        </div>
                                    </div>
                                )
                            case 'Adresses':
                                return (
                                    <div>
                                        Adresses
                                    </div>
                                )
                            case 'Posts':
                                return (
                                    <div>
                                        Posts
                                    </div>
                                )
                            case 'Commandes':
                                return (
                                    <div>
                                        Commandes
                                    </div>
                                )
                            default:
                                return (
                                    <div>
                                        Oops somoething went wrong :/
                                    </div>
                                )
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}

export default Account;