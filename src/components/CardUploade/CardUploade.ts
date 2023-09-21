export enum Attribut {
    "profile" = "profile",
    "named" = "named" ,
    "subname" = "subname",
    "description" = "description",
    "images" = "images" ,
    "likes" = "likes",
    "number" = "number",
}

class CardUploade extends HTMLElement {
    
    profile?: string;
    named?: string;
    subname?: string;
    description?: string;
    images?: string;
    likes?: string;
    number?: number;
    
    
    static get observedAttributes(){
        const attrs: Record<Attribut, null> = {
            profile: null,
            named: null,
            subname: null,
            description: null,
            images: null,
            likes: null,
           number: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName:Attribut,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case Attribut.number:
                
                this.number = newValue ? Number(newValue) : undefined;
            break;

            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
        
        constructor(){
            super();
            this.attachShadow({mode: "open"});
        }
        
        connectedCallback(){
            this.render();
        }
        
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/components/CardUploade/CardUploade.css">
                <section  class = "card" >
                <img class = "phoper" src=${this.profile}></img>
                <h1>${this.named}</h1>
                <h3>${this.subname}</h3>
                <p>${this.description}</p>
                <img class = "imgpost" src=${this.images}></img>
                <section class = "downpart">
                <img class = "imglike" src=${this.likes}></img>
                <p class = "numlike" >${this.number}</p>
                </section>
                
                </section>
                `
            }
        }
    }
    
customElements.define("my-carduploade",CardUploade);
export default CardUploade;