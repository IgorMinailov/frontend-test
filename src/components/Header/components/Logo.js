import React from "react";

import {
  mainBackgroundColor,
  logoCircleColor,
  indicatorColor
} from "../../../colors";

import { LogoContainer } from "../styled";

const Logo = () => (
  <LogoContainer>
    <svg style={{ marginRight: 9 }} width={20} height={20}>
      <polygon points="0,0 4,0 0,4" style={{ fill: indicatorColor }} />
      <circle cx="10" cy="10" r="10" style={{ fill: logoCircleColor }} />
      <circle cx="10" cy="10" r="5" style={{ fill: mainBackgroundColor }} />
    </svg>
    RESTUS
  </LogoContainer>
);

export default Logo;
