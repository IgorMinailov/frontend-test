import React from "react";
import { Icon } from "antd";

import { HeaderContainer, HeaderItem, HeaderItemWithDivider } from "./styled";
import { FlexContainer } from "../../globalStyled";
import Logo from "./components/Logo";

const Header = () => (
  <HeaderContainer justifyContent="space-between">
    <FlexContainer>
      <Logo />
    </FlexContainer>
    <FlexContainer>
      <HeaderItem>Overview</HeaderItem>
      <HeaderItem active>Tables</HeaderItem>
      <HeaderItem>Guests</HeaderItem>
      <HeaderItem>Delivery</HeaderItem>

      <HeaderItemWithDivider>
        <Icon type="down-circle" />
      </HeaderItemWithDivider>
      <HeaderItemWithDivider>
        <Icon type="user" />
      </HeaderItemWithDivider>
      <HeaderItemWithDivider>
        <Icon type="security-scan" />
      </HeaderItemWithDivider>
      <HeaderItemWithDivider>
        <Icon type="info-circle" />
      </HeaderItemWithDivider>
    </FlexContainer>
  </HeaderContainer>
);

export default Header;
