
/* TOFFEE REAL V1 - functional data layer */
const TOFFEE_KEY = "toffee_v1";
const defaultData = {
  tasks: [
    {id:"etsy", name:"ทำสินค้า Etsy", done:false},
    {id:"client", name:"งานลูกค้า", done:false},
    {id:"teaching", name:"งานสอน", done:false},
    {id:"youtube", name:"ทำ YouTube", done:false},
    {id:"exercise", name:"ขยับร่างกาย", done:false}
  ],
  remindersToday: [],
  remindersTomorrow: [],
  migraine: {},
  moods: [],
  motherMoney: {received:[], expenses:[]},
  exercise: [],
  completed: []
};
function loadToffeeData(){
  try{return {...defaultData,...JSON.parse(localStorage.getItem(TOFFEE_KEY)||"{}")}}
  catch(e){return structuredClone(defaultData)}
}
function saveToffeeData(d){localStorage.setItem(TOFFEE_KEY,JSON.stringify(d))}
window.toffee = {load:loadToffeeData, save:saveToffeeData};
