
import React,  { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import "../react-datepicker.css";
import Navbar from './navbar';
import Content from './content';
import Addnew from './addnew';
import databaselink from '../utils/databaselink';
//import 'react-calendar/dist/Calendar.css'

const Home = () => {
  const user = 1;
  const [addingNew,SetaddingNew] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [areas,setAreas] = useState([])
  const [routine,setRoutine] = useState([])
  const [stringdate,Setstringdate] = useState("")

  const deleteContent = (id,index) =>
  {
    databaselink.deleteRoutine(id)
    setRoutine((routine)=>routine.filter((exs) => exs.id !== id))
    console.log(`delete ${id}`);
  }
  

  useEffect( () =>{
    areasGetter();
    submit();
    console.log("YES")
  },[])
  const submit = () =>{
    var date = startDate.getDate() + "/"+ parseInt((startDate.getMonth()+1)) +"/"+ (startDate.getFullYear())
    Setstringdate(date)
    var data ={
      id:user,
      date:date
    }
    databaselink.getRoutineonDate(data).then(response =>
      {
        setRoutine(response.data);
      }).catch(e => {
        console.log(e);
      });
  }

  const update = (data) =>{
    databaselink.getRoutineonDate(data).then(response =>
      {
        setRoutine(response.data);
      }).catch(e => {
        console.log(e);
      });
  }


  
  const areasGetter = () =>
  {
    databaselink.getAreas().then(response =>
      {
        setAreas(response.data);
      }).catch(e => {
        console.log(e);
      });
  }

  const addNew = () =>{
    SetaddingNew(true)
    }
  

  return (
    <div>
      <Navbar/>
      <div class="container">
        <div class="d-flex p-2">
          <div class = "d-flex flex-row">
              
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} style={{outline: "none"}} form="external-form" />
           
              <div class="ps-4">
              <form id="external-form">
                <button type="button" class="btn btn-primary" onClick={submit}>Go</button>
              </form>
              </div>
          </div>
        </div> 
          {routine.length > 0 ?(<div>{routine.map((exr,index) =><Content exr = {exr} deleteContent = {deleteContent} index={index} submit={update}/>)}</div>):(<div>No routines today</div>)}
          
          {addingNew? (<Addnew SetaddingNew = {SetaddingNew} areas = {areas} datenow={stringdate} user = {user} submit={update}/>) :(
          <div class = "d-flex justify-content-end flex-row ms-auto p-4">
            <button type="button" onClick={addNew} class="btn btn-primary">Add</button>
          </div>
          
          )
        }
      </div>
      
    </div>
  )
}

export default Home