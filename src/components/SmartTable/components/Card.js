import React, { useMemo } from "react";
import {
  CellCard,
  CardHeader,
  CardBody,
  Percentage,
  More,
  WithPercent,
  OrderTimeBlock
} from "../styled";

import { Icon } from "antd";

const Card = ({ day, place, order, onOrder }) => {
  const computeValue = useMemo(() => {
    const ordersCount = Object.values(order).filter(order => order).length;

    return Math.floor((100 / 12) * ordersCount);
  }, [order]);

  return (
    <CellCard>
      <CardHeader justifyContent="space-between" alignItems="flex-start">
        <WithPercent alignItems="flex-start">
          <Percentage value={computeValue}>{computeValue}</Percentage>%
        </WithPercent>
        <More>
          <Icon type="more" />
        </More>
      </CardHeader>
      <CardBody flexWrap="wrap">
        {Object.keys(order).map(item => (
          <OrderTimeBlock
            key={item}
            onClick={onOrder(place, day, item)}
            ordered={order[item]}
          >
            {item}
          </OrderTimeBlock>
        ))}
      </CardBody>
    </CellCard>
  );
};

export default Card;
