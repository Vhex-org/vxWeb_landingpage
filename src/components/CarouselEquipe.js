import '../styles/global.css';
import '../styles/CarouselEquipe.css';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';
import Alexandre from '../assets/logo_round_vhex.JPG';
import Arnaud from '../assets/logo_round_vhex.JPG';
import Auguste from '../assets/logo_round_vhex.JPG';
import Gregoire from '../assets/logo_round_vhex.JPG';
import Octave from '../assets/logo_round_vhex.JPG';
import Yann from '../assets/logo_round_vhex.JPG';
import Costa from '../assets/logo_round_vhex.JPG';
import Pierre from '../assets/logo_round_vhex.JPG';


function displayPrevious() {
    var tab = document.querySelectorAll(".carousel_card");
    var numberOfCards;
    var actual;

    if (!tab) return;
    for (var i = 0; tab[i] !== undefined; i = i + 1) {
        if (tab[i].classList.contains("diapo-fade-in")) {
            tab[i].classList.remove("diapo-fade-in");
            tab[i].classList.add("diapo-fade-out");
            actual = i;
            tab[i].style.visibility = "hidden";
            tab[i].style.opacity = "0";
        } else {
            tab[i].classList.add("diapo-fade-out");
        }
        if (tab[i + 1] === undefined) {
            numberOfCards = i;
        }
    }
    if (actual === 0) {
        tab[numberOfCards].classList.remove("diapo-fade-out");
        tab[numberOfCards].classList.add("diapo-fade-in");
        tab[numberOfCards].style.visibility = "visible";
        tab[numberOfCards].style.opacity = "1";
    } else {
        tab[actual - 1].classList.remove("diapo-fade-out");
        tab[actual - 1].classList.add("diapo-fade-in");
        tab[actual - 1].style.visibility = "visible";
        tab[actual - 1].style.opacity = "1";
    }
}

function displayNext() {
    var tab = document.querySelectorAll(".carousel_card");
    var numberOfCards;
    var actual;

    if (!tab) return;
    for (var i = 0; tab[i] !== undefined; i = i + 1) {
        if (tab[i].classList.contains("diapo-fade-in")) {
            tab[i].classList.remove("diapo-fade-in");
            tab[i].classList.add("diapo-fade-out");
            actual = i;
            tab[i].style.visibility = "hidden";
            tab[i].style.opacity = "0";
        }
        if (tab[i + 1] === undefined) {
            numberOfCards = i;
        }
    }
    if (actual === numberOfCards) {
        tab[0].classList.remove("diapo-fade-out");
        tab[0].classList.add("diapo-fade-in");
        tab[0].style.visibility = "visible";
        tab[0].style.opacity = "1";
    } else {
        tab[actual + 1].classList.remove("diapo-fade-out");
        tab[actual + 1].classList.add("diapo-fade-in");
        tab[actual + 1].style.visibility = "visible";
        tab[actual + 1].style.opacity = "1";
    }
}

function CarouselEquipe() {
    return (
        <div className="landing_page_container">
           <div className="carousel_equipe_container">
                <h1 className="carousel_title">OUR TEAM</h1>
                <div className="carousel_card_container">
                    <button onClick={displayPrevious} className="left-arrow"><img src={leftArrow} alt="left-arrow"></img></button>
                    <div className="carousel_card diapo-fade-in">
                        <img src={Yann} className="carousel_card_img" alt=""></img>
                        <div className="carousel_card_info">
                            <div className="teammate-names"><h1 className="teammate-name">Yann</h1><h1 className="teammate-name teammate-last-name">MAGNIN</h1></div>
                            <h2>Développeur Console</h2>
                            <p>No guns, no killing. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.</p>
                        </div>
                    </div>
                    <div className="carousel_card">
                        <img src={Arnaud} className="carousel_card_img" alt=""></img>
                        <div className="carousel_card_info">
                            <div className="teammate-names"><h1 className="teammate-name">Arnaud</h1><h1 className="teammate-name teammate-last-name">GUEROUT</h1></div>
                            <h2>Développeur Front-End</h2>
                            <p>No guns, no killing. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.</p>
                        </div>
                    </div>
                    <div className="carousel_card">
                        <img src={Auguste} className="carousel_card_img" alt=""></img>
                        <div className="carousel_card_info">
                            <div className="teammate-names"><h1 className="teammate-name">Auguste</h1><h1 className="teammate-name teammate-last-name">ALEXANDRE</h1></div>
                            <h2>Développeur Console</h2>
                            <p>No guns, no killing. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.</p>
                        </div>
                    </div>
                    <div className="carousel_card">
                        <img src={Alexandre} className="carousel_card_img" alt=""></img>
                        <div className="carousel_card_info">
                            <div className="teammate-names"><h1 className="teammate-name">Alexandre</h1><h1 className="teammate-name teammate-last-name">CALVET</h1></div>
                            <h2>Développeur Front-End</h2>
                            <p>No guns, no killing. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.</p>
                        </div>
                    </div>
                    <div className="carousel_card">
                        <img src={Costa} className="carousel_card_img" alt=""></img>
                        <div className="carousel_card_info">
                            <div className="teammate-names"><h1 className="teammate-name">Costa</h1><h1 className="teammate-name teammate-last-name">BUSHNAQ</h1></div>
                            <h2>Développeur Coonsole-End</h2>
                            <p>No guns, no killing. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.</p>
                        </div>
                    </div>
                    <div className="carousel_card">
                        <img src={Gregoire} className="carousel_card_img" alt=""></img>
                        <div className="carousel_card_info">
                            <div className="teammate-names"><h1 className="teammate-name">Gregoire</h1><h1 className="teammate-name teammate-last-name">HAARDT</h1></div>
                            <h2>Développeur Back-End</h2>
                            <p>No guns, no killing. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.</p>
                        </div>
                    </div>
                    <div className="carousel_card">
                        <img src={Octave} className="carousel_card_img" alt=""></img>
                        <div className="carousel_card_info">
                            <div className="teammate-names"><h1 className="teammate-name">Octave</h1><h1 className="teammate-name teammate-last-name">MESQUITA</h1></div>
                            <h2>Développeur Back-End</h2>
                            <p>No guns, no killing. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.</p>
                        </div>
                    </div>
                    <div className="carousel_card">
                        <img src={Pierre} className="carousel_card_img" alt=""></img>
                        <div className="carousel_card_info">
                            <div className="teammate-names"><h1 className="teammate-name">Pierre</h1><h1 className="teammate-name teammate-last-name">ADER</h1></div>
                            <h2>Développeur Front-End</h2>
                            <p>No guns, no killing. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.</p>
                        </div>
                    </div>
                    <button onClick={displayNext} className="right-arrow"><img src={rightArrow} alt="right-arrow"></img></button>
                </div>
            </div>
        </div>
    );
}

export default CarouselEquipe;