import styled, { css } from 'styled-components';
import { BsStars } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  > div {
    display: flex;

    justify-content: space-between;

    > span {
      font-size: 20px;
      font-weight: 550;
      font-family: Arial, Helvetica, sans-serif;
    }
  }

  padding: 10px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
`;

export const StarIcon = styled(BsStars)`
  margin-right: 10px;
  width: 24px;
  height: 24px;

  fill: var(--white);
`;
