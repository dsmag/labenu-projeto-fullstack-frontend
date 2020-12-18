import styled from "styled-components";
import {primaryColor} from '../../constants/colors'

export const Button = styled.button`
  background-color: ${primaryColor};
  border: solid 2px ${primaryColor};
  border-radius: 50%;
  outline: none;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
`;

export const Icon = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
