import styled from "styled-components";

import { FlexContainer } from "../../globalStyled";
import {
  secondaryTextColor,
  mainTextColor,
  headerDividerColor,
  mainBackgroundColor
} from "../../colors";

export const HeaderContainer = styled(FlexContainer)`
  width: 100%;
  padding: 16px;
  position: fixed;
  top: 0;
  z-index: 100;
  left: 0;
  height: 56px;
  background: ${mainBackgroundColor};
`;

export const HeaderItem = styled(FlexContainer)`
  height: 40px;
  color: ${({ active }) => (active ? mainTextColor : secondaryTextColor)};
  font-size: 14px;
  margin-right: 32px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    color: ${mainTextColor};
  }
`;

export const HeaderItemWithDivider = styled(FlexContainer)`
  height: 100%;
  width: 40px;
  height: 40px;
  color: ${secondaryTextColor};
  border-left: 1px solid ${headerDividerColor};
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    color: ${mainTextColor};
  }
`;

export const LogoContainer = styled(FlexContainer)`
  color: ${secondaryTextColor};
`;
