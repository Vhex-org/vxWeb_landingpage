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
                            Someone like you. Someone who'll rattle the cages. I'm not wearing hockey pads. I will go back to Gotham and I will fight men Iike this but I will not become an executioner.

                            Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn't ended. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.

                            I'm not wearing hockey pads. Swear to me! I'm not wearing hockey pads. It was a dog. It was a big dog. I will go back to Gotham and I will fight men Iike this but I will not become an executioner.

                            Someone like you. Someone who'll rattle the cages. Someone like you. Someone who'll rattle the cages. Accomplice?
                        </p>
                    </div>
                </div>
                <div className="bloc-split-2">
                    <div class="title-story">
                        <h2 className="fl-bold-gold space-word">Nos</h2>
                        <h2 className="">Objectifs</h2>
                    </div>
                    <p className="story-telling fl-bold-gold">
                        I will go back to Gotham and I will fight men Iike this but I will not become an executioner. Someone like you. Someone who'll rattle the cages. My anger outweights my guilt. Swear to me!

                        Accomplice? I'm gonna tell them the whole thing was your idea. It was a dog. It was a big dog. I'll be standing where l belong. Between you and the peopIe of Gotham.

                        Swear to me! Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn't ended.

                        I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.                        
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