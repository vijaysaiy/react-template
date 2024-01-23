import axios from "axios";
import { getQueryParams } from "../utils";
import { API_END_POINTS } from "./constants";

export const getOrderList = async (queryParams) => {
  try {
    const URL = API_END_POINTS.SALES_ORDER_LIST + getQueryParams(queryParams);
    const res = await axios.get(URL);
    return res;
  } catch (error) {
    return error;
  }
};
