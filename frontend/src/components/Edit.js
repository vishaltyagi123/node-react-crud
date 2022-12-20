import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams,useHistory } from 'react-router-dom';
import { updatedata } from './context/ContextProvider';


const Edit = () => {
    const [getAlert, setAlert] = useState([]);
    const {updata, setUPdata} = useContext(updatedata);
    const history = useHistory("");

    const [inpval, setINP] = useState({
        full_name: "",
        email: "",
        phone: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const { id } = useParams("");
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
            console.log("error ");

        } else {
            setINP(data.user)
        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();
        const {id,full_name,email,phone} = inpval;
        const server = process.env.REACT_APP_BACK_SERVER;
        const res2 = await fetch(`${server}/api/v1/user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                id,full_name,email,phone
            })
        });

        const data2 = await res2.json();
        console.log(data2.user);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            setAlert(data2);
            history.push("/")
            setUPdata(data2.user);
        }
    }

    return (
        <div className="container">
            <NavLink to="/">home2</NavLink>
            <form className="mt-4">
                <div className="row">
                <input type="hidden" value={inpval.id} name="id" />
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" value={inpval.full_name} onChange={setdata} name="full_name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="number" value={inpval.phone} onChange={setdata} name="phone" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;





