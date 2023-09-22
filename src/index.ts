import * as components from "./components/index"
import { dataIcons } from "./dataIcons/dataIcons"
import { dataFriends } from "./dataFriends/dataFriends"
import { dataProfile} from "./dataProfile/dataProfile"
import { dataUploade} from "./dataUploade/dataUploade"
import CardIcons, {Attribute} from "./components/CardIcons/CardIcons"
import CardFriends,{Attribu} from "./components/CardFriends/CardFriends"
import CardProfile,{Attr} from "./components/CardProfile/CardProfile"
import CardUploade, {Attribut} from "./components/CardUploade/CardUploade"




class AppContainer extends HTMLElement{
    cardicons: CardIcons[] = [];
    cardfriends: CardFriends[] = [];
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

        dataFriends.forEach((p) => {
            const CardFriend = this.ownerDocument.createElement("my-cardfriends") as CardFriends;
            CardFriend.setAttribute(Attribu .profilefoto,p.profilefoto);
            CardFriend.setAttribute(Attribu.named,p.named);
            CardFriend.setAttribute(Attribu.subname,p.subname);
            this.cardfriends.push(CardFriend);
            
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
        container.className = "all"

        

        const sectionicon=document.createElement("nav")
        sectionicon.className = "leftside"

        const logouploade=document.createElement("img")
        logouploade.src="/src/img/logo.png"
        sectionicon.appendChild(logouploade); 

        this.cardicons.forEach((cardicons) => {
            sectionicon.appendChild(cardicons);
        })
        container.appendChild(sectionicon);

        

            const buttonuploade=document.createElement("button")
            buttonuploade.innerText="Upload Photo"
            sectionicon.appendChild(buttonuploade);
           

            const sectionuploade=document.createElement("section")
            sectionuploade.className = "midside"
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
            const closefriends=document.createElement("h2")
            closefriends.innerText = "Friends"
            sectionprofile.appendChild(closefriends);
           


            const sectionfriends=document.createElement("section")  
            sectionfriends.className = "sectionfriends"
            this.cardfriends.forEach((cardfriends) => {
                sectionfriends.appendChild(cardfriends);
            })


            const containeright = document.createElement("section")
            containeright.className = "containerRight"
            containeright.appendChild(sectionprofile)
            container.appendChild(sectionfriends);
            containeright.appendChild(sectionfriends)
            container.appendChild(containeright)
            this.shadowRoot?.appendChild(container)
        }
    }
}

customElements.define("app-container",AppContainer);    