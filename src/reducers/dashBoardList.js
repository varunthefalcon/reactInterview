import React from "react";
import { LIST_DASHBOARD } from "../utils/constants";
import JSONDATA from '../mockJSON.json'
function dashBoardList(state = [], action) {
  const { type, payload } = action;
  console.log(JSONDATA)
  switch (type) {
    case LIST_DASHBOARD:
    default:
      return state;
  }
}

export default dashBoardList;
