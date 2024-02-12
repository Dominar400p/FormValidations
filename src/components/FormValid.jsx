import { useState } from "react"

function FormValid() {

    let [state, setstate] = useState({
        name: "",
        email: "",
        password: ""
    })

    let [errors, seterrors] = useState({
        nameErr: "",
        emailErr: "",
        passwordErr: ""
    })

    let handleChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    let handleSubmit = (e) => {
        e.preventDefault();

        //Name Validation
        if (state.name === "") {
            seterrors((errors) => ({ ...errors, nameErr: "Name Is Mandatory" }))
        }
        else {
            seterrors((errors) => ({ ...errors, nameErr: "" }))
        }

        //Email Validation
        if (state.email.trim() === '') {
            seterrors((errors) => ({ ...errors, emailErr: "Enter Email Address" }))
        }
        else if (!/[^\s]*@[a-z0-9.-]*/i.test(state.email)) {
            seterrors((errors) => ({ ...errors, emailErr: "Email Is Invalid" }))
        }
        else {
            seterrors((errors) => ({ ...errors, emailErr: "" }))
        }

        //Password Validation
        if (state.password === "") {
            seterrors((errors) => ({ ...errors, passwordErr: "Password Is Mandatory" }))
        }
        else if (state.password.length <= 5) {
            seterrors((errors) => ({ ...errors, passwordErr: "Password Must Be Greater Than 5 Characters" }))
        }
        else {
            seterrors((errors) => ({ ...errors, passwordErr: "" }))
        }

        //Checking All Fields
        if (errors.emailErr === "" && errors.nameErr === "" && errors.passwordErr === "") {
            console.log(state)
        }
        else {
            console.log("Something Went Wrong")
        }
    }
    return (
        <>
            <div className="card col-md-5 mx-auto mt-5">
                <div className="card-header text-center bg-success text-white">
                    <h1>Form</h1>
                </div>
                <div className="card-body">
                    <form>
                        <div>
                            <label>Name</label>
                            <input type="text" onChange={handleChange} value={state.name} name="name" className="form-control" placeholder="enter name"></input>
                            {errors.nameErr ? <span style={{ color: "red" }}>{errors.nameErr}</span> : null}
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" onChange={handleChange} value={state.email} name="email" className="form-control" placeholder="enter email"></input>
                            {errors.emailErr ? <span style={{ color: "red" }}>{errors.emailErr}</span> : null}
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" onChange={handleChange} value={state.password} name="password" className="form-control" placeholder="enter password"></input>
                            {errors.passwordErr ? <span style={{ color: "red" }}>{errors.passwordErr}</span> : null}
                        </div>
                        <div className="mt-3">
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-sm">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default FormValid