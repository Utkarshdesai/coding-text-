import { deletetext } from "@/reducers/textboxreducer"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Textbox = () => {
    const dispatch = useDispatch()
    const textbox = useSelector((state) => state.text)
    const [deleteicon ,setdeleteicon] = useState(false)



    const Showdelete = () =>{
      setdeleteicon(true)
    }

    
   
     const deletetextbox  = (id) =>{
        dispatch(deletetext(id))
        setdeleteicon(false)
     }

  return (
    <div>
    {
        textbox.length > 0 && 
        (
            <div 
                style={{ 
                    width: textbox[0].width, 
                    height: textbox[0].height,
                    left: textbox[0].X, 
                    top: textbox[0].Y,
                }}
                className="border border-gray-500 bg-slate-700 hover:bg-slate-600 relative"
                onMouseEnter={Showdelete}
               
            > 
                <p>{textbox[0].text}</p>
            </div>
        )

       
       
    }

      {
            deleteicon && 
            (
                <div 
                      className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer shadow-md hover:bg-red-700 w-[70px] h-[40px] absolute top-3"
                      onClick={() => deletetextbox(textbox[0].id)}
                >
                    Delete
                </div>
            )
        }

    
        
</div>
     
  )
}

export default Textbox