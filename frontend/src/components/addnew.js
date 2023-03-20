import React from 'react'
import { useState } from 'react';
import databaselink from '../utils/databaselink';

const Addnew = ({SetaddingNew,areas,submit,datenow,user}) => {
    const [areaSelected,SetareaSelected] = useState(false);
    const [exs,setExs] = useState([])
    
    const [sideChecked,SetsideChecked] = useState(false);
    const [exid,Setexid] = useState(0);
    const [isbar,Setisbar] = useState(false);
    const [wt,Setwt] = useState(0);
    const [reps,Setreps] = useState(0);
    const [wtL,SetwtL] = useState(0);
    const [wtR,SetwtR] = useState(0);

    const cancel = () =>
    {
        SetaddingNew(false)
    }

    const AreaSelect = (event) =>{
        if(event.target.value != 0)
        {
            var data = {"id":Number(event.target.value)}
            databaselink.getExercises(data).then(response =>
                {
                  setExs(response.data);
                }).catch(e => {
                  console.log(e);
                });
            SetareaSelected(true);
        }
        if(event.target.value == 0)
        {
            setExs([]);
            Setexid(0);
            SetareaSelected(false);
        }
    }

    const newEx = () =>{
       if(areaSelected && exid !== 0)
       {
        if(sideChecked)
        {
            Setwt(0) 
        }
        else
        {
            SetwtL(0)
            SetwtR(0)
        }
        const req = {     
            "date": datenow,
            "usrid":user,//change
            "ex_id":exid,
            "part_of_set":false,
            "isbar":isbar,
            "wt_l":wtL,
            "wt_r":wtR,
            "wt":wt,
            "twosides":sideChecked,
            "reps":reps
        }
        databaselink.addRoutine(req).then(response => {
            var data ={
                id:user,
                date:datenow
              }
            submit(data)
          })
          SetaddingNew(false)
       }
       else{console.log("INVALID INPUT")}
        
    }
    const sideClick = (event) =>
    {
        if(event.target.checked)
        {
            SetsideChecked(true)
            SetwtR(wt)
            Setwt(0)
        }
        else
        {
            SetsideChecked(false)
            Setwt(wtR)
            SetwtR(0)
            Setisbar(false)
        }
    }

  return (
    <div class="container-fluid bg-light border rounded-3">
        <div class="d-flex flex-column">
            <div class="d-flex flex-row  justify-content-start p-2">
                <div class="col-4">
                    <select class="form-select" aria-label="Default select example" onChange={AreaSelect}>
                        <option value="0" selected>Select Exercise Area</option>
                        {areas.map((area) => {
                           return( <option value={area.id}>{area.name}</option>)
                        })}
                    </select>
                </div>
                {areaSelected? (
                <div class="col-4 ps-2">
                    <select class="form-select" aria-label="Default select example" onChange={(event) => Setexid(Number(event.target.value))}>
                    <option value="0" selected>Select Exercise</option>
                    {exs.map((ex) => {
                           return( <option value={ex.id}>{ex.name}</option>)
                        })}
                    </select>
                </div >):(<div></div>)}
                <div class="ms-auto d-flex flex-row align-items-end">
                        <label for="inputRep" class="col-auto col-form-label">Reps:</label>
                        <div class="col-4 ps-4">
                            <input type="number" class="form-control" id="inputRep"  onChange={(event) => Setreps(Number(event.target.value))} />
                        </div>
                </div>
        
          </div>

            <div class="d-flex flex-row justify-content-start p-2">
                <div class="d-flex col-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" onChange={sideClick} id="TwoSides" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Two sides
                        </label>
                    </div>
                    {sideChecked? (<div class="form-check ms-auto">
                    <input class="form-check-input" type="checkbox" value="" id="isBar" onChange={(event) => Setisbar(event.target.checked)} />
                    <label class="form-check-label" for="flexCheckChecked">
                        Bar
                    </label>
                </div>):(<div></div>)}
                    
                </div>
                {sideChecked?( <div class="ms-auto d-flex flex-row align-items-end">
                    <label for="inputLeft" class="col-auto col-form-label">Left:</label>
                        <div class="col-4 ps-4">
                            <input type="number" class="form-control" id="inputLeft" onChange={(event) => SetwtL(Number(event.target.value))} />
                        </div>
                </div>):(<div></div>)}
               
                {sideChecked?( <div class="d-flex flex-row align-items-end">
                    <label for="inputRight" class="col-auto col-form-label">Right:</label>
                        <div class="col-4 ps-4">
                            <input type="number" class="form-control" id="inputRight" onChange={(event) => SetwtR(Number(event.target.value))} />
                        </div>
                </div>):( <div class="ms-auto d-flex flex-row align-items-end">
                    <label for="inputWt" class="col-auto col-form-label">Weight:</label>
                        <div class="col-4 ps-4">
                            <input type="number" class="form-control" id="inputWt" onChange={(event) => Setwt(Number(event.target.value))} />
                        </div>
                </div>)}
               
            </div>
          <div class = "d-flex justify-content-end flex-row ms-auto p-4">
            <button type="button" onClick={newEx} class="btn btn-primary px-2">Done</button>
            <button type="button" onClick={cancel} class="btn btn-secondary px-2">Cancel</button>
          </div>
        </div>
    </div>
  )
}

export default Addnew