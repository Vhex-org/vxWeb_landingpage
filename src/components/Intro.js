import '../styles/global.css';
import '../styles/Intro.css';
import downArrow from '../assets/down-arrow.png';

function readMore() {
    var toHide = document.querySelector(".intro_read_more");
    var toShow = document.querySelector(".intro_read_more_content");

    toHide.style.display = 'none';
    toShow.style.display = 'block';
    return;
}

function Intro() {
    return (
        <div className="intro_container">
            <h1 className="gold-title">NOTRE PROJET</h1>
            <p className="intro_content">
                Le projet est basé sur la philosophie du projet Symbolibre mais avec un objectif différent.<br/>
                De nos jours, Symbolibre se veut à être une calculatrice libre et avec le fait que la machine doit être construite par les étudiants. Nous pensons que cette fonctionnalité est très importante pour comprendre exactement le fonctionnement d’une technologie embarquée, ce qui facilite beaucoup la visualisation de certains mécanismes assez obscurs quand on programme en bas-niveau.<br/>
            </p>
            <button onClick={readMore} className="intro_read_more"><img src={downArrow} alt="down-arrow-logo"></img></button>
            <p className="intro_content intro_read_more_content">
                Nous savons que beaucoup d’école commence à promouvoir la programmation dans leur cours. Mais généralement, ce ne sont que de petits programmes textuels qui sont utilisés pour démontrer certaines notions apprises récemment. Ce qui n’est pas très flatteur pour l’étudiant et aussi vis-à-vis du domaine abordé. Nous pensons qu’il sera beaucoup plus attractif et intéressant pour l’étudiant de clairement visualiser les matières étudiées en cours comme les mathématiques et la science (domaine qui sont pratiquement constamment abordés quand on essaie de programmer un petit jeu vidéo).<br/>
                <br/>
                De plus, la plupart des domaines étudiés en classe sont souvent très proches les uns les autres (comme les mathématiques et la physique). C’est pourquoi, fournir le produit en kit nous semble assez intéressant car cette restriction offrira à l’étudiant la possibilité de construire la console au début de leur cycle et travailler avec tout au long de leur année. D’ailleurs, durant la phase de constructions, le professeur pourra montrer certaines notions théoriques concernant le hardware et/ou le software (comme la notion de bus, les différentes parties de la carte-mère, ...).<br/>
                <br/>
                C’est pour ces raisons que nous voulons offrir la console en kit, avec un système d’exploitation qui permettra aux futurs utilisateurs de créer / jouer à n’importe quel jeu ou programme ; ainsi que des documentations concernant le matériel et l’OS.<br/>
                <br/>
                Premièrement, notre objectif est de développer un site web qui servira à acheter le produit, suivre le stade du développement et donner les documentations. De plus, ce site permettra à nos utilisateurs de partager leurs créations, astuces et nous offre une bonne opportunité de fédérer une vraie communauté autour de note service.<br/>
                <br/>
                Ensuite, une deuxième campagne de financement sera réalisée. Ceci nous permettra de créer la version "kit" de notre produit.<br/>
                <br/>
                Pour finir, il sera nécessaire de cibler des écoles privées en leur proposant des offres préférentielles pour utiliser notre produit à des fins éducatives. Nous pourrons l’effectuer grâce à nos utilisateurs déjà présents qui proposeront notre solution à leurs écoles.<br/>
                <br/>
                Pour en savoir plus, découvrez-nous plus en détails <a href="/vxWeb_landingpage/story">ici</a> !
            </p>
        </div>
    );
}

export default Intro;