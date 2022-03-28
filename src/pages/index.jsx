import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

function InitialRoute(){

    const {user} = useAuth();
    const navigate = useNavigate();

    return user ? <Navigate to="/home"/>: <Navigate to="/login"/>;
}

export default InitialRoute;