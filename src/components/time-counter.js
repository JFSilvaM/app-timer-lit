import { LitElement, css, html } from "lit";
import "./seconds-to-time";

export class TimeCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        text-align: center;
        padding: 10px;
      }
      h2 {
        padding: 10px;
        color: fuchsia;
        border-radius: 5px;
        box-shadow: -5px 5px 20px gray;
        margin: 30px 45%;
      }
    `,
  ];

  static get properties() {
    return {
      seconds: { type: Number },
      running: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.seconds = 0;
  }

  render() {
    return html`
      <h1>Time Counter</h1>

      <h2><seconds-to-time seconds=${this.seconds}></seconds-to-time></h2>
      <h2>
        <seconds-to-time seconds=${this.seconds + 10002}></seconds-to-time>
      </h2>

      <sl-button variant="primary" @click=${this.start}>Start</sl-button>
      <sl-button variant="primary" @click=${this.stop}>Stop</sl-button>
    `;
  }

  start() {
    this.running = true;
    this.timeCount();
  }

  stop() {
    this.running = false;
  }

  timeCount() {
    if (this.running) {
      this.seconds++;
      setTimeout(() => this.timeCount(), 1000);
    }
  }
}

customElements.define("time-counter", TimeCounter);
