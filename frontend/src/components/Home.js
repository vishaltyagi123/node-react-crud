import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider';


const Home = () => {
    const [getUserData, setUserData] = useState([]);
    const [getAlert, setAlert] = useState([]);

    const getdata = async () => {
        try{
            const server = process.env.REACT_APP_BACK_SERVER;
            const res = await fetch(`${server}/api/v1/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            console.log("vishal" + data.status);
            if(!data) console.log("User Not Found!");
            setUserData(data.users);
        } catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    const deleteuser = async (id) => {
        try{
            const server = process.env.REACT_APP_BACK_SERVER;
            const res2 = await fetch(`${server}/api/v1/user`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    id
                })
            });

            const deletedata = await res2.json();
            if (res2.status === 422 || !deletedata) {
                console.log("error");
            } else {
                setAlert(deletedata);
                getdata();
            }
        } catch (e){
            console.log(e);
        }
    }

    return (
        <>
            {
                getAlert.status ?
                    <>
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{getAlert.message}</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }


            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
                    </div>

                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">email</th>
                                <th scope="col">Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getUserData.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.full_name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.phone}</td>
                                                <td className="d-flex justify-content-between">
                                                    <NavLink to={`view/${element.id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element.id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                    <button className="btn btn-danger" onClick={() => deleteuser(element.id)}><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}

export default Home

















