import {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router'

function ListAppointment() {
//useState for data storing 
  const[appointments,setAppointments] = useState([])

  async function getAppointments() {
    // const res=await axios.get('http://localhost:3000/appointments')
        const res=await axios.get('http://localhost:8080/get')

    console.log('-->',res.data)

    //reset state
    setAppointments(res.data)
  }

useEffect(()=>{getAppointments()},[])

//to delete record
async function  delAppointment(aId) {
  // const res=await axios.delete(`http://localhost:3000/appointments/${aId}`)
    const res=await axios.delete(`http://localhost:8080/delete/${aId}`)

  alert('Deleted..!')
  await getAppointments()


  
}

  return (
    <div className='container'>
      <h3 className='text-center'><i class="bi bi-card-checklist"></i> ListAppointment</h3>

      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Topic</th>
            <th>Details</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            appointments.map(appointment => <tr>
                                                  <td>{appointment.id}</td>
                                                  <td>{appointment.name}</td>
                                                  <td>{appointment.topic}</td>
                                                  <td>{appointment.details}</td>
                                                  <td>{appointment.date}</td>
                                                  <td>{appointment.time}</td>

                                                  <td>
                                                  <Link className='btn btn-secondary btn-sm me-2 ' to={`/appointments/update/${appointment.id}`}>Update<i class="bi bi-pencil-square"></i></Link>
                                                  <button  className='btn btn-danger btn-sm' onClick={()=>{delAppointment(appointment.id)}} >Delete<i class="bi bi-trash3"></i></button>
                                                  </td>
                                         </tr>
            
            )

          }
        </tbody>

      </table>
    </div>
  )
}

export default ListAppointment