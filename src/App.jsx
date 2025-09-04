import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Body: grows to fill space */}
      <main className="flex-grow">
        <Body />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
