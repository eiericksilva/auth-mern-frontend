import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <form>
      <h1>SignUp</h1>
      <div className="container">
        <input type="text" placeholder="email" />
        <div>
          <input type="password" name="password" placeholder="password" />
          <input
            type="password"
            name="password"
            placeholder="confirm your password"
          />
        </div>
        <Link to="/">To to Sign In</Link>
      </div>
    </form>
  );
};

export default SignUp;
