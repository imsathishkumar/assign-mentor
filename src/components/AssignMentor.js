import {React , useState} from 'react'
import axios from 'axios'
import { useHistory  } from 'react-router-dom'
import { useParams } from 'react-router'


export default function AssignMentor() {
    const history  = useHistory()
    const [assignedStudent, setAssignedStudent] = useState('')
    const URL = "https://student-mentor-mern.herokuapp.com/api"
   
    const {id} = useParams();
    //Assign Students
    const assignMentorSubmit = async (e) => {
        e.preventDefault();
        
       await axios.put(`${URL}/assign-student/${id}` , {
            assignedStudent
        })
        history.push('/')
    }
    return (
        <>
            <div className="container create-mentor">
                <div className="card createcard_size">
                    <form onSubmit={assignMentorSubmit}>
                        <div class="form-group">
                            <input type="text"
                                value={assignedStudent}
                                onChange={(e) => setAssignedStudent(e.target.value)}
                                name='assignedStudent'
                                class="form-control card_input"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                        <div className="text-center">
                            <button type="submit"  className="btn btn-danger center-align createMentor_button" > Assign Student </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
