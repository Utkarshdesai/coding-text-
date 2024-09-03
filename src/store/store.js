import { configureStore } from "@reduxjs/toolkit";
import textreducer from "@/reducers/textboxreducer";

export const store = configureStore(
    {
        reducer : {
            text : textreducer 
        }
    }
)