import { LitElement, html, css } from "lit";

// import brand from '../asests/icons/brand.svg'
import brand from "../assets/icons/brand.svg";
import uxUi from "../assets/icons/ux-ui.svg";
import pack from "../assets/icons/packaging.svg";
import film from "../assets/icons/file.svg";

export const tagName = "services-website";
export class statsLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        font-family: "Poppins", sans-serif;
      }
      .containerServices {
        /* background:var(); */
        background: #232323;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
      }
      .stats__title {
        margin: 0;
        font-size: 50px;
        font-weight: bold;
        letter-spacing: -1.05px;
      }
      .stats__description {
        font-size: 18px;
        width: 40ch;
        margin: 25px 0;
        color: var(--color--gray--light);
      }
      .stats__btns {
        display: flex;
        justify-content: space-evenly;
      }
      .stats__btns--clients,
      .stats__btns--projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--color--white);
      }
      .stats__btns--clients > span,
      .stats__btns--projects > span {
        font-size: 35px;
        font-family: "Poppins";
        font-weight: bolder;
      }
      .stats__btns--clients > p,
      .stats__btns--projects > p {
        font-size: 1rem;
        font-family: "Poppins";
        color: var(--color--gray--light);
      }
      .services {
        display: flex;
        flex-direction: column;
        gap: 0;
      }
      .services > div {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        justify-content: space-evenly;
        flex-wrap: wrap;
        border-bottom: 1px solid var(--color--gray--light);
        border-top: 1px solid var(--color--gray--light);
      }
      .services__brand--title,
      .services__uxUi--title,
      .services__pack--title,
      .services__film--title {
        width: 50%;
      }
      @media (min-width: 900px) {
        .containerServices {
          flex-direction: row;
          gap: 120px;
        }
        .stats__description {
          width: 25ch;
        }
        .stats__btns {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin: 29px 0;
        }
        .stats__btns--clients,
        .stats__btns--projects {
          align-items: flex-start;
        }
        .services > div {
          padding: 32px;
          align-items: center;
          gap: 0;
          flex-wrap: nowrap;
        }
        .services__brand--title,
        .services__uxUi--title,
        .services__pack--title,
        .services__film--title {
          width: auto;
          margin: 0 100px;
        }
      }
    `,
  ];

  render() {
    return html`
			<div class="containerServices">
				<div class="stats">
					<h2 class="stats__title">My stats</h2>
          <p class="stats__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
          <div class="stats__btns"">
            <button class="stats__btns--clients">
              <span>120</span>
              <p>Satisfied Clients</p>
            </button>
            <button class="stats__btns--projects">
              <span>285</span>
              <p>Projects Completed</p>
              </button>
            </div>
				</div>
        <div class="services">
          <div class="services__brand">
            <img src="${brand}" alt="brand consultant"/>
            <h3 class="services__brand--title">Brand Consultant</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
          </div>
          <div class="services__uxUi">
            <img src="${uxUi}" alt="ux_ui solutions"/>
            <h3 class="services__uxUi--title">UX/UI solutions</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
          </div>
          <div class="services__pack">
            <img src="${pack}" alt="packinging desing"/>
            <h3 class="services__pack--title">packaging desing</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
          </div>
           <div class="services__film">
            <img src="${film}" alt=""/>
            <h3 class="services__film--title">motion video & TVC</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
          </div>
        </div>
			</div>
		`;
  }
}
customElements.define(tagName, statsLayout);
