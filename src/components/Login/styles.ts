import styled, { css } from 'styled-components';
import { FaUserAlt, RiLockPasswordLine } from '../../styles/Icons';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  background: #db3535;
`;

const inputsCss = css`
  width: 100%;
  height: 2rem;
  padding-left: 2rem;
`;

const iconsCss = css`
  fill: black;
  position: absolute;
  z-index: 2;
  margin-left: 0.5rem;
`;

export const SectionEmail = styled.section`
  display: flex;
  align-items: center;
`;

export const InputEmail = styled.input`
  ${inputsCss}
`;

export const IconUser = styled(FaUserAlt)`
  ${iconsCss}
`;

export const SectionPassword = styled.section`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

export const InputSenha = styled.input`
  ${inputsCss}
`;

export const IconPassword = styled(RiLockPasswordLine)`
  ${iconsCss}
`;
