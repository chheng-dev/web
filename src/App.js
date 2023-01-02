import { Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from './components/Screen/HomeScreen';
import EventScreen from './components/Screen/EventScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import EventDetail from "./components/Screen/PageDetail/EventDertail"
// import NotFound from './components/Error/404';
import GuestInfo from './components/GuestInfo';
import Ticket from './components/Screen/ETicket';
import Register from './components/Screen/Form/Register';
import Login from './components/Screen/Form/Login';
import PaymentPage from './components/Screen/PaymentScreen';
import TestScreen from './components/Screen/TestScreen';
import 'antd/dist/antd.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



function App() {
  return (
    <div className="w-full h-full  dark:bg-gray-900">
      
      <Switch>
        <Route exact path={'/'}>
          <HomeScreen/>
        </Route>
        <Route exact path="/event">
          <EventScreen />
        </Route>
        <Route path='/event/:id'>
          <EventDetail/>
        </Route>
        <Route path='/guest-info/:id'>
          <GuestInfo />
        </Route>
        <Route path='/ticket'>
          <Ticket />
        </Route>
        <Route path='/payment/:id'>
          <PaymentPage />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        {/* <Route path='*'>
          <NotFound />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
