import styled from 'styled-components';
import { FiAnchor } from '../../styles/Icons';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const Banner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  > span {
    margin-left: 10px;

    color: var(--primary);

    text-align: center;
    font-size: 20px;
    font-weight: bold;

    text-transform: uppercase;
  }
`;

export const ImageCat = styled.div`
  width: 100%;

  background: var(--primary);

  border-bottom: 10px solid var(--primary);

  > img {
    width: 100%;
    height: 350px;

    flex-shrink: 0;
  }

  @media (min-width: 500px) {
    width: 500px;
  }

  @media (max-width: 501px) {
    width: 100%;
  }
`;

export const WrapperButton = styled.div`
  width: 100%;
  top: 100%;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: min(40px, 7vw) 16% 10px;

  > span {
    color: var(--primary);
    font-size: 16px;
    font-weight: bold;

    text-transform: uppercase;
    text-align: center;
  }
`;

export const AnchorIcon = styled(FiAnchor)`
  width: 28px;
  height: 28px;

  stroke: var(--primary);
`;

export const ButtonNewCat = styled.button`
  width: 50%;
  height: 40px;

  @media (min-width: 500px) {
    width: 300px;
  }

  @media (max-width: 501px) {
    width: 50%;
  }

  padding: 2.5px;

  background: var(--secondary);

  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;

  margin-bottom: 15px;

  cursor: pointer;
`;
