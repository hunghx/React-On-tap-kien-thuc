import { createAction } from '@reduxjs/toolkit'
import * as constants from './constants'
export const  demoAction = (type,data)=>({
    type:type,
    payload: data
})

export const  changeState = (data)=>({
    type:constants.CHANGESTATE,
    payload: data
})
export const getAll = createAction("GETALL")
console.log(getAll(7));     
