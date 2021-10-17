import '../styles/global.css';
import '../styles/LandingPage.css';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';
import Pierre from '../assets/logo_round_vhex.JPG';

function LandingPage() {
    return (
        <div className="landing_page_container">
           <div className="carousel_equipe_container">
                <h1 className="carousel_title">OUR TEAM</h1>
                <div className="carousel_card_container">
                    <img src={leftArrow} className="left-arrow" alt="left-arrow"></img>
                    <div className="carousel_card">
                        <img src={Pierre} className="carousel_card_img"></img>
                        <div className="carousel_card_info">
                            <div className="teammate-names"><h1 className="teammate-name">Prénom</h1><h1 className="teammate-name">NOM</h1></div>
                            <h2>Développeur Front-End</h2>
                            <p>No guns, no killing. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.</p>
                        </div>
                    </div>
                    <img src={rightArrow} className="right-arrow" alt="right-arrow"></img>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;