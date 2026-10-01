// import './App.css'

import FirstComp from "./components/day1_28sep/FirstComp"
import Propsdemo from "./components/day1_28sep/Propsdemo"
import Counter from "./components/day2_1oct/Counter"
import Counter1 from "./components/day2_1oct/Counter1"
import Eventdemo from "./components/day2_1oct/eventdemo"

function App() {
  let eid= 1234
  let isActive=true
  return (
    <>
      {/* <h1 id="" class="">HEllo React</h1>
      <p>ethehtkhe</p>
      <FirstComp username="Ram" course="MScIT"></FirstComp> */}
      {/* <Propsdemo 
        empid={eid} 
        isActive = {isActive}
        hobbies = {["dance","cricket","travelling","gossip"]}>
            <p>khwhr</p>
            <b>ddkjrhw</b>
            <FirstComp/>
          </Propsdemo> */}

          {/* <Eventdemo/> */}
          {/* <Counter/> */}
          {/* <Counter1/> */}

          <Eventdemo/>
    </>
  )
}

export default App
