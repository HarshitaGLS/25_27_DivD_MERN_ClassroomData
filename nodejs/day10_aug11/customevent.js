import events from 'events' 

//create an object of EventEmitter class by using above reference 
const em = new events.EventEmitter(); 

//Subscribe for FirstEvent
em.on("clickevent",()=>{console.log("clickevent called")})
em.on("addnum",(num1,num2)=>console.log(`addition is ${num1+num2}`))

// Raising FirstEvent
em.emit("clickevent")
em.emit("addnum",2,3)
em.emit("clickevent")
