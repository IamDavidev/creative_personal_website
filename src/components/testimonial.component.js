import { LitElement, html, css } from "lit";

import testimonialUser from '../assets/images/testimonial.png'

export const tagName = "testimonial-card";
export class TestimonialComponent extends LitElement {
  static get properties() {
    return {
      website: { type: String },
      user: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        display: block;
      }
      .testimonial{
        background: #373636;
        border-radius:10px;
        padding: 1.5rem;
      }
      .testimonial__user{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        gap:12px;
      }
    `,
  ];

  render() {
    return html`
      <article class="testimonial">
        <div class="testimonial__user">
          <img src="${testimonialUser}" alt="${this.user}" class="testimonai__user--image" />
          <h2 class="testimonial__user--title">${this.user}</h2>
          <span class="testimonail__user--website"> ${this.website} </span>
        </div>
        <p class="testimonial__message">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita
        </p>
      </article>
    `;
  }
}
customElements.define(tagName, TestimonialComponent);
