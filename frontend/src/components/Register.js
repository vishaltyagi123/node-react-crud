import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';
import axios from 'axios';

const Register = () => {
    const { udata, setUdata } = useContext(adddata);
    const { getAlert, setAlert } = useState([]);
    const history = useHistory();

    const [inpval, setINP] = useState({
        full_name: "",
        email: "",
        phone: "",
    })

    const setdata = (e) => {
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();
        const { full_name, email, phone } = inpval;
        const server = process.env.REACT_APP_BACK_SERVER;
        axios.post(`${server}/api/v1/user/create`, {
            full_name: full_name,
            email: email,
            phone: phone
        }).then((response) => {
            console.log(response);
            history.push("/");
            // return redirect('/');
            setUdata(response);
        }).catch((error) =>  {
            console.log(error);
        });
    }

    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" value={inpval.full_name} onChange={setdata} name="full_name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" required className="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="number" value={inpval.phone} onChange={setdata} name="phone" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;
