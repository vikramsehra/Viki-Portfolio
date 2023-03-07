import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer.jsx"

const AppContext = createContext();
// const API = "https://thapareactapi.up.railway.app/"

const initialState = {
    name: "",
    image: "",
    services: [],
}


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Vikram kumar",
                image: "./images/hero.png"
            }
        })
    }

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "Vikram kumar",
                image: "./images/about.png"
            }
        })
    }

    //to get the api data
    // const getServices = async (url) => {
    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         dispatch({ type: "GET_SERVICES", payload: data })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // //to call the API
    // useEffect(() => {
    //     getServices(API);
    // }, []);

    return (
        <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }} >
            {children}
        </AppContext.Provider>)
}

const useGlobalContext = () => {

    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }