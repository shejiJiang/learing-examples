import {IGoodsItem} from "./types";
import {AnyAction} from "redux";

// 1.定义state结构，以及初始值
const goodsDetail: IGoodsItem = {
  // 商品id
  goodsId: 'string',
  // 商品名称
  goodsName: '',
  // 描述
  desc: ''
};

// 2.定义state支持的修改事件，以及事件的处理逻辑
// actionTypes
const INIT = 'INIT';
// reducer
export function reducer(state = goodsDetail, action: AnyAction) {
  switch (action.type) {
    case INIT:
      return action.goodsDetail;
  }
}
