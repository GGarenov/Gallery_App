
import { Link } from "react-router-dom";


// import { getPhotos } from "../client";


export default function Home() {
 

  
  return (
    <div>
      {/* top */}
      <div
        className="flex flex-col gap-6 p-6 md:p-28 px-4
       max-w-6xl mx-auto"
      >
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find all <span className="text-slate-500">home</span>
          <br />
          amazing photos
        </h1>
        <div className="text-gray-400 text-xs sm:text-xl">
          Browse are photos
          <br />
          You can upload your own photos
        </div>
        <Link to={"/search"} className="text-xl sm:text-xl text-blue-800 font-bold hover:underline">
          Search Now..
        </Link>
      </div>

    

      

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
       
        
       
      </div>
    </div>
  );
}