import React, {useEffect, useState} from 'react';
import API from '../API';

const Get = () => {
    const [customers, setCustomers] = useState([]);


    const getCustomers = async () => {
        //ansycronously get data from DB
        const response = await API.getCustomer();
        //isolate the data object in our response
        const data = response.data;
        //set the notes state to the data from our db
        //console.log(data);
        setCustomers(data);
    };

    const removeCustomer = (_id) => {
        console.log('delete button clicked')
        API.deleteCustomer(_id).then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        getCustomers();
    }, [customers]);

    return (
        <div>
            <div>
                {customers.map((customer) => {
                    return (
                        <div key={customer._id} className="z-depth-5 note row">
                            <div className="col s10">
                            <h2>{customer.fName}</h2>
                            <h2>{customer.lName}</h2>
                            <h2>{customer.party}</h2>
                            <br></br>
                            <div>{customer.pNumber}</div>
                            <div>{customer.email}</div>
                            <div>{customer.preferences}</div>
                            </div>
                            <div className="col s2">
                                <button className="btn red white-text" onClick={() => removeCustomer(customer._id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Get;