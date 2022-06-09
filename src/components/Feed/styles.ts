import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  /* margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  &:hover {
    background: var(--twitter-dark-hover);
  } */

  display: flex;
  justify-content: space-between;

  margin-top: 10px;
  padding: 11px 30px 15px;

  border-bottom: 2px solid var(--twitter);
  outline: 0;

  > span {
    font-weight: bold;
    font-size: 15px;

    cursor: pointer;

    color: var(--twitter);

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
