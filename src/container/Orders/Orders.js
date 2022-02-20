import React, { useEffect, useState } from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

import Order from "../../components/order/order";
import axios from "../../axios-orders";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";

function Orders() {
  const [orders, setOrders] = useState([]);

  let { userId } = useSessionContext();

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedData = [];
        for (let key in res.data) {
          if (res.data[key].userID === userId) {
            fetchedData.push({ ...res.data[key], id: key });
          }
        }
        setOrders(fetchedData);
      })
      .catch((err) => {});
  }, [userId]);

  return (
    <div>
      {orders.map((order) => (
        <Order key={order.id} order={order} ingredient={order.ingredient} />
      ))}
    </div>
  );
}

export default WithErrorHandler(Orders, axios);
