import { createStore, combineReducers } from 'redux';
import { reducer as goodsDetailReducer } from './goods-detail/state';
import { reducer as goodsListReducer } from './goods-list/state';

// 利用store聚合state
const store = createStore(combineReducers({
  goodsDetailReducer,
  goodsListReducer
}));



