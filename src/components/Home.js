import {React, useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
    const URL = "https://student-mentor-mern.herokuapp.com/api"

    const [getMentorName, setGetMentorName] = useState([])
    const [getStudentName, setGetStudentName] = useState([])

    

    //Show All Mentor
    useEffect( () => {
        const fetchData = async () => {
               const res=await axios.get(`${URL}/all-mentor`)
                 setGetMentorName(res.data.allMentor)
        }
        fetchData()
    }, [])

    //Show All Student
    useEffect( () => {
        const fetchStudentData = async () => {
               const res=await axios.get(`${URL}/all-student`)
               setGetStudentName(res.data.allStudent)

        }
        fetchStudentData()
    }, [])


    return ( 
        <div>
            <h2 className="center-align a7ffeb teal accent-1" > Mentor-Student Assign </h2>
           
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-6 mt-5">
                    <table >
                        <thead>
                        <tr>
                            <th> <Link to="/create-mentor"> <button type="button" className="btn btn-primary font-weight-bold" 
                                   >+</button> </Link></th>
                            <th>  <h2 className="headings">Mentors</h2> </th>
                            <th><Link to="/perticular-mentor"> <button type="button" className="btn btn-primary font-weight-bold" 
                                   >Get Perticular Mentor</button> </Link></th>
                        </tr>
                        </thead>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th> Mentor Name </th>
                            <th>Mentees</th>
                        </tr>
                        </thead>
                           
                            {
                                getMentorName.map((data, key) => {
                                    return (
                                           <tbody key={key}>
                                                <tr>        
                                                <td>{data._id}</td>  
                                                <td><Link to={`/assign-student/${data._id}`}> {data.mentorName}</Link> </td>  
                                                <td><Link to="/perticular-mentor" className="badge badge-info" >Show students</Link> </td>  
                                                </tr>   
                                            </tbody>                           
                                        )
                                })
                            }                        
                    </table>
                </div>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="row">
                    <table>
                        <thead>
                            <tr>
                                <th> <Link to="/create-student"> <button type="button" className="btn btn-primary font-weight-bold" 
                                   >+</button> </Link></th>
                                <th>  <h2 className="headings">Students</h2> </th>
                                <th>  <button type="button" id="assignStudents" className="btn btn-secondary" 
                                       >Assign Mentor</button></th>
                            </tr>
                        </thead>
                        {
                                getStudentName.map((data, key) => {
                                    return (
                                           <tbody key={key}>
                                                <tr>        
                                                <td>{data._id}</td>  
                                                <td><Link to={`/assign-mentor/${data._id}`}> {data.studentName} </Link> </td>  
                                                <td>{data.assignedMentor} </td>  
                                                </tr>   
                                            </tbody>                           
                                        )
                                })
                            }  

                        
                    </table>
                    </div>
                </div>
                 </div>

        </div>
    )
}
