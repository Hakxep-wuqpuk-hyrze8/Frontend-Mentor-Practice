import { css } from "styled-components";

export const unselectable = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const centerItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
`