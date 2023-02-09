import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import Endorsements from "./components/Endorsements";
import Footer from "./components/Footer";

function App() {
  console.log("VITE_SECRET_MESSAGE: ", import.meta.env.VITE_SECRET_MESSAGE);

  return (
    <div className="flex flex-col h-screen">
      <Header />

      {/* Main Content */}
      <main className="grow container mx-auto">
        <div className="">
          <section className="mt-40">
            <Banner />
            <form method="get" action="https://www.google.com/search">
              <SearchBar />

              <div className="mt-8 flex justify-center space-x-3">
                <button type="submit" className="button">
                  Pranav Search
                </button>
                <button className="button">I'm Feeling Pranav</button>
              </div>
            </form>

            <div className="mt-8">
              <Endorsements />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
