import { LitElement, html, css } from "lit";

import '../components/testimonial.component.js'

export const tagName = "testimonials-website";
export class TestimonialsLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        overflow: hidden;
      }
      .carousel-testimonials{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap:12px;
        animation: animation-testimonials 10s ease-in-out infinite;
      }

      @media (min-width:900px){
        .carousel-testimonials{
          animation: none;
        }
      }
      @keyframes animation-testimonials {
        0% {
          transform: translateX(-140%);
        }
        100%{
          transform: translateX(140%);
        }
      }
    `,
  ];

  render() {
    return html`
      <section>
        <h2>Testimonials</h2>
        <section class="carousel-testimonials">
         <testimonial-card user="Josh Brollins" website="my-website.com"></testimonial-card>
         <testimonial-card user="Josh Brollins" website="my-website.com"></testimonial-card>
         <testimonial-card user="Josh Brollins" website="my-website.com"></testimonial-card>
         <testimonial-card user="Josh Brollins" website="my-website.com"></testimonial-card>
        </section>
      </section>
    `;
  }
}
customElements.define(tagName, TestimonialsLayout);
