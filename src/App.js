//import './App.css';
import Card from './Card'
//import Orderlist from './Orderlist';
//import {add,subs,mult,div} from './Addition';
import sData from './sData';

function ncard(val){
return(
  <Card
      key = {val.id}
      imgsrc = {val.imgsrc}
      title = {val.title}
      sname = {val.sname}
      link={val.link}
/>
);
}

function App() {
  //const name = "henil";
  //const currDate = new Date().toLocaleDateString();
  //const currTime = new Date().toLocaleTimeString();

  /*let curDate= new Date(2023, 2, 3, 23);
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};

  
    if(curDate>=1 && curDate<12){
        greeting="Good Morning";
        cssStyle.color = 'green';
    }
    else if (curDate>=12 && curDate<19) {
        greeting="Good Afternoon";
        cssStyle.color = 'orange';
    } 
    else {
      greeting="Good Night";
      cssStyle.color = 'blue';
    }
  */

  return (
    <>

    <h1 className='heading__style'>List Of Popular Web Series</h1>
   
    {sData.map(ncard)}
    </>
  );
}

export default App;
