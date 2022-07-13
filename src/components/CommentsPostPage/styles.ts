import styled from 'styled-components';
import { FiAnchor } from '../../styles/Icons';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  width: 100%;
  max-height: 330px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Tab = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--on-primary);
  padding: 5px;

  > span {
    color: var(--primary);
    font-size: 20px;
    font-weight: 700;

    margin: 0 10px;

    text-align: center;

    text-transform: uppercase;
  }
`;

export const AnchorIcon = styled(FiAnchor)`
  width: 28px;
  height: 28px;

  stroke: var(--primary);
`;

export const PostList = styled.div`
  width: 100%;
  max-height: 100%;
`;

export const PostComments = styled.div`
  width: 100%;
  max-height: 100%;
`;
