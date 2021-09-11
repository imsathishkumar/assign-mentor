import {React , useState} from 'react'
import axios from 'axios'
import { useHistory  } from 'react-router-dom'


export default function MetorAllStudent() {
    const history  = useHistory()
    const [mentorName, setMentorName] = useState('')
    const URL = "https://student-mentor-mern.herokuapp.com/api"

const perticularMentorSubmit = async (e) => {
        e.preventDefault();
        
          await axios.get(`${URL}/perticular-mentor` , {
            mentorName
        })
        history.push('/')
    }

    return (
        <>
        <div className="container create-mentor">
            <div className="card createcard_size">
                <form onSubmit={perticularMentorSubmit}>
                    <div class="form-group">
                        <input type="text"
                            value={mentorName}
                            onChange={(e) => setMentorName(e.target.value)}
                            name='mentorName'
                            class="form-control card_input"
                            id="exampleInputEmail1"
                            placeholder="enter Mentor name"
                            aria-describedby="emailHelp" />
                    </div>
                    <div className="text-center">
                        <button type="submit"  className="btn btn-danger center-align createMentor_button" > Get Perticular Mentor Detail  </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}
