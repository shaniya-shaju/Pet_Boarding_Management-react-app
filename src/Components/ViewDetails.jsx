import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewDetails = () => {

    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:3002/view-pet")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>

       <NavBar />
        <div className="container mt-4">

            <h2 className="text-center mb-4">Pet Boarding Details</h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped table-hover">

                    <thead className="table-dark">
                        <tr>
                            <th>Booking ID</th>
                            <th>Pet Name</th>
                            <th>Owner Name</th>
                            <th>Pet Type</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Breed</th>
                            <th>Age</th>
                            <th>Weight</th>
                            <th>Check-in</th>
                            <th>Check-out</th>
                            <th>Vaccination</th>
                            <th>Kennel No.</th>
                        </tr>
                    </thead>

                    <tbody>

                        {data.map((value) => (

                            <tr key={value._id}>
                                <td>{value.booking_id}</td>
                                <td>{value.pet_name}</td>
                                <td>{value.owner_name}</td>
                                <td>{value.pet_type}</td>
                                <td>{value.owner_phone}</td>
                                <td>{value.owner_email}</td>
                                <td>{value.breed}</td>
                                <td>{value.age}</td>
                                <td>{value.weight}</td>
                                <td>{value.check_in_date}</td>
                                <td>{value.check_out_date}</td>
                                <td>{value.vaccination_status}</td>
                                <td>{value.kennel_number}</td>
                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
        </div>
    );
};

export default ViewDetails;