import { useAuth } from "../contexts/auth";
import { DeslogadoRoutes } from "./deslogado.routes";
import { LogadoRoutes } from "./logado.routes";

export function Routes(){
    const {user} = useAuth();
    return user ? <LogadoRoutes/> : <DeslogadoRoutes/>
}