
// 1.定义state结构，以及初始值
import {IGoodsList} from "../types";
import {AnyAction} from "redux";

const goodsList: IGoodsList = [];

// 2.定义state支持的修改事件，以及事件的处理逻辑
// actionTypes
const INIT = 'INIT';
const ADD_ITEM = 'ADD_ITEM';
// reducer
export function reducer(state = goodsList, action: AnyAction) {
  switch (action.type) {
    case INIT:
      return action.goodsList;
    case ADD_ITEM:
      return goodsList.concat(action.goodsItem);
  }
}
