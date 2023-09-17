import * as components from "./components/index"
import { dataIcons } from "./dataIcons/dataIcons"
import { dataProfile} from "./dataProfile/dataProfile"
import { dataUploade} from "./dataUploade/dataUploade"
import CardIcons, {Attribute} from "./components/CardIcons/CardIcons"
import CardProfile,{Attr} from "./components/CardProfile/CardProfile"
import CardUploade, {Attribut} from "./components/CardUploade/CardUploade"


class AppContainer extends HTMLElement{
    cardicons: CardIcons[] = [];
    cardprofiles: CardProfile[] =[];
    carduploades: CardUploade[]=[];
   

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        dataIcons.forEach((s) => {
            const CardIcon = this.ownerDocument.createElement("my-cardicons") as CardIcons;
            CardIcon.setAttribute(Attribute.logo,s.logo);
            CardIcon.setAttribute(Attribute.img,s.img);
            CardIcon.setAttribute(Attribute.name,s.name);
            this.cardicons.push(CardIcon);
            
        });



        dataUploade.forEach((c) => {
            const CardUpload = this.ownerDocument.createElement("my-carduploade") as CardUploade;
            CardUpload.setAttribute(Attribut.profile,c.profile);
            CardUpload.setAttribute(Attribut.named,c.named);
            CardUpload.setAttribute(Attribut.subname,c.subname);
            CardUpload.setAttribute(Attribut.description,c.description);
            CardUpload.setAttribute(Attribut.images,c.images);
            CardUpload.setAttribute(Attribut.likes,c.likes);
            CardUpload.setAttribute(Attribut.number,c.number);
            this.carduploades.push(CardUpload);
            
        });
        dataProfile.forEach((m) => {
            const CardProfiles = this.ownerDocument.createElement("my-cardprofile") as CardProfile;
            CardProfiles.setAttribute(Attr.profilephoto,m.profilephoto);
            CardProfiles.setAttribute(Attr.subnames,m.subnames);
            CardProfiles.setAttribute(Attr.names,m.names);
            this.cardprofiles.push(CardProfiles);
            
        });
    }
    

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/src/index.css">
            
        `;
        const container=document.createElement("section")

            const sectionicon=document.createElement("section")
            this.cardicons.forEach((cardicons) => {
                sectionicon.appendChild(cardicons);
            })
            container.appendChild(sectionicon);

            const buttonuploade=document.createElement("button")
            buttonuploade.innerText="Upload Photo"
            sectionicon.appendChild(buttonuploade);
           

            const sectionuploade=document.createElement("section")
            this.carduploades.forEach((carduploade) => {
                sectionuploade.appendChild(carduploade);
            })
            container.appendChild(sectionuploade);

            const sectionprofile=document.createElement("section")
            this.cardprofiles.forEach((cardprofile) => {
                sectionprofile.appendChild(cardprofile);
            })
            container.appendChild(sectionprofile);
            this.shadowRoot?.appendChild(container)
        }
    }
}

customElements.define("app-container",AppContainer);    