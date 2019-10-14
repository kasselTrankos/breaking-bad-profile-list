import { LitElement, html, } from 'lit-element';
import '@lit-training/breaking-bad-profile-card/breaking-bad-profile-card.js';
import { getComponentSharedStyles, } from '@cells-components/cells-lit-helpers/cells-lit-helpers.js';
import styles from './breaking-bad-profile-list-styles.js';
/**
This component ...

Example:

```html
<breaking-bad-profile-list></breaking-bad-profile-list>
```
* @customElement
* @polymer
* @LitElement
* @demo demo/index.html
*/
export class BreakingBadProfileList extends LitElement {
  static get is() {
    return 'breaking-bad-profile-list';
  }

  // Declare properties
  static get properties() {
    return {
      cardsList: {
        type: Array,
        attribute: 'cards-list'
      },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.cardsList = [];
  }

  static get shadyStyles() {
    return `
      ${styles.cssText}
      ${getComponentSharedStyles('breaking-bad-profile-list-shared-styles').cssText}
    `;
  }

  _createCard(data) {
    return html`
      <breaking-bad-profile-card
        .name="${data.name}"
        .image="${data.image}"
        .id="${data.id}"
        .nickname="${data.nickname}"
        .birthday="${data.birthday}"
        .status="${data.status}"
        .occupation="${data.occupation}"
        .playedBy="${data.playedBy}"
        .seasons="${data.seasons}"
      >
      </breaking-bad-profile-card>
    `;
  }
  get _renderCardsList() {
    return this.cardsList.length > 0
      ? this.cardsList.map((card) => this._createCard(card))
      : html`<li>No items found :(</li>`;
  }

  render() {
    return html`
      <style>${this.constructor.shadyStyles}</style>
      <slot></slot>
      <ul>
        ${this._renderCardsList}
      </ul>
    `;
  }
}

// Register the element with the browser
customElements.define(BreakingBadProfileList.is, BreakingBadProfileList);
