import styled, { css } from 'styled-components';
import {
  Image,
  AiOutlineGif,
  BsEmojiSmile,
  AiOutlineCalendar,
  LocationOn,
} from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(50vw, 100px);

  display: flex;
  align-items: center;
  padding: 25px 25px 10px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Avatar = styled.div`
  > img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 5px;
    flex-shrink: 0;
    background: var(--gray);
  }
`;

export const NewTweet = styled.input`
  width: 100%;
  height: 50px;

  padding: 0 10px;

  font-size: 20px;
  color: var(--white);

  &::placeholder {
    color: var(--gray);
  }

  outline: 0;
  background: var(--dark);
`;

export const HomeData = styled.div`
  padding: min(calc(2vw + 7px), 10px) 16px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > ul {
    display: flex;
    list-style: none;

    margin-left: 80px;

    > li > svg {
      fill: var(--twitter);
      margin-right: 20px;
      cursor: pointer;
    }

    @media (max-width: 690px) {
      li:nth-child(4) {
        display: none;
      }
    }
  }

  border-bottom: 1px solid var(--outline);

  @media (max-width: 500px) {
    display: none;
  }
`;

const iconCss = css`
  width: 22px;
  height: 22px;
`;

export const ImageIcon = styled(Image)`
  width: 25px;
  height: 25px;
`;

export const GitIcon = styled(AiOutlineGif)`
  ${iconCss}
`;

export const EmoteSmileIcon = styled(BsEmojiSmile)`
  width: 21px;
  height: 21px;
`;

export const CalendarIcon = styled(AiOutlineCalendar)`
  ${iconCss}
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCss}
`;

export const EditButton = styled(Button)`
  margin-bottom: 15px;

  padding: 4px 16px;
  font-size: 16px;

  @media (min-width: 320px) {
    padding: 10px 19px;
    font-size: 15px;
  }
`;
