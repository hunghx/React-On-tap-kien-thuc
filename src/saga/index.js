import {all, call, put, takeEvery} from 'redux-saga/effects'
import * as constants from '../redux/constants';

export const rootSaga= function*(){
    yield all([
           takeEvery(constants.GETALL,getAll)
         
        ])
}

function* getAll(action){
    try{
        console.log("saga =>>>>>>>>>",action);
    // Call api
//    let res = yield call() // nếu call trả về 1 promise thì kết  qua trả về không cần . then
   // chấp nhận actionguiwr lên reducer 
    yield put ({type:"SUCESSS",payload:"Từ ngữ không hợp lệ"}) // put 1 action mới gửi lên reducer
    }catch(err){
        yield put({type:"ERROR",payload:"404"})// put 1 action mới gửi lên reducer
    }
}