// i want type mythml have function show modal
interface MyHtml extends HTMLElement {
    showModal: () => void;
}


export const $ = (name: string): MyHtml => document.getElementById(name) as MyHtml