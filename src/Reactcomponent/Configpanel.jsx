import { useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from "@/components/ui/select"
import { addtext } from "@/reducers/textboxreducer"



const Configpanel = () => {
    const dispatch = useDispatch()
    const [width ,setwidth] = useState(100)
    const [height ,setheight] =useState(60)
    const [text ,settext] = useState('sample text')
    const [X ,setX] = useState(50)
    const [Y ,setY] = useState(70)

   

    const showText = () =>{
      console.log('hiis')
      const id = Math.floor(Math.random() * 100)
      dispatch(addtext({
        id ,
        X, Y, width ,height , text
      }))
    }

  return (
    <div className="bg-white w-[400px] p-3 gap-x-2 h-[80%] flex-col">
        
        <div className="flex justify-center items-center mt-2">
           <Button
            onClick={showText}
           > Add text </Button>
        </div>

        <div className="bg-slate-400 w-[70%] h-[2px] mt-2 mx-auto"> </div> 

         <div> 
            <p> position </p>
            <div className="flex gap-2 p-3"> 
                <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="posx">X</Label>
                <Input type="number" id="posx" placeholder="width" 
                  value={X}
                  onChange={(e) => setX(e.target.value)}
                />
                </div> 

                <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="posY">Y</Label>
                <Input type="number" id="posY" placeholder="width" 
                  value={Y}
                  onChange={(e) => setY(e.target.value)}
                 />
                </div>

            </div> 

            <div className="flex gap-2 p-3"> 
                <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="width">W</Label>
                <Input type="number" id="width" placeholder="width" 
                  value={width}
                  onChange={(e) => setwidth(e.target.value)}
                />
                </div> 

                <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="height">H</Label>
                <Input type="number" id="height" placeholder="height" 
                   value={height}
                   onChange={(e) => setheight(e.target.value)}
                />
                </div>

            </div>


             {/*text  */}

            <div className="mt-3 gap-y-2 p-3">
              <Label htmlFor="text"> Text </Label>
              <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a font weight" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>select font weight </SelectLabel>
                        <SelectItem value="normal">normal</SelectItem>
                        <SelectItem value="bold">bold</SelectItem>
                        <SelectItem value="italic">Itallic</SelectItem>
                        
                        </SelectGroup>
                    </SelectContent>
             </Select> 
             <div className="mt-2"> 
             <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>select font </SelectLabel>
                        <SelectItem value="Poppins">Poppins</SelectItem>
                        <SelectItem value="sans">Sans</SelectItem>
                        <SelectItem value="bold">bold</SelectItem>
                        
                        </SelectGroup>
                    </SelectContent>
             </Select>
             </div>
           </div>



         </div>

    </div>
  )
}

export default Configpanel