import { Button, Heading, Tab, Tabs } from "censa_front_end_library";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderList from "./OrderList";
const Orders = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="order-header flex flex-justify-between">
        <Heading size="m">Sales Order</Heading>
        <Button appearance="primary" icon="article" size="small" onClick={() => navigate("/orders/create")}>
          Place new order
        </Button>
      </div>
      <div className="order-tabs">
        <Tabs>
          <Tab label="Pending" key="pending">
            <OrderList status="pending" />
          </Tab>
          <Tab label="Invoiced" key="invoiced">
            <OrderList status="invoiced" />
          </Tab>
          <Tab label="History" key="history">
            <OrderList status="history" />
          </Tab>
          <Tab label="Cancelled" key="cancelled">
            <OrderList status="cancelled" />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Orders;
