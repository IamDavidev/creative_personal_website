import { LitElement, html, css } from "lit";

export const tagName = "approach-website";
export class ApproachLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      .container {
        padding: 1rem;
        margin: 60px 0;
      }
      .my-approach {
        font-size: var(--size--title);
        font-weight: bold;
      }
      .content-approach {
        display: flex;
        flex-direction: column;
        gap: 48px;
      }
      .approach {
        background: #262525;
        padding: 42px 29px;
        border-radius: 1rem;
      }
      .approach__title {
        font-size: 30px;
        font-weight: bold;
        margin: 12px 0;
      }
      .approach__description,
      .approach__num {
        font-size: var(--size--text);
        color: var(--color--gray--light);
      }
      @media (min-width:900px) {
        .content-approach {
          flex-direction: row;
          gap: 48px;
        }
        .approach{
          border-top:4px solid var(--color--gray--light);
        }
      }
    `,
  ];

  render() {
    return html`
      <section class="container">
        <h1 class="my-approach">My Approach</h1>
        <section class="content-approach">
          <article class="approach">
            <span clsas="approach__num">One</span>
            <h3 class="approach__title">Research</h3>
            <p class="approach__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et
            </p>
          </article>
          <article class="approach">
            <span class="approach__num">Two</span>
            <h3 class="approach__title">Concept</h3>
            <p class="approach__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et
            </p>
          </article>
          <article class="approach">
            <span class="approach__num">Three</span>
            <h3 class="approach__title">Development</h3>
            <p class="approach__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et
            </p>
          </article>
        </section>
      </section>
    `;
  }
}
customElements.define(tagName, ApproachLayout);
