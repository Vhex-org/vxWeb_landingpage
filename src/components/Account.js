import '../styles/global.css';
import '../styles/Account.css';

function Account() {
    function signInToSignUp() {
        var toShow = document.querySelector(".create-account-content");
        var toHide = document.querySelector(".login-account-content");;

        toShow.classList.add("active-account-bloc");
        toHide.classList.remove("active-account-bloc");
    }

    function signUpToSignIn() {
        var toShow = document.querySelector(".login-account-content");
        var toHide = document.querySelector(".create-account-content");;

        toShow.classList.add("active-account-bloc");
        toHide.classList.remove("active-account-bloc");
    }

    return (
        <div className="account-content">
            <div className="account-container create-account-content active-account-bloc" onMouseOver={signInToSignUp}>
                <h1 className="account-title account-sign-up">Sign up</h1>
                <div className="account-input-container">
                    <input placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="password" placeholder="Confirm Password"></input>
                </div>
                <button className="account-send-form">CONFIRMER</button>
            </div>
            <div className="account-container login-account-content" onMouseOver={signUpToSignIn}>
                <h1 className="account-title account-sign-in">Sign in</h1>
                <div className="account-input-container">
                    <input placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                </div>
                <button className="account-send-form">CONFIRMER</button>
            </div>
        </div>
    );
}

export default Account;