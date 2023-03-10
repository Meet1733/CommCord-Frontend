import './App.css';
import LeftGuard from './Dashboard/LeftGuard/LeftGuard';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Header from './Dashboard/Header/Header';
import Msg from './Mzzzezs/hooks/messages';
import SocketHandler from './Mzzzezs/hooks/SocketHandler';
import Login from './Mzzzezs/hooks/login'; 
import Left from './Dashboard/LeftGuard/Left';
import PeerComponent from './Mzzzezs/hooks/peer';
import CreateCommunity from './Dashboard/CreateCommunity';
import JoinCommunity from './Dashboard/JoinCommunity';
import Register from './Mzzzezs/hooks/register';
import Notificatioin from './Dashboard/NotificationsContainer';
import io from 'socket.io-client';
const connection_url = 'http://localhost:3001';
const socket = io(connection_url, { transport: ['websocket'] });
function App() {
  // if(localStorage.getItem('user')){

  // }
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={!localStorage.getItem('user') ? <Login/> : <Navigate replace to={"/chats?name="+localStorage.getItem('user')+'&comm=null'} />} />
    <Route path='/Chats' element= {<SocketHandler socket={socket} />}/>
    <Route path='/create' element= {<div className="App"><Left /><div><Header socket={socket}/><CreateCommunity/></div></div>}/>
    <Route path='/join' element= {<div className="App"><Left /><div><Header socket={socket}/><JoinCommunity/></div></div>}/>
    <Route path='/peer' element= {<div className="App"><Left /><div><Header socket={socket}/><PeerComponent/></div></div>}/>
    <Route path='/register' element= {<div className="App"><Register/></div>}/>
    <Route path='/notification' element= {<Notificatioin socket={socket} />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
