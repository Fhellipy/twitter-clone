import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 100%;

  background: var(--primary);

  display: flex;
  padding: 10px;

  position: relative;
`;

export const Avatar = styled.div`
  > img {
    width: 80px;
    height: 80px;

    border: 3.75px solid var(--primary);
    background: var(--background);
    border-radius: 50%;

    position: sticky;

    left: 15px;
  }
`;

export const Wrapper = styled.div`
  margin-left: 20px;
  padding: 10px 20px 10px 10px;

  display: flex;
  flex-direction: column;

  margin-bottom: 10px;

  > a {
    text-decoration: none;
  }
`;

export const UserName = styled.div`
  margin-bottom: 5px;

  font-size: 18px;
  font-weight: bold;
`;

export const ContentPost = styled.div`
  font-size: 16px;
  text-align: justify;
`;
