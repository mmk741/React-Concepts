
import * as types from './actionType';

const initialState={
    users:[],
    user:{},
    loading:true
}

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case types.GetUsers :
            return {
                ...state,
                users:action.payload,
                loading : false
            };

        case types.DeleteUser :
            return {
                ...state,
                loading:false

            }

            case types.AddUser :
                return {
                    ...state,
                    loading:false
                }

            case types.GetSingleUser:
                return {

                    ...state,
                    user:action.payload,
                    loading : false
                    
                }

            case types.UpdateUser:
                return {
                    ...state,
                    loading: false

                }

        default :
         return state;
    }
}

export default reducer;