import React from 'react'

const Form = () => {
    return (
        <div class="row">
            <form class="col s12">
                <div class="row">
                        <div class="input-field col s6">
                            <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                                <label for="first_name"></label>
                        </div>
                        <div class="input-field col s6">
                            <input id="last_name" type="text" class="validate"/>
                                <label for="last_name"></label>
                        </div>
                </div>
                <div class="row">
                        <div class="input-field col s12">
                            <input placeholder="phone number"id="phonenumber" type="number" class="validate"/>
                                <label for="phonenumber"></label>
                        </div>
                </div>
                <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate"/>
                                <label for="email">Email</label>
                        </div>
                </div>
            </form>
        </div>
    )
}

export default Form;
