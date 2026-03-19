import antidea1 from "../assets/projects/antidea/antidea1.png"
import antidea2 from "../assets/projects/antidea/antidea2.png"
import antidea4 from "../assets/projects/antidea/antidea4.png"
import antidea5 from "../assets/projects/antidea/antidea5.png"
import antidea_main from "../assets/projects/antidea/antidea_main.jpg"
import antidea_description from "../assets/projects/antidea/antidea_description.jpg"

import ijj1 from "../assets/projects/iron-jiu-jitsu/ijj1.png"
import ijj2 from "../assets/projects/iron-jiu-jitsu/ijj2.png"
import ijj3 from "../assets/projects/iron-jiu-jitsu/ijj3.png"
import ijj4 from "../assets/projects/iron-jiu-jitsu/ijj4.png"
import ijj_main from "../assets/projects/iron-jiu-jitsu/ijj_main.jpg"
import ijj_description from "../assets/projects/iron-jiu-jitsu/ijj_description.jpg"

import modi_main from "../assets/projects/modi/modi_main.jpg"
import modi_description from "../assets/projects/modi/modi_description.jpg"
import modi1 from "../assets/projects/modi/modì1.png"
import modi2 from "../assets/projects/modi/modì2.png"
import modi3 from "../assets/projects/modi/modì3.png"
import modi4 from "../assets/projects/modi/modì4.jpg"


export const projects = [
    {
        slug: "antidea",
        cover: antidea_main,
        descriptionImg: antidea_description,
        images: [antidea1, antidea2, antidea4, antidea5],
        repoUrl: 'https://github.com/nes-pisati/antidea',
        liveUrl: 'https://www.antidea.it',
        technologies: ["React", "Html", "Css", "Javascript"],
    },
    {
        slug: "iron-jiu-jitsu",
        cover: ijj_main,
        descriptionImg: ijj_description,
        images: [ijj1, ijj2, ijj3, ijj4],
        frontendRepoUrl: 'https://github.com/nes-pisati/ironjiujitsu-consoleweb',
        backendRepoUrl: 'https://github.com/nes-pisati/ironjiujitsu-server',
        technologies: ["React", "Html", "Css", "TypeScript", "MongoDB", "Node.js", "Express"],
        furtherTechnologies: ["WhatsApp Message Automation"],
    },
    {
        slug: "modi",
        cover: modi_main,
        descriptionImg: modi_description,
        images: [modi3, modi4, modi2, modi1],
        repoUrl: 'https://github.com/nes-pisati/EPICODE-capstone-modi',
        technologies: ["React", "Html", "Css", "Javascript", "MongoDB", "Node.js", "Express"],
        furtherTechnologies: ["Google Text To Speech"],
    }
]