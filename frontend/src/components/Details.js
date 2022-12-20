import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useHistory } from 'react-router-dom';


const Details = () => {
    const [getUserData, setUserData] = useState([]);
    const [getAlert, setAlert]       = useState([]);
    const { id } = useParams("");
    const history = useHistory();

    const getdata = async () => {
        const server = process.env.REACT_APP_BACK_SERVER;
        const res = await fetch(`${server}/api/v1/user/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        if (res.status === 422 || !data) {
        } else {
            setUserData(data.user);
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {
        const server = process.env.REACT_APP_BACK_SERVER;
        const res2   = await fetch(`${server}/api/v1/user`, {
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
            history.push("/");
        }
    }

    return (
        <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome Harsh Pathak</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                        <NavLink to={`/edit/${getUserData.id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={() => deleteuser(getUserData.id)}><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >{getUserData.full_name}</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>{getUserData.email}</span></p>
                            <p className="mt-3"><WorkIcon />Occuption: <span>{getUserData.work}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">
                            <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 {getUserData.phone}</span></p>
                            <p className="mt-3">Description: <span>{getUserData.desc}</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Details
