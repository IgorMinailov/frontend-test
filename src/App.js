import React, { useMemo, useState } from "react";
import moment from "moment";
import { cloneDeep } from "lodash";

import Header from "./components/Header";
import SmartTable from "./components/SmartTable";

const placeTypes = [
  "2 seats, VIP",
  "3 seats, standart",
  "2 seats, standart",
  "3 seats, VIP"
];

const defaultOrders = {
  "11:00": false,
  "12:00": false,
  "13:00": false,
  "14:00": false,
  "15:00": false,
  "16:00": false,
  "17:00": false,
  "18:00": false,
  "19:00": false,
  "20:00": false,
  "21:00": false,
  "22:00": false
};

const App = () => {
  const generateDates = useMemo((daysCount = 21) => {
    const daysArray = [];
    for (let i = 0; i < daysCount; i++) {
      daysArray.push(
        moment()
          .add(i, "d")
          .format("MMMM, D")
      );
    }

    return daysArray;
  }, []);

  const createInitialOrders = useMemo(() => {
    const obj = {};

    placeTypes.forEach(place => {
      if (generateDates) {
        generateDates.forEach(date => {
          if (!obj[place]) {
            obj[place] = {};
          }

          obj[place][date] = { ...defaultOrders };
        });
      }
    });

    return obj;
  }, [generateDates]);

  const [orders, setOrders] = useState(createInitialOrders);

  const handleOrder = (place, day, order) => () => {
    const newOrders = cloneDeep(orders);
    newOrders[place][day][order] = !newOrders[place][day][order];
    setOrders(newOrders);
  };

  return (
    <div>
      <Header />
      <SmartTable
        days={generateDates}
        placeTypes={placeTypes}
        orders={orders}
        handleOrder={handleOrder}
      />
    </div>
  );
};

export default App;
