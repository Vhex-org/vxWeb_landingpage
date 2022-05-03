import CarouselEquipe from './CarouselEquipe';
import '../styles/global.css';
import '../styles/Story.css';

function Story() {
    return (
        <div className="story-container">
            <div class="title-story main-story-title">
                <h1 className="fl-bold-gold space-word">NOTRE</h1>
                <h1 className="fl-bold-gold">HISTOIRE</h1>
            </div>
            <div class="bloc-split-container">
                <div className="bloc-split-2">
                    <div class="title-story">
                        <h2 className="fl-bold-gold space-word">Nos</h2>
                        <h2 className="">Origines</h2>
                    </div>
                    <div className="story-telling-container">
                        <p className="story-telling fl-bold-gold">
                            En tant qu'étudiants d'EPITECH, nous avons décidé d'entreprendre ce projet dans le cadre de notre Epitech Innovative Project (EIP) correspondant à notre projet de fin de cursus.
                            Il nous semblait important de rendre ludique l'apprentissage et la compréhension de la programmation en language bas-niveau. C'est pourquoi nous nous sommes associés avec comme objectif commun de créer une console de jeu et une plateforme permettant aux intéressés de prendre en main le bas-niveau et comprendre son fonctionnement dans sa globalité.
                        </p>
                    </div>
                </div>
                <div className="bloc-split-2">
                    <div class="title-story">
                        <h2 className="fl-bold-gold space-word">Nos</h2>
                        <h2 className="">Objectifs</h2>
                    </div>
                    <p className="story-telling fl-bold-gold">
                        Nous avons pour objectif de créer une console de jeu qui devra être construite et utilisée dans sa globalité afin de réaliser des programmes en bas-niveau.
                        Afin d'acheter leurs console, partager leurs créations, leurs astuces et échanger sur leurs découvertes, nous voulons réaliser un site internet qui permettra de fédérer la communauté autour de notre service.
                        <br/>
                        C'est dans cette dynamique que nous souhaitons proposer notre projet Vhex aux écoles d'informatique, dans le but de faciliter l'appretissage et l'accès au bas-niveau.
                    </p>
                </div>
            </div>
            <div class="title-story main-story-title">
                <h1 className="fl-bold-gold space-word">NOTRE</h1>
                <h1 className="fl-bold-gold">EQUIPE</h1>
            </div>
            <CarouselEquipe/>
        </div>
    );
}

export default Story;