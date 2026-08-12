import {useForm} from 'react-hook-form'
import { useEffect } from 'react'
import {useParams,useNavigate} from 'react-router'
import axios from 'axios'

function UpdateAppointment() {

   const{handleSubmit,register,setValue} =useForm()

   const params=useParams()
   console.log('url params-->',params)

   const nav=useNavigate()

   async function retriveAppointment() {
    // const res=await axios.get(`http://localhost:3000/appointments/${params.id}/`)
          const res=await axios.get(`http://localhost:8080/getById/${params.id}`)

    console.log(res.data)

    //set input value....get previousdata from list for update
          setValue('name',res.data.name)
          setValue('topic',res.data.topic)
          setValue('details',res.data.details)
          setValue('date',res.data.date)
          setValue('time',res.data.time)

   }

   useEffect(()=>{retriveAppointment()},[])

      async function processData(validData){
          const res=await axios.put(`http://localhost:8080/update/${params.id}`,validData) //only I change the port and  remove appointment and i use update
          //navigate to appointments
          nav('/appointments')
    }



  return (
    <div  className='container'>

       <h3 className='text-center'>Update Appointment</h3>
      <form onSubmit={handleSubmit(processData)}>

        <label className='form-label'>Name :</label>
        <input type='text' className='form-control' {...register('name')}></input>

         <label className='form-label'>Topic :</label>
        <input type='text' className='form-control' {...register('topic')}></input>

         <label className='form-label'>Details :</label>
        <textarea className='form-control' {...register('details')}></textarea>

         <label className='form-label'>Date <i class="bi bi-calendar-month"></i> :</label>
        <input type='date' className='form-control' {...register('date')}></input>

         <label className='form-label'>Time <i class="bi bi-clock"></i>:</label>
        <input type='time' className='form-control' {...register('time')}></input>
        <br></br>

        <button type='submit' className='btn btn-outline-success me-2'>Update</button>


      </form>

    </div>
  )
}

export default UpdateAppointment