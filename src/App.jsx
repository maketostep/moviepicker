import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css";
function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
