import { LitElement, html, css } from 'lit';

const { css } = css`

`

export const tagName = 'my-counter';

class Counter extends LitElement {
    static get properties() {
        return {
            count: {
                type: Number,
            },
        };
    }
    static styles = css`
        :host{
        }
        .container {
            background: #fff;
        }
    `

    constructor() {
        super();
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    render() {
        return html`
			<div class="container">
				<p>Count: ${this.count}</p>
				<button type="button" @click=${this.increment}>Increment</button>
			</div>
		`;
    }
}

customElements.define(tagName, Counter); 