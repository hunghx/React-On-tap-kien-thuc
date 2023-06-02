import { applyMiddleware, combineReducers, createStore } from "redux";
import { categoryReducer } from "./reducer/categoryReducer";
import { productReducer } from "./reducer/productReducer";
import { toolkitReducer } from "./reducer/toolkitReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga";


const reducer = combineReducers({catalog:categoryReducer,product:productReducer,toolkit:toolkitReducer})
const sagaMiddleware =  createSagaMiddleware();

export const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)