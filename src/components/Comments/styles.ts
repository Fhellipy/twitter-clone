import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: var(--background);

  display: flex;
  padding: 10px;

  position: relative;
`;

export const Wrapper = styled.div`
  width: 100%;

  margin: 0 20px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 2px dashed var(--secondary);

  > span,
  div {
    color: var(--primary);
  }

  > span + span {
    color: var(--secondary);
  }
`;

export const UserEmail = styled.span`
  font-weight: bold;
  font-size: min(18px, 5.2vw);

  margin-bottom: 10px;
`;

export const UserName = styled.span`
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: bold;

  text-align: justify;
`;

export const ContentComments = styled.div`
  font-size: 18px;
  text-align: justify;
`;
