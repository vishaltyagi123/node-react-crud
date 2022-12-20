import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { NavLink , useParams} from 'react-router-dom'


const Navbaar = () => {
    const { getUser, setUser } = useState([]);
    const [inpval, setINP] = useState({
        search: "",
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

    const {search} = useParams();
    const searchData = async () => {
        const server = process.env.REACT_APP_BACK_SERVER;
        axios.get(`${server}/api/v1/search`, {
            params: {
              search: search
            }
        }).then((response) => {
            console.log(response);
            setUser(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">CRUD APP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" value={inpval.search} onChange={setdata} name="search" type="text" placeholder="Search" aria-label="Search" />
                            <button className ="btn btn-outline-success" onClick={searchData}  >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
