import {useNavigate, Navigate} from 'react-router-dom';
import Dashboard from "../components/Dashboard";

import { useAuth } from '../contexts/auth';


function Home() {

  const {user}  = useAuth();
  const navigate = useNavigate();

  // if(!user){
  //   return <Navigate to="/login"/>;
  // }
  return (
    <>
      <div>
        <Dashboard/>
      </div>
    </>
  );
}

export default Home;
