import * as types from '../constants/ActionTypes'

export function navChange(n,type) {
  if(type==types.MONITOR_CHANGE){
    return {
        type:types.MONITOR_CHANGE,
        IndexTemp:n
    }
  }else if(type==types.STAT_CHANGE){
      return {
        type: types.STAT_CHANGE,
        IndexTemp: n
      }
  }else if(type==types.PREDICTION_CHANGE){
     return {
       type:types.PREDICTION_CHANGE,
       IndexTemp:n
     }
  }else if(type==types.DISASTER_CHANGE){
    return {
      type:types.DISASTER_CHANGE,
      IndexTemp:n
    }
  }

}
