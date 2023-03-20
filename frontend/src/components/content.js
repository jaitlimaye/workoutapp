import React,  { useEffect, useState } from 'react'
import databaselink from '../utils/databaselink';

const Content = ({exr,deleteContent,index,submit}) => {
  const [editting,Seteditting] = useState(false)
  const [reps,Setreps] = useState(0);
  const [wtL,SetwtL] = useState(0);
  const [wtR,SetwtR] = useState(0);
  const editHandler = () =>
  {
    Seteditting(true)
   
    if(exr.twosides)
    {
      SetwtL(exr.wt_l)
      SetwtR(exr.wt_r)
    }
    else{
      SetwtR(exr.wt)
    }
   
    Setreps(exr.reps)
  }
  
  
  const deleteHandler = () =>
  {
    deleteContent(exr.id,index)
  }
  const cancelHandler = () =>
  {
    Seteditting(false)
  }

  const submitHandler = () =>
  {
    let wt =0;
    if(!exr.twosides)
    {
      SetwtL(0);
      wt = wtR;
      SetwtR(0);
    }
    
    const req = 
    {
      "date": exr.date,
      "usrid":exr.usrid,
      "ex_id":exr.ex_id,
      "part_of_set":exr.part_of_set,
      "isbar":exr.isbar,
      "wt_l":wtL,
      "wt_r":wtR,
      "wt":wt,
      "twosides":exr.twosides,
      "reps":reps
    }
    databaselink.updateRoutine(exr.id,req).then(response => {
      var data ={
          id:exr.usrid,
          date:exr.date
        }
      submit(data)
    })
    Seteditting(false)
  }

  return (
    <div class="container-fluid bg-light border rounded-3">
      {editting? 
      (<div class="d-flex">
        <div class="p-3"><h4>{exr.ex_name}</h4></div>
          <div class="ms-auto">
            <div class="d-flex">
            {exr.twosides?(<div class="p-3">
            {exr.isbar?
            ( <div class="px-1">
            <div class="d-flex flex-row">
              <div class="ms-auto col-2">
                <input type="number" value={wtL} class="form-control" id="inputLeft" onChange={(event) => SetwtL(Number(event.target.value))} />
              </div>
              <div class="col-1 align-items-center"><h4> + </h4></div>
              <div class="col-2">
                <input type="number" value={wtR} class="form-control" id="inputRight" onChange={(event) => SetwtR(Number(event.target.value))} />
              </div>
              <div class="col-2">  <h4>+ bar</h4> </div>
            </div>
          </div>):
            (
              <div class="px-1">
                <div class="d-flex flex-row">
                  <div class="ms-auto col-2">
                    <input type="number" value={wtL} class="form-control" id="inputLeft" onChange={(event) => SetwtL(Number(event.target.value))} />
                  </div>
                  <div class="col-1 align-items-center"><h4> + </h4></div>
                  <div class="col-2">
                    <input type="number" value={wtR} class="form-control" id="inputRight" onChange={(event) => SetwtR(Number(event.target.value))} />
                  </div>
                  <div class="col-2">  <h4>lbs</h4> </div>
                </div>
              </div>
           
            )}
            </div>):
            (<div class="p-3">
                <div class="d-flex flex-row">
                  <div class="ms-auto col-3">
                    <input type="number" value={wtR} class="form-control" id="inputRight" onChange={(event) => SetwtR(Number(event.target.value))} />
                  </div>
                  <div class="col-2">  <h4>lbs</h4> </div>
                </div>
              </div>)} 
            <div class="p-3">
              <div class="d-flex flex-row">
                <div class="ms-auto col-3">
                  <input type="number" value={reps} class="form-control" id="inputRep"  onChange={(event) => Setreps(Number(event.target.value))} />
                </div>
                <div class="col-2">   
                <h4> reps</h4>
                </div>
              </div>
            </div>
          <div class="d-flex flex-column p-2">
            <button type="button" class="btn btn-link" onClick={submitHandler} style={{"color": "#00FF00"}}><i class="bi bi-hand-thumbs-up"></i></button>
            <button type="button" class="btn btn-link" onClick={cancelHandler} style={{"color": "#FF0000"}}><i class="bi bi-hand-thumbs-down"></i></button>
        </div>
      </div>
      </div>
    </div>):
      (<div class="d-flex">
        <div class="p-3"><h4>{exr.ex_name}</h4></div>
        <div class="ms-auto">
          <div class="d-flex">
            {exr.twosides?(<div class="p-3">{exr.isbar?(<h4>{exr.wt_l}+{exr.wt_r}+bar</h4>):(<h4>{exr.wt_l}+{exr.wt_r} lbs</h4>)}</div>):
            (<div class="p-3"><h4>{exr.wt} lbs</h4></div>)} 
            <div class="p-3"><h4>{exr.reps} reps</h4></div>
            <div class="d-flex flex-column p-2">
              <button type="button" class="btn btn-link" onClick={editHandler} style={{"color": "#989396"}}><i class="bi bi-pencil-square"></i></button>
              <button type="button" class="btn btn-link" onClick={deleteHandler} style={{"color": "#989396"}}><i class="bi bi-trash3"></i></button>
          </div>
        </div>
        </div>
      </div>)
}
</div>
          
  
  )
}

export default Content