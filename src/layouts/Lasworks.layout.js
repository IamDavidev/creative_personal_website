import { LitElement, html, css } from "lit";
import "../components/message.component.js";

import digart from "../assets/images/digat.png";
import jiwaRaga from "../assets/images/jiwa.png";
import Tekfin from "../assets/images/tekfin.png";
import investment from "../assets/images/investment.svg";

export const tagName = "lastworks-website";
export class LasWorksLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        margin:70px 0 ;
      }
      img {
        width: 100%;
        border-radius: 1rem;
      }
      .latest__title {
        font-size: 50px;
        font-weight: bold;
        margin: 0;
        font-family: "Poppins", sans-serif;
      }
      .latest__description {
        margin: 20px 0;
        font-size: 20px;
        width: 30ch;
      }
      .works-grid {
        display: grid;
        grid-template-areas: "a v" "a v" "d v" "d i" "d i";
        gap: 1rem;
      }
      .work-grid__digart {
        grid-area: "a";
        background: #262837;
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .work-grid__jiwa {
        grid-area: "v";
        background: #262837;
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .work-grid__tekfin {
        grid-area: "d";
        background: #262837;
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .work-grid__invesmet {
        grid-area: "i";
        background: #262837;
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .work-grid__digart > div > h2,
      .work-grid__jiwa > h2,
      .work-grid__tekfin > h2,
      .work-grid__invesmet > h2 {
        font-size: 30px;
        font-weight: bold;
        margin: 0;
      }

      .work-grid__digart > div > span,
      .work-grid__jiwa > span,
      .work-grid__tekfin > span,
      .work-grid__invesmet > span {
        margin: 20px 0;
      }
    `,
  ];

  render() {
    return html`
      <section>
        <div class="latest">
          <h2 class="latest__title">Latest Works</h2>
          <div class="latest__description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
        </div>
        <message-me></message-me>
        <section class="works-grid">
          <article class="work-grid__digart">
          <div>
            <h2>Digart - NFT</h2>
            <span>Web Design </span>
          </div>
            <img  src="${digart}" atl="digart"/>
          </article>
          <article class="work-grid__jiwa">
            <h2>jiwa Raga</h2>
            <span>Web Design </span>
            <img src="${jiwaRaga}" alt="jiwaRaga" />
          </article>
          <article class="work-grid__tekfin">
            <h2>Tekfin</h2>
            <span>Dashboard Design </span>
            <img  src="${Tekfin}" alt="Tekfin"/>
          </article>
          <article class="work-grid__invesmet">
             <h2>Investment App</h2>
              <span>App Design </span>
            <img src="${investment}"  alt="incestment"/>
          </article>
        </section>
      </section>
    `;
  }
}
customElements.define(tagName, LasWorksLayout);
