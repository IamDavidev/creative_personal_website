import { LitElement, html, css } from "lit";
import send from "../assets/icons/send.svg";

export const tagName = "message-me";
export class MessageComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        margin:35px 0 ;
      }
      .btn-message {
        border-radius:10px;
        overflow:hidden;
        display: flex;
        justify-content: flex-end;
      }
      .btn-message--message,
      .btn-message--send {
        padding: var(--padding--button);
        margin: 0;
        border: none;
        font-size: var(--size--text);
        font-weight: bold;
        font-family: "Poppins", sans-serif;
        letter-spacing: 1.1px;
      }
      .btn-message--message {
        background-color: var(--color--yellow);
        color: var(--color--black);
      }
    `,
  ];

  render() {
    return html`
      <div class="btn-message">
        <button class="btn-message--message">Message Me</button>
        <button class="btn-message--send"><img src="${send}" /></button>
      </div>
    `;
  }
}
customElements.define(tagName, MessageComponent);
