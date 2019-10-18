import styled from "styled-components";
import { FlexContainer } from "../../globalStyled";
import {
  mainTextColor,
  tableBackgroundColor,
  secondaryTextColor,
  mainBackgroundColor,
  cardHeaderBorderColor,
  lowValueColor,
  averageValueColor,
  mediumValueColor,
  highValueColor,
  zeroValueColor,
  orderedTimeColor,
  timeColor,
  orderedBlockBackgroundColor,
  rowNumberColor,
  indicatorColor
} from "../../colors";

export const ColumnHeader = styled(FlexContainer)`
  height: 30px;
  width: 140px;
  justify-content: flex-start;
  padding: 8px 6px;
  font-size: 13px;
  font-family: "Proxima Nova Semibold";
  color: ${mainTextColor};
  background: ${tableBackgroundColor};
`;

export const RowHeader = styled(FlexContainer)`
  height: 273px;
  width: 40px;
  padding: 8px 13px;
  font-size: 13px;
  font-family: "Proxima Nova Semibold";
  color: ${secondaryTextColor};
  background: ${tableBackgroundColor};
`;

export const CellCard = styled.div`
  height: 273px;
  width: 140px;
  border-radius: 4px;
  background: ${mainBackgroundColor};
`;

export const CardHeader = styled(FlexContainer)`
  height: 60px;
  border-bottom: 1px solid ${cardHeaderBorderColor};
  padding: 14px 16px;
`;

export const CardBody = styled(FlexContainer)`
  height: 212px;
  padding: 6px;
`;

export const TableWrapper = styled.div`
  position: absolute;
  top: 56px;
  width: 100%;
  overflow: auto;
  height: calc(100% - 56px);
  ::-webkit-scrollbar {
    width: 10px; /* for vertical scrollbars */
    height: 10px; /* for horizontal scrollbars */
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  background: #262527;
  border: none !important;
  border-spacing: 0 !important;
  width: 100% !important;
  table-layout: fixed !important;
  word-break: break-all;

  td:first-of-type,
  th:first-of-type {
    border: none;
    padding: 0;
  }

  td,
  th {
    z-index: 1;
    border: none;
    padding: 0;
    padding-left: 15px;
  }

  tr > td:first-of-type {
    position: sticky;
    left: 0px;
    height: 303px;
    width: 40px;
    padding: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 13px;
    font-family: "Proxima Nova Semibold";
    color: ${secondaryTextColor};
    background: ${tableBackgroundColor};
  }

  tr > th {
    position: sticky;
    top: 0px;
    height: 30px;
    width: 155px;
    z-index: 1000 !important;
    justify-content: flex-start;
    padding: 0;
    padding-left: 15px;
    font-size: 13px;
    font-family: "Proxima Nova Semibold";
    color: ${mainTextColor};
    background: ${tableBackgroundColor};
  }

  tr > th:nth-of-type(2) {
    padding-left: 35px !important;
    &:before {
      content: "";
      display: block;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      position: absolute;
      left: 20px;
      top: calc(50% - 5px);
      background: ${indicatorColor};
    }
  }
`;

export const Percentage = styled.span`
  font-family: "Proxima Nova Bold";
  font-size: 40px;
  position: relative;
  z-index: 0;
  margin-right: 2px;
  color: ${({ value }) =>
    value === 0
      ? zeroValueColor
      : value > 0 && value <= 25
      ? lowValueColor
      : value > 25 && value <= 50
      ? averageValueColor
      : value > 50 && value <= 75
      ? mediumValueColor
      : highValueColor};
  line-height: 0.9;
`;

export const VerticalTextTd = styled.div`
  transform: rotate(-90deg);
  white-space: nowrap;
`;

export const PlaceNumber = styled(FlexContainer)`
  width: 40px;
  height: 36px;
  color: ${rowNumberColor};
  position: absolute;
  top: 20px;
  font-family: "Proxima Nova Bold";
  font-size: 29px;
`;

export const WithPercent = styled(FlexContainer)`
  font-size: 10px;
  color: ${secondaryTextColor};
`;

export const More = styled.div`
  font-size: 18px;
  color: ${secondaryTextColor};
`;

export const FirstTh = styled.th`
  top: 0 !important;
  width: 40px !important;
  height: 30px !important;
  padding: 0 !important;
`;

export const OrderTimeBlock = styled(FlexContainer)`
  width: 60px;
  height: 30px;
  border-radius: 2px;
  margin: 2px;
  font-family: "Proxima Nova Semibold";
  color: ${({ ordered }) => (ordered ? orderedTimeColor : timeColor)};
  background: ${({ ordered }) =>
    ordered ? orderedBlockBackgroundColor : "transparent"};
  cursor: pointer;
`;
