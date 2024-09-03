import Textbox from "./Textbox"


const VideoCard = () => {
  return (
    <div className="relative border h-full p-2 w-full max-w-md z:1">
         
      {/* Video Element */}
      <video
        src= "/assets/sample-3.mp4"
        controls
        muted
        autoPlay
        className="w-full h-auto rounded"
        />

      <div className=" ">
      <Textbox></Textbox>
      </div>
       
    </div>
    
  )
}

export default VideoCard