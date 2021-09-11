import {React , useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


export default function CreateStudent() {
    const history  = useHistory()
    const [studentName, setStudentName] = useState('')
    const URL = "https://student-mentor-mern.herokuapp.com/api"
   
    //Create A Student
    const studentSubmit = async(e) => {
        e.preventDefault();
        await axios.post(`${URL}/create-student` , {
            studentName
        })
        history.push('/')
    }
    return (
        <>
             <div className="container create-mentor">
                <div className="card createcard_size">
                    <form onSubmit={studentSubmit}>
                        <div class="form-group">
                            <input type="text"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                name='mentorName'
                                class="form-control card_input"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                        <div className="text-center">
                            <button type="submit"  className="btn btn-danger center-align createMentor_button" > Create Student </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
