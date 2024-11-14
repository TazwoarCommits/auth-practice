import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault() ;

        const userEmail = e.target.email.value ; 
        const userPassword = e.target.password.value ;
        console.log(userEmail,userPassword);

        signInUser(userEmail , userPassword) 
        .then (res => console.log (res.user.email))
        .catch(err => console.log(err.message))
    }
    return (
        <div onSubmit={handleLogin} className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log In</button>
                        </div>
                    </form>
                </div>
                    <p className="text-center">Don&apos;t have an Account? <Link to='/register'>Register Now</Link></p>
            </div>
        </div>
    );
};

export default Login;