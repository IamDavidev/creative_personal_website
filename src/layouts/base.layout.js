import { LitElement, html, css } from 'lit'

import '../layouts/header.layout.js'
import '../layouts/services.layout.js'
import '../layouts/Lasworks.layout.js'

export const tagName = 'personal-website'
export class Base extends LitElement {
  static styles = [
    css`
			.website {
				background-color: var(--color--black);
				color: var(--color--white);
				min-height: 100vh;
				padding: var(--padding--container);
	}
			.nav-website {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.nav-website > span {
				color: var(--color--yellow);
				font-weight: bold;
				border-bottom: 4px solid var(--color--white);
			}
		`
  ]

  render() {
    return html`
			<div class="website">
				<nav class="nav-website">
					<h2>website</h2>
					<span>start a project</span>
				</nav>
				<header-website></header-website>
				<main>
  			  <services-website></services-website>
          <lastworks-website></lastworks-website>
				</main>
			</div>
		`
  }
}
customElements.define(tagName, Base)
