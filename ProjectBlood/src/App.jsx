
import './App.css'
import './index.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MyRequests from './pages/MyRequests'
import CreateRequest from './pages/CreateRequest'
import UpdateRequest from './pages/UpdateRequest'
import AcceptedRequests from './pages/AcceptedRequests'
import SearchDonors from './pages/SearchDonors'
import DonorDashboard from './pages/DonorDashboard';
import ReceiverDashboard from './pages/ReceiverDashboard';

function App() {

  return (
    <BrowserRouter>

      <Navbar />

    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/register' element = {<Register/>}/>
    <Route path='/dashboard' element = {<Dashboard/>}/>
    <Route path='/my-requests' element = {<MyRequests/>}/>
    <Route path='/create-request' element = {<CreateRequest/>}/>
    <Route path="/update-request/:id" element = {<UpdateRequest/>}/>
    <Route path="/accepted-requests" element = {<AcceptedRequests/>}/>
    <Route path="/search-donors" element = {<SearchDonors/>}/>
    <Route path="/donor-dashboard" element={<DonorDashboard />}/>
    <Route path="/receiver-dashboard" element={<ReceiverDashboard />}/>


    </Routes>
    





    </BrowserRouter>




  )
}

export default App
