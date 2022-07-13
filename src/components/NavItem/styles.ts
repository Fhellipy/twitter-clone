import styled, { css } from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background-color: var(--primary);

  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;

  padding: 15px 50px;

  > a {
    margin: 0 5px;

    > button {
      color: var(--black);

      height: 35px;
      width: 100%;

      padding: 10px;

      font-size: 16px;
      font-weight: bold;

      cursor: pointer;
    }
  }
`;
