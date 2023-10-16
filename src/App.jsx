import './App.css'
import IbadanTech from './Component/IbadanTech/IbadanTech'
import NavBar from './Component/NavBar/NavBar'
import Speakers from './Component/Speakers/Speakers'
import Venue from './Component/Venue/Venue'
import Ticket from './Component/Ticket/Ticket'

function App() {

  return (
    <>
      <NavBar />
      <IbadanTech />
      <Venue />  
      <Speakers /> 
      <Ticket />
    </>
  )
}

export default App
