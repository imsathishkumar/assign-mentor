import {React , useState} from 'react'
import axios from 'axios'
import { useHistory  } from 'react-router-dom'
import { useParams } from 'react-router'


export default function AssignStudent() {
    const history  = useHistory()
    const [assignedMentor, setAssignedMentor] = useState('')
    const URL = "https://student-mentor-mern.herokuapp.com/api"
   
    const {id} = useParams();
    //Assign Mentor
    const assignStudentSubmit = async (e) => {
        e.preventDefault();
        
       await axios.put(`${URL}/assign-mentor/${id}` , {
            assignedMentor
        })
        history.push('/')
    }
    return (
        <>
            <div className="container create-mentor">
                <div className="card createcard_size">
                    <form onSubmit={assignStudentSubmit}>
                        <div class="form-group">
                            <input type="text"
                                value={assignedMentor}
                                onChange={(e) => setAssignedMentor(e.target.value)}
                                name='assignedMentor'
                                class="form-control card_input"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                        <div className="text-center">
                            <button type="submit"  className="btn btn-danger center-align createMentor_button" > Assign Mentor </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
