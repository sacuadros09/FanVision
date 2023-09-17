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
                <section>
                <img src=${this.profile}></img>
                <h1>${this.named}</h1>
                <h2>${this.subname}</h2>
                <p>${this.description}</p>
                <img src=${this.images}></img>
                <img src=${this.likes}></img>
                <p>${this.number}</p>
                
                </section>
                `
            }
        }
    }
    
customElements.define("my-carduploade",CardUploade);
export default CardUploade;