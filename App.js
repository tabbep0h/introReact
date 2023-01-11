import React from "react";

function App() {
  // return (
    //----practic-tasks-1----//

    // Task-1
    // <div>
    //   text2
    // </div>

    // Task-2
    // <div>
    //   <p>1</p>
    //   <p>2</p>
    //   <p>3</p>
    // </div>

    // Task-3
    // <div>
    //     <input></input><br></br>
    //     <input></input><br></br>
    //     <input></input>
    // </div>

    // Task-4
    // <div>
    //   <ul>
    //     <li>1</li>
    //     <li>2</li>
    //     <li>3</li>
    //     <li>4</li>
    //     <li>5</li>
    //     <li>6</li>
    //     <li>7</li>
    //     <li>8</li>
    //     <li>9</li>
    //     <li>10</li>
    //   </ul>
    // </div>

    // Task-5
    // <div>
    //   <table>
    //     <tr>
    //       <td>jhbngjhbn</td>
    //       <td>jhbngjhbn</td>
    //       <td>jhbngjhbn</td>
    //     </tr>
    //     <tr>
    //       <td>jhbngjhbn</td>
    //       <td>jhbngjhbn</td>
    //       <td>jhbngjhbn</td>
    //     </tr>
    //     <tr>
    //       <td>jhbngjhbn</td>
    //       <td>jhbngjhbn</td>
    //       <td>jhbngjhbn</td>
    //     </tr>
    //   </table>
    // </div>

    // Task-6
    // <div>
    //   <p className="1">1</p>
    //   <p className="2">2</p>
    //   <p className="3">3</p>
    // </div>

  // );
     //----practic-tasks-2----//


  // Task-1   
  //  let isAdult = null
  //  const age = 18
  //
  //   if (age >= 18){
  //     isAdult = "true";
  //   } else{
  //     isAdult = "false";
  //   }
  //
  //    return(
  //     <div>
  //       succes:{isAdult}
  //     </div>
  //   );


  // Task-2
  // let isAdmin = null;
  // const user = "admin"

  // if (user == "admin"){
  //   isAdmin = "true"
  // } else{
  //   isAdmin = "false"
  // }

  // return(
  //   <div>
  //     isAdmin:{isAdmin}
  //   </div>
  // );

  //----TASKS----//
  // return(
    // Task-1
    // <div>
    //   текст
    // </div>
  // );
  
    // Task-2
    // let text = "текст"

    // retrun(
    //   <div>
    //     {text}
    //   </div>
    // );
    
    // Task-3
    // let text = <p>текст</p>

    // return(
    //   <div>
    //     {text}
    //   </div>
    // );

    // Task-4 
    // let text1 = <p>текст1</p>
    // let text2 = <p>текст2</p>

    // return(
    //   <div>
    //     {text1}
    //     <p>!!!</p>
    //     {text2}
    //   </div>
    // );

    // Task-5
    // let attr = "block"

    // return(
    //   <div id = {attr}>
    //     текст
    //   </div>
    // );

    // Task-6
    // let attr = "block"

    // return(
    //   <div className = {attr}>
    //     текст
    //   </div>
    // );

    // Task-7
    // const style = {
    //   "background":"green",
    //   "border":"1px solid",
    //   "border-radius":"30px",
    //   "color":"white"
    // }

    // return(
    //   <div style = {style}>
    //     текст
    //   </div>
    // )

    // Task-8'
let show = true ;
let text = null


if (show === true){
  return <div>
      Какой-то текст
      </div>
  } else{
    text = null
  }

  return (
    {text}
  );

    // // Task-9
    // const arr = ["a","b","c","d","e"]

    // const res = arr.map(function(item){
    //   return <li key = {item}>{item}</li>
    // })

    // return(
    //   <div>
    //     {res}
    //   </div>
    // );

    // Task-10
    // function getText() {
    //   return <li>текст1</li>
    // }
      
    // return(
    //   <div>
    //     {getText()}
    //   </div>
    // );


    // Task-11
    // const getNum1 = 1
    // const getNum2 = 2

    // return(
    //   <div>
    //     {getNum1+getNum2}
    //   </div>
    // )

    // Task-12
    // const db = [
    //   {id: 1,name: "Иванов Иван",days: 30,percent:20},
    //   {id: 2,name: "Петров Петр",days: 80,percent:30},
    //   {id: 3,name: "Вадимов Вадим",days: 60,percent:20}
    // ];

    // const res = db.map(function(item) {
    //   return <tr>
    //     <td>{item.name}</td>
    //     <td>{item.days}</td>
    //     <td>{item.percent}</td>
    //     <td>{item.days * item.percent}</td>
    //     </tr>
    // }); 
    
    // return(
    //   <div>
    //     <table>
    //       <thead>
    //         <td>Название:</td>
    //         <td>Дней:</td>
    //         <td>Ставка:</td>
    //         <td>ЗП:</td>
    //       </thead>
    //       <tbody>
    //         {res}
    //       </tbody>
    //     </table>
    //   </div>
    // )
}

export default App;
