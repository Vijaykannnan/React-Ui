// import { ClickedMenu, ClosedMenu } from "./action";

const ReducerData = (state = { option: "closed" }, action) => {
  console.log(action.type);
  switch (action.type) {
    case "Clicked":
      return (state = { option: "clicked" });
    case "Closed":
      return (state = { option: "closed" });
    default:
      return state;
  }
};

export default ReducerData;
