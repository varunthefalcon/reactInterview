import React from "react";
import { LIST_DASHBOARD, SHOW_RESTAURENT } from "../utils/constants";
import JSONDATA from '../mockJSON.json'
function restaurentDetail(state = JSONDATA.restaurants, action) {
  const { type, payload } = action;
  console.log(JSONDATA)
  switch (type) {
    case SHOW_RESTAURENT:
    default:
      return state;
  }
}

export default restaurentDetail;