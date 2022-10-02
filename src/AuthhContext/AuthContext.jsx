import { createContext, useState }from "react";
export const Authcontext  = createContext();
export default function AuthcontextProvider ({children}){
    const [auth,setAuth]=useState(false);
    return <Authcontext.Provider value={{auth,setAuth}}>{children}</Authcontext.Provider>
} 