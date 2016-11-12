import { MONITOR_CHANGE, STAT_CHANGE,PREDICTION_CHANGE,DISASTER_CHANGE} from '../constants/ActionTypes';//得到所有的actionType


const initialState = {
   mIndex: 0,
   sIndex:"0_0",
   pIndex:"0_0",
   dIndex:"0_0"
}

export default function changeLeftNav(state = initialState, action) {
  if(action.type === MONITOR_CHANGE) {
    return  Object.assign({}, state, { mIndex: action.IndexTemp});
  }else if(action.type==STAT_CHANGE){
    return  Object.assign({}, state, { sIndex: action.IndexTemp});
  }else if(action.type==PREDICTION_CHANGE){
    return Object.assign({},state,{pIndex:action.IndexTemp})
  }else if(action.type==DISASTER_CHANGE){
    return Object.assign({},state,{dIndex:action.IndexTemp})
  }
  return state
}
