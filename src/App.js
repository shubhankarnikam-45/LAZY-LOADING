import BigComponent from "./components/BigComponent";
import Loading from "./components/Loading";
import React from "react";
import { Route,Routes } from "react-router-dom";
const LazyComponent=React.lazy(()=> import("./components/BigComponent"));
const App=()=>{

  return(
    <div>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<Loading/>}>
            <LazyComponent/> 
          </React.Suspense>
        } />
      </Routes>
    </div>
  )
}

export default App;