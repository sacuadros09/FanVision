export enum Attr {
    "profilephoto" = "profilephoto",
    "subnames" = "subnames" ,
    "names" = "names",
}

class CardProfile extends HTMLElement {
    
    profilephoto?: string;
    subnames?: string;
    names?: string;
    
    static get observedAttributes(){
        const attrs: Record<Attr, null> = {
            profilephoto: null,
            subnames: null,
            names: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(
        propName: Attr,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
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
                <link rel="stylesheet" href="../src/components/CardProfile/CardProfile.css">
                <section>
                <img src=${this.profilephoto}></img>
                <h1>${this.subnames}</h1>
                <h1>${this.names}</h1>
                </section>
                `
            }
        }
    }
    
customElements.define("my-cardprofile",CardProfile);
export default CardProfile  ;