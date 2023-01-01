import { darkMode } from "./action";

let initialState = {
    currentmode: "normal",
   
}

const Reducer = (state = initialState, action) => {
    console.log("action",action)
    // console.log(state)
    switch (action.type) {
        case "dark_mode":
            // return state.currentMode="dark_mode";
                // { ...state},state.currentMode="dark_mode" 
              return "dark_mode"
            
        case "light_mode":
            return "light_mode";
            // return({...state},state.currentMode="light_mode")   
                 
                                   
                   
    }


}
export default Reducer

// import { ClickedMenu, ClosedMenu } from "./action";

// const ReducerData = (state = { option: "closed" }, action) => {
//     console.log(action.type);
//     switch (action.type) {
//       case "Clicked":
//         return (state = { option: "clicked" });
//       case "Closed":
//         return (state = { option: "closed" });
//       default:
//         return state;
//     }
//   };
  
//   export default ReducerData;
  