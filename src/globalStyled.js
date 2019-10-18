import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "initial")};
  align-items: ${({ alignItems }) => alignItems || "center"};
`;
