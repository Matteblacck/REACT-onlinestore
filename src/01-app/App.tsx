import { Outlet } from 'react-router-dom'
import './App.css'
import Header from '../03-widgets/Header'

function App() {

  return (
    <>
      <header>
       <Header/>
      </header>
      <main className='pt-5'>
        <Outlet/>
      </main>
      
    </>
  )
}

export default App
