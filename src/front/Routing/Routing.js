import React from 'react'
import {Route,Routes,Router} from "react-router-dom"
import Products from "../Products/Products"

const Routing = () => {
  return (
    <div>
      

        <Routes>
            <Route path="/" exact>
                <Products/>
            </Route>
        </Routes>
    </div>
  )
}

export default Routing