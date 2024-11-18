import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { AirlineSelection } from './Pages/AirlineSelection/AirlineSelection';
import { RegistrationForm } from './Pages/RegistrationForm/RegistrationForm';
import { JoinClub } from './Pages/JoinClub/JoinClub';
import { TicketOptions } from './Pages/TicketOptions/TicketOptions';
import { Checkout } from './Pages/CheckOut/Checkout';
import { Responses } from './Utils/Responses/Responses';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home></Home>}></Route>
        <Route path='/airlineSelection' element={<AirlineSelection></AirlineSelection>}></Route>
        <Route path='/registration' element={<RegistrationForm></RegistrationForm>}></Route>
        <Route path='/joinClub' element={<JoinClub></JoinClub>}></Route>
        <Route path='/ticketOptions' element={<TicketOptions></TicketOptions>}></Route>
        <Route path='/checkout/:fp/:cat' element={<Checkout></Checkout>}></Route>
        <Route path='/analysis/:fp/:cat' element={<Responses></Responses>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
