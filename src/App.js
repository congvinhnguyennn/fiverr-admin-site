import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailWork from "./modules/Detail_Work/DetailWork";
// import Home from './Home/Home'
import Type_Detail from "./modules/TypeWork_DetailType/Type_Detail";
import Mainlayout from "./layouts/Mainlayout";


function App() {
  return (
    // <Suspense fallback={<h1>loading...</h1>}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Mainlayout/>}>
    //         <Route index element={<Home/>}/>
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </Suspense>
    <Suspense fallback={<h1>loading...</h1>}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout/>}>
          <Route path="/detail" element={<DetailWork/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
