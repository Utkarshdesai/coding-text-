import { createSlice } from "@reduxjs/toolkit"

const textslice = createSlice(
    {
       name: 'text',
       initialState : [] ,
       reducers:{
         addtext : (state ,action) => {
          state.push (action.payload)
          
         },
         deletetext : (state ,action) => {
            return state.filter(text => text.id !== action.payload);
         },
         updatetext :() => {
                
         }
       }
    }
)

export const {addtext ,deletetext, updatetext} = textslice.actions
export default textslice.reducer