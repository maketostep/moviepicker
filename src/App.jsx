import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import './app.css'
function App() {

  return (<div className='app'>
      <Header />
      <Outlet />
      <Footer />
  </div>)
}

export default App
