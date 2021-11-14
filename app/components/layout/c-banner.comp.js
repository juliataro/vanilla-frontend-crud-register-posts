
export class CBannerComponent extends HTMLElement {
    constructor() {
        super();
        // this.shadow = this.createShadowRoot();
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
        this.innerHTML = `
            <div class="banner">
                <div class="container">
                    <h1 class="logo-font">Julia Taro test</h1>
                    <p>A place where I combined vanilla.js frontend and laravel on backend from <br>https://codebase.show/projects/realworld?category=frontend homepage</p>
                </div>
            </div>
        `;
    }
}
