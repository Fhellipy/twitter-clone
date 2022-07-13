import styled from 'styled-components';
import { FiAnchor } from '../../styles/Icons';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  > span {
    margin-left: 10px;

    color: var(--primary);

    font-size: 20px;
    font-weight: bold;

    text-transform: uppercase;
  }
`;

export const ImageUser = styled.div`
  width: 100%;

  padding: 0 48%;

  @media (max-width: 700px) {
    padding: 0 46%;
  }

  @media (max-width: 500px) {
    padding: 0 44%;
  }

  @media (max-width: 400px) {
    padding: 0 40%;
  }

  margin-bottom: 10px;
  > img {
    width: 90px;
    height: 90px;

    border: 2.75px solid var(--primary);
    background: var(--background);
    border-radius: 50%;
  }
`;

export const Tab = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--on-primary);
  padding: 5px;

  > span {
    color: var(--primary);
    font-size: 20px;
    font-weight: 700;

    text-align: justify;
  }
`;

export const AnchorIcon = styled(FiAnchor)`
  width: 28px;
  height: 28px;

  stroke: var(--primary);
`;

export const PostList = styled.div`
  width: 100%;
`;
