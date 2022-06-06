import { LitElement, html, css } from "lit";

import "../components/message.component.js";

export const tagName = "footer-website";
export class FooterLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      footer > h2 {
        font-size: var(--size--title);
      }
    `,
  ];

  render() {
    return html`
      <footer>
        <h2>Interested in working with me?</h2>
        <message-me></message-me>
      </footer>
    `;
  }
}
customElements.define(tagName, FooterLayout);
