import { LitElement, html, css } from "lit";
import "../components/message.component.js";

import header from "../assets/images/header.png";

import airbnb from "../assets/icons/airbnb.svg";
import amazon from "../assets/icons/amzon.svg";
import stripe from "../assets/icons/stripe.svg";
import microsoft from "../assets/icons/microsoft.svg";

export const tagName = "header-website";
export class HeaderLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .cover {
        margin: 60px 0;
      }
      .cover__title {
        font-size: var(--size--title);
        font-weight: bolder;
        /* line-height: -2.04px; */
        letter-spacing: -2.04px;
        margin: 27px 0;
        text-align: center;
      }
      .cover__text {
        width: 30ch;
        font-size: 1.5rem;
      }
      .img-header {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 2.5rem 0;
        padding: 1rem;
        box-sizing: border-box;
      }
      .img-header > img {
        max-width: 100%;
        margin: 0 auto;
        border-radius: 1.5rem;
      }
      .statistics {
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding: 0;
        align-items: center;
      }
      .statistics__data {
        text-align: center;
      }
      .statistics__data > span {
        font-size: var(--size--effects);
        font-weight: bold;
      }
      .statistics__data > p {
        color: var(--color--gray--light);
        font-size: 1rem;
      }

      .owner {
        margin: 60px 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
      .owner__title {
        font-size: 1.5rem;
      }
      .owner__title--span {
        font-weight: bolder;
      }
      .owner__companys {
        margin: 25px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 2.5rem;
        width: 100%;
      }
      @media (min-width: 900px) {
        .header-cover {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }
        .cover__title {
          text-align: left;
        }
        .statistics {
          margin-right: 113px;
          flex-direction: column;
        }
      }
    `,
  ];

  render() {
    return html`
      <header class="header">
        <div class="header-cover">
          <div class="cover">
            <h1 class="cover__title">Hello,I am Adin A Product Desingner</h1>
            <p class="cover__text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor Lorem ipsum dolor sit amet
            </p>
            <div class="content-btn">
              <message-me></message-me>
            </div>
          </div>
          <figure class="img-header">
            <img src="${header}" alt="ADIN" />
          </figure>
          <div class="containerStatistics">
            <ul class="statistics">
              <li class="statistics__data">
                <span>120</span>
                <p>Satisfied Clients</p>
              </li>
              <li class="statistics__data">
                <span>285</span>
                <p>Projects Completed</p>
              </li>
              <li class="statistics__data">
                <span>10</span>
                <p>Years of Experience</p>
              </li>
              <li class="statistics__data">
                <span>4300+</span>
                <p>Hours of work</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="owner">
          <p class="owner__title">
            owner <span class="owner__title--span">120+</span> Bussines growing
            me
          </p>
          <figure class="owner__companys">
            <img src="${airbnb}" alt="aibnb" />
            <img src="${amazon}" alt="amazon" />
            <img src="${stripe}" alt="stripe" />
            <img src="${microsoft}" alt="microsoft" />
          </figure>
        </div>
      </header>
    `;
  }
}
customElements.define(tagName, HeaderLayout);
