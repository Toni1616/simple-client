import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'

import UsersList from "./components/user/UsersList";
import CreateUser from "./components/user/CreateUser";
import RetrieveUser from "./components/user/RetrieveUser";




const App = () => {
  return (
    <>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UsersList/>}/>
                <Route path="/create" element={<CreateUser/>}/>
                <Route path="/:id" element={<RetrieveUser />}/>
            </Routes>

        </BrowserRouter>

    </>
  );
}

export default App