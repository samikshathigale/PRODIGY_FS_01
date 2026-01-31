import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const AppContext = createContext()

export const AppContextProvider = (props) => {

axios.defaults.withCredentials = true;

    const backendURL = import.meta.env.VITE_BACKEND_URL 
    const [isLoggedin, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(false)

//     const getAuthState= async () => {
//     try {
//         const { data } = await axios.get(
//       backendURL + '/api/auth/is-auth');
//       if (data.success) {
//         setIsLoggedIn(true);
//         getUserData();
//       } 
//     }catch (error) {
//       toast.error(error.message);
//     }
// }

const getAuthState = async () => {
  try {
    const { data } = await axios.get(
      backendURL + '/api/auth/is-auth',
      { withCredentials: true }   
    );

    if (data.success) {
      setIsLoggedIn(true);
      getUserData();
    }

  } catch (error) {
    console.log("Not authenticated");
  }
};






   const getUserData = async () => {
  try {
    const { data } = await axios.get(
      backendURL + '/api/user/data',
      { withCredentials: true }
    );

    if (data.success) {
      setUserData(data.userData);
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    toast.error(error.message);
  }
};

  useEffect(() => {
    getAuthState();
  }, [])


    const value= {
        backendURL,
        isLoggedin,setIsLoggedIn,
        userData,setUserData,
        getUserData
    }
   return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
   )
}
