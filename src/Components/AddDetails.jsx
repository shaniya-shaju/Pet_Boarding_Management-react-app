
import axios from "axios";
import React, { useState } from "react";

const AddDetails = () => {

    const [input, changeInput] = useState({
        booking_id: "",
        pet_name: "",
        owner_name: "",
        pet_type: "",
        owner_phone: "",
        owner_email: "",
        breed: "",
        age: "",
        weight: "",
        check_in_date: "",
        check_out_date: "",
        vaccination_status: "",
        kennel_number: ""
    });

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value });
    };

    const readValues = () => {
        axios.post("http://localhost:3002/add-pet", input)
            .then((response) => {
                alert(response.data.Status);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <div className="card shadow p-4">
                        <h2 className="text-center mb-4">Pet Boarding Registration</h2>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label>Booking ID</label>
                                <input type="text" className="form-control" name="booking_id" onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Pet Name</label>
                                <input type="text" className="form-control" name="pet_name" onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Owner Name</label>
                                <input type="text" className="form-control" name="owner_name" onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Pet Type</label>
                                <input type="text" className="form-control" name="pet_type" onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Owner Phone</label>
                                <input type="text" className="form-control" name="owner_phone" onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Owner Email</label>
                                <input type="email" className="form-control" name="owner_email" onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Breed</label>
                                <input type="text" className="form-control" name="breed" onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Age</label>
                                <input type="text" className="form-control" name="age" onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Weight (kg)</label>
                                <input type="text" className="form-control" name="weight" onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Check-in Date</label>
                                <input type="date" className="form-control" name="check_in_date" onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Check-out Date</label>
                                <input type="date" className="form-control" name="check_out_date" onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Vaccination Status</label>
                                <select className="form-select" name="vaccination_status" onChange={inputHandler}>
                                    <option>Select</option>
                                    <option>Vaccinated</option>
                                    <option>Not Vaccinated</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label>Kennel Number</label>
                                <input type="text" className="form-control" name="kennel_number" onChange={inputHandler}/>
                            </div>

                            <div className="col-12 text-center mt-3">
                                <button className="btn btn-primary" onClick={readValues}>
                                    Add Booking
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddDetails;