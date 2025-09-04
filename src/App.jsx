import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import {Provider} from 'react-redux'
import appStore from "./utils/appStore";

const App =()=> {
  return (
    <div className="min-h-screen flex flex-col">
     <Provider store={appStore}>
      {/* Header */}
      <Header />
      {/* Body: grows to fill space */}
      <main className="flex-grow">
        <Outlet/>
      </main>
      

      {/* Footer */}
      <Footer />
      </Provider>
    </div>
  );
}


export default App;