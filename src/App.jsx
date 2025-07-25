import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css";
function App() {
  return (
    <div className="  min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
