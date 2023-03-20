import axios from "axios";

const baseURL ="http://localhost:8080";

class databaselink
{
    getAreas() //date:date
    {
        return axios.get(baseURL + '/areas');
    }

    getExercises(data)
    {
        return axios.post(baseURL + '/exercises',data)
    }

    getRoutines(data)
    {
        return axios.post(baseURL + '/routines',data)
    }

    deleteRoutine(id)
    {
        return axios.delete(baseURL + `/routines/${id}`)
    }

    addRoutine(data)
    {
        return axios.post(baseURL + '/routines/new',data)
    }
    //
    getRoutineonDate(data) //date:date
    {
        return axios.post(baseURL +'/routines',data)  //[exercise on that day by that user and ID of exercise]
    }

    updateRoutine(id,data)
    {
        return axios.put(baseURL + `/routines/${id}`,data)
    }

   
}

export default new databaselink();