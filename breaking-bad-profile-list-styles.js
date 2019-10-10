import { css, } from 'lit-element';


export default css`:host {
  display: block;
  padding: 1rem;
  box-sizing: border-box;
  @apply --breaking-bad-profile-list; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit; }

ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%; }
`;