import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router'
import axios from 'axios'

function ScheduleAppointment() {
        
           const{handleSubmit,register,reset} =useForm()

           const nav=useNavigate()

          function processData(validData){
              // console.log('valid data-->',validData)
              //api request - post

              // axios.post(endpoint, data)
              // axios.post('http://localhost:3000/appointments',validData)
                axios.post('http://localhost:8080/add',validData)

              nav('/appointments')
              reset()
          }


  return (
    <div>
      <h3 className='text-center'>Schedule Appointment <i class="bi bi-bookmark-plus-fill"></i></h3>
      <form className='container' onSubmit={handleSubmit(processData)}>

        <label className='form-label'>Name :</label>
        <input type='text' className='form-control' {...register('name')}></input>

         <label className='form-label'>Topic :</label>
        <input type='text' className='form-control' {...register('topic')}></input>

         <label className='form-label'>Details :</label>
        <textarea className='form-control' {...register('details')}></textarea>

         <label className='form-label'>Date <i class="bi bi-calendar-month"></i>:</label>
        <input type='date' className='form-control' {...register('date')}></input>

         <label className='form-label'>Time <i class="bi bi-clock"></i>:</label>
        <input type='time' className='form-control' {...register('time')}></input>
        <br></br>

        <button type='submit' className='btn btn-outline-success me-2'>Schedule +</button>
        <button type='button' onClick={()=>{reset()}} className='btn btn-outline-danger'>ResetForm</button>


      </form>

    </div>
  )
}

export default ScheduleAppointment
// npx json-server db.json 