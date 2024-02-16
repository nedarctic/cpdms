import Reducer from "./reducer";
import { createStore } from "redux";

function getData() {
  let d1 = new Date();
  let d2 = new Date();
  d2.setDate(d2.getDate() + 5);
  let d3 = new Date();
  d3.setDate(d3.getDate() + 8);
  let d4 = new Date();
  d4.setDate(d4.getDate() + 20);

  let data = [
    {
      id: 1,
      start: d1,
      end: d2,
      name: "Project 1"
    },
    {
      id: 2,
      start: d3,
      end: d4,
      name: "Project 2",
      color: "orange"
    }
  ];
  return data;
}
const state = {
  data: getData(),
  links: [],
  selectedItem: null
};
export default createStore(Reducer, state);
