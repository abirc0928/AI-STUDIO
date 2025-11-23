import { useState } from "react"
import { RouteContext } from "../context"

const RouteProvider = ({ children }) => {
    const [route, setRoute] = useState('create-img')

    return (
        <RouteContext.Provider value={{route, setRoute}}>
            {children}
        </RouteContext.Provider>
    )
}

export default RouteProvider