import { signInWithGoogle } from '../../firebase.js';

const Login = () => {
    return (
        <div className="dashboard">
            <button onClick={signInWithGoogle}>
                Sign in with google
            </button>
        </div>
    )
}

export default Login;
