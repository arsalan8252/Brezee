import "./App.css";
// components
import { NavLinks } from "./Components/DataFiles/NavLinks";
import Header from "./Components/Header/Header";
import AllPages from "./Components/Pages/AllPages";
import TopHeader from "./Components/Header/TopHeader";
import Footer from "./Components/Pages/Footer";


function App() {
  return (
    <>
      <TopHeader />
      <Header NavLinks={NavLinks} />
      <AllPages />
      <Footer />
    </>
  );
}

export default App;
