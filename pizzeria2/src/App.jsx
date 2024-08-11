import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <Login/>*/}
      <Register />
      <Footer />
    </>
  );
}

export default App;