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

    function toggleCreatePassword() {
        const togglePassword = document.querySelector('#toggleCreatePassword');
        const password = document.querySelector('#createPassword');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';

        password.setAttribute('type', type);
        togglePassword.classList.toggle('bi-eye');
    }

    function toggleCreateConfirmPassword() {
        const togglePassword = document.querySelector('#toggleCreateConfirmPassword');
        const password = document.querySelector('#createConfirmPassword');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';

        password.setAttribute('type', type);
        togglePassword.classList.toggle('bi-eye');
    }

    function toggleLoginPassword() {
        const togglePassword = document.querySelector('#toggleLoginPassword');
        const password = document.querySelector('#loginPassword');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';

        password.setAttribute('type', type);
        togglePassword.classList.toggle('bi-eye');
    }

    return (
        <div className="account-content">
            <div className="account-container create-account-content active-account-bloc" onMouseOver={signInToSignUp}>
                <h1 className="account-title account-sign-up">Sign up</h1>
                <div className="account-input-container">
                    <input placeholder="Email"></input>
                    <input type="password" placeholder="Password" id="createPassword"></input>
                    <i className="account-pw bi bi-eye-slash" id="toggleCreatePassword" onClick={toggleCreatePassword}></i>
                    <input type="password" placeholder="Confirm Password" id="createConfirmPassword"></input>
                    <i className="account-pw bi bi-eye-slash" id="toggleCreateConfirmPassword" onClick={toggleCreateConfirmPassword}></i>
                </div>
                <button className="account-send-form">CONFIRMER</button>
            </div>
            <div className="account-container login-account-content" onMouseOver={signUpToSignIn}>
                <h1 className="account-title account-sign-in">Sign in</h1>
                <div className="account-input-container">
                    <input placeholder="Email"></input>
                    <input type="password" placeholder="Password" id="loginPassword"></input>
                    <i className="account-pw bi bi-eye-slash" id="toggleLoginPassword"  onClick={toggleLoginPassword}></i>
                </div>
                <button className="account-send-form">CONFIRMER</button>
            </div>
        </div>
    );
}

export default Account;