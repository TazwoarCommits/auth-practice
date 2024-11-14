import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {

    const {createUser} = useContext(AuthContext) ; 
    
    const handleRegister = e => {
        e.preventDefault();
        const userName = e.target.name.value ; 
        const userEmail = e.target.email.value ; 
        const userPassword = e.target.password.value ; 

        console.log(userName, userEmail , userPassword);
      
        createUser(userEmail , userPassword)
         .then(res => console.log(res.user))
         .catch(err => console.log(err.message))


    }

    return (
        <div onSubmit={handleRegister} className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="username" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                </div>
                <p className="text-center">Already have an Account? <Link to='/login'>login now</Link></p>
            </div>
        </div>
    );
};

export default Register;