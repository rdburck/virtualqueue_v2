import API from "../API";
import React, {useRef, useState} from "react";

const Post = () => {
	//useRef alwaus returns a current objet with all of our info inside of it.
	const fNameInput = useRef();
    const lNameInput = useRef();
    const partyInput = useRef();
    const phoneNumberInput = useRef();
    const emailInput = useRef();
    const preferenceInput = useRef();


	const [alert, setAlert] = useState()
	
	const clearAlert = () => {
		setTimeout(() => {
			setAlert(null);
		}, 5000);
	};

	const postNew = () => {
		const fName = fNameInput.current.value;
        const lName = lNameInput.current.value;
        const party = partyInput.current.value;
        const phoneNumber = phoneNumberInput.current.value;
        const email = emailInput.current.value;
        const preference = preferenceInput.current.value;


		if(!fName || !lName || !party || !phoneNumber || !email || !preference){
			setAlert(<div className="error">Please Enter A Customer</div>)
			clearAlert();
			return;
		} else {
			setAlert(<div className="success">Customer Added to Waitlist</div>)
			clearAlert();
			API.postCustomer({
                fistName: fName,
	            lastName: lName,
	            partySize: party,
	            phoneNumber: phoneNumber,
	            email: email,
	            preferences: preference
            })
				.then((data) => {
					//console.log(data);
				})
				.catch((err) => console.log(err));
		}
		
	};

	return (
		<div>
		<input ref={fNameInput} placeholder="first name"></input>
        <input ref={lNameInput} placeholder="last name"></input>
        <input ref={partyInput} placeholder="party size"></input>
        <input ref={phoneNumberInput} placeholder="phone number"></input>
        <input ref={emailInput} placeholder="email"></input>
        <input ref={preferenceInput} placeholder="preferences"></input>
		<div>{alert}</div>
		<button className="btn blue" onClick={postNew}>
			Click To Add Customer
		</button>

		</div>
	);
};

export default Post;