import { LitElement, html, css } from "lit";

import about from "../assets/images/about.png";

import development from "../assets/icons/development.svg";
import photagrahy from "../assets/icons/photography.svg";
import illustrating from "../assets/icons/ilustrating.svg";
import research from "../assets/icons/search.svg";

export const tagName = "about-website";
export class AboutLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .about-me {
        font-size: var(--size--title);
      }

      .about-figure {
        margin: 0;
        padding: 1rem;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        margin-top: 56px;
        margin-bottom: 37px;
      }
      .about-figure__image {
        max-width: 100%;
        object-fit: cover;
        border-radius: 1rem;
      }
      .skills__description {
        font-size: var(--size--text);
        color: var(--color--gray--light);
        width: 60ch;
        margin-bottom: 57px;
      }
      .skills__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style: none;
      }
      .skills__list li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 1rem 4rem;
      }
      @media (min-width: 900px) {
        .content-about {
          display: flex;
          gap: 100px;
        }
        .skills__list {
          width: 400px;
          gap: 100px;
        }
        .skills__list > li {
          margin: 0;
        }
      }
    `,
  ];

  render() {
    return html`
      <section class="about">
        <h2 class="about-me">About me</h2>
        <div class="content-about">
          <figure class="about-figure">
            <img src="${about}" alt="development" class="about-figure__image" />
          </figure>
          <div class="skills">
            <p class="skills__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <h3 class="skills__other">Other Skills</h3>
            <ul class="skills__list">
              <li>
                <img src="${development}" alt="development" />
                <span>Development</span>
              </li>
              <li>
                <img src="${photagrahy}" alt="photography" /><span
                  >Photography</span
                >
              </li>
              <li>
                <img src="${illustrating}" alt="illustrating" /><span
                  >Illustrating</span
                >
              </li>
              <li>
                <img src="${research}" alt="user" /><span>User Research</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define(tagName, AboutLayout);
