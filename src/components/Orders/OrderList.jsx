import { Button, DatePicker, Input, Table } from "censa_front_end_library";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getOrderList } from "../../services/order";
import Card from "../Card/Card";
const OrderList = ({ status }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = useState(false);
  const [orderList, setOrderList] = useState({});

  const fetchOrderList = async () => {
    try {
      setLoading(true);
      const queryParams = {
        page: page,
        pageSize,
        status,
      };
      const res = await getOrderList(queryParams);
      setOrderList(res.data.response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOrderList();
  }, [status, page, pageSize]);

  const schemas = {
    pending: [
      {
        displayName: "SO NO",
        name: "so_no",
      },
      {
        displayName: "Customer",
        name: "customerName",
        cellType: "AVATAR_WITH_META_LIST",
        translate: (cellData) => ({
          title: `${cellData.customerName}`,
          metaList: [cellData.customerId],
        }),
      },
      {
        displayName: "Ordered Date",
        name: "order_date",
        translate: (cellData) => ({
          title: `${moment(cellData.order_date).format("DD-MM-YYYY")}`,
        }),
      },
      {
        displayName: "Delivery Date",
        name: "delivery_date",
        translate: (cellData) => ({
          title: `${moment(cellData.delivery_date).format("DD-MM-YYYY")}`,
        }),
      },
      {
        displayName: "Payment Type",
        name: "payment_type",
      },
      {
        displayName: "Source",
        name: "source",
      },
      {
        displayName: "Status",
        name: "order_status",
      },
      {
        displayName: "Action",
        sorting: false,
        translate: () => ({
          title: (
            <>
              <Button icon="more_vert" />
            </>
          ),
        }),
      },
    ],
    invoiced: [
      {
        displayName: "SO NO",
        name: "so_no",
      },
      {
        displayName: "Customer",
        name: "customerName",
        cellType: "AVATAR_WITH_META_LIST",
        translate: (cellData) => ({
          title: `${cellData.customerName}`,
          metaList: [cellData.customerId],
        }),
      },
      {
        displayName: "Ordered Date",
        name: "order_date",
        translate: (cellData) => ({
          title: `${moment(cellData.order_date).format("DD-MM-YYYY")}`,
        }),
      },
      {
        displayName: "Delivery Date",
        name: "delivery_date",
        translate: (cellData) => ({
          title: `${moment(cellData.delivery_date).format("DD-MM-YYYY")}`,
        }),
      },
      {
        displayName: "Payment Type",
        name: "payment_type",
      },
      {
        displayName: "Source",
        name: "source",
      },
      {
        displayName: "Status",
        name: "order_status",
      },
      {
        displayName: "Action",
        translate: () => ({
          title: (
            <>
              <Button icon="more_vert" />
            </>
          ),
        }),
      },
    ],
    history: [
      {
        displayName: "SO NO",
        name: "so_no",
      },
      {
        displayName: "Customer",
        name: "customerName",
        cellType: "AVATAR_WITH_META_LIST",
        translate: (cellData) => ({
          title: `${cellData.customerName}`,
          metaList: [cellData.customerId],
        }),
      },
      {
        displayName: "Ordered Date",
        name: "order_date",
        translate: (cellData) => ({
          title: `${moment(cellData.order_date).format("DD-MM-YYYY")}`,
        }),
      },
      {
        displayName: "Delivery Date",
        name: "delivery_date",
        translate: (cellData) => ({
          title: `${moment(cellData.delivery_date).format("DD-MM-YYYY")}`,
        }),
      },
      {
        displayName: "Payment Type",
        name: "payment_type",
      },
      {
        displayName: "Source",
        name: "source",
      },
      {
        displayName: "Status",
        name: "order_status",
      },
      {
        displayName: "Action",
        sorting: false,
        translate: () => ({
          title: (
            <>
              <Button icon="more_vert" />
            </>
          ),
        }),
      },
    ],
    cancelled: [
      {
        displayName: "SO NO",
        name: "so_no",
      },
      {
        displayName: "Customer",
        name: "customerName",
        cellType: "AVATAR_WITH_META_LIST",
        translate: (cellData) => ({
          title: `${cellData.customerName}`,
          metaList: [cellData.customerId],
        }),
      },
      {
        displayName: "Ordered Date",
        name: "order_date",
        translate: (cellData) => ({
          title: `${moment(cellData.order_date).format("DD-MM-YYYY")}`,
        }),
      },
      {
        displayName: "Delivery Date",
        name: "delivery_date",
        translate: (cellData) => ({
          title: `${moment(cellData.delivery_date).format("DD-MM-YYYY")}`,
        }),
      },
      {
        displayName: "Payment Type",
        name: "payment_type",
      },
      {
        displayName: "Source",
        name: "source",
      },
      {
        displayName: "Status",
        name: "order_status",
      },
      {
        displayName: "Action",
        translate: () => ({
          title: (
            <>
              <Button icon="more_vert" />
            </>
          ),
        }),
      },
    ],
  };
  return (
    <div className="mt-6">
      <Card>
        <div className="orderlist-header flex">
          <div>
            <Input icon="search" placeholder="Search here..." />
          </div>
          <div>
            <DatePicker withInput />
          </div>
        </div>
        <div className="orderlist-table">
          <Table
            type="resource"
            withPagination={true}
            separator={false}
            showMenu={false}
            data={orderList?.data}
            schema={schemas[status]}
            onRowsChange={(rows) => {
              setPageSize(rows);
            }}
            pageSize={pageSize}
            onPageChange={(newPage) => {
              setPage(newPage);
            }}
            loading={loading}
            totalPages={orderList?.totalPages || 5}
            async={true}
          />
        </div>
      </Card>
    </div>
  );
};

export default OrderList;
