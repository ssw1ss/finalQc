import React from "react"
import { navigate } from "@reach/router"

const Test = () => {
  return <div onClick={() => navigate("/test?page=3")}>asdfasdf</div>
}

export default Test
