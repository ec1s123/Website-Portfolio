// Local assets and their provenance are documented in public/logos/SOURCES.md.
const logo = (file, dark = false) => ({ src: `/logos/${file}`, dark });
const maryville = logo("maryville.png");
const maryvilleEsports = logo("maryville-esports.png");

export const careerLogos = {
    "auxiliary-digital": logo("auxiliary-digital.png", true),
    "automate-army": logo("automate-army.svg"),
    "maryville-ai-engineer": maryville,
    "maryville-ai-research": maryville,
    neuralseek: logo("neuralseek.png"),
    "maryville-coach": maryvilleEsports,
    maryville: maryvilleEsports,
    "saudi-academy": logo("saudi-academy.webp", true),
    velocity: logo("velocity.png"),
    "100thieves": logo("100thieves.png"),
    nip: logo("nip.png"),
    liquid: logo("liquid.png"),
    fish123: logo("fish123.png"),
    vexed: logo("vexed.png"),
    fierce: logo("fierce.png"),
    london: logo("london.png"),
    fnatic: logo("fnatic.png"),
    infused: logo("infused.png"),
};
