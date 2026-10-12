import { Outlet } from 'react-router'
import MyNavbar from './components/MyNavbar'

function App() {
 
  return (
    <>
      <MyNavbar/>
      <div className="container mt-5">
        <Outlet/>
      </div>
    </>
  )
}

export default App
