import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'

import UsersList from "./pages/user/UsersList";
import CreateUser from "./pages/user/CreateUser";
import RetrieveUser from "./pages/user/RetrieveUser";
import EditUser from "./pages/user/EditUser";
import RemoveUser from "./pages/user/RemoveUser";
import Contact from "./pages/static/Contact";
import AboutUs from "./pages/static/AboutUs";




const App = () => {
  return (
    <>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UsersList/>}/>
                <Route path="/create" element={<CreateUser/>}/>
                <Route path="/:id" element={<RetrieveUser />}/>
                <Route path="/edit/:id" element={<EditUser />}/>
                <Route path="/remove/:id" element={<RemoveUser />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/about" element={<AboutUs />}/>
            </Routes>

        </BrowserRouter>

    </>
  );
}

export default App