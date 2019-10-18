import React from "react";
import PropTypes from "prop-types";

import {
  TableWrapper,
  Table,
  FirstTh,
  VerticalTextTd,
  PlaceNumber
} from "./styled";
import Card from "./components/Card";

const SmartTable = ({ days, placeTypes, orders, handleOrder }) => {
  return (
    <TableWrapper>
      <Table cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <FirstTh />
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {placeTypes.map((place, index) => (
            <tr key={place}>
              <td style={{ width: 30 }}>
                <PlaceNumber>{index}</PlaceNumber>
                <VerticalTextTd>{place}</VerticalTextTd>
              </td>
              {days.map(day => (
                <td key={day}>
                  <Card
                    onOrder={handleOrder}
                    day={day}
                    place={place}
                    order={orders[place][day]}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

SmartTable.propTypes = {
  days: PropTypes.array.isRequired,
  placeTypes: PropTypes.array.isRequired,
  orders: PropTypes.object.isRequired
};

export default SmartTable;
