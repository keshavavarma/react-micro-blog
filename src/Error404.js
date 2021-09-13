import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-404">
      <h2>Get Lost!!!</h2>
      <br />
      <h3>You are not supposed to be here.</h3>
      <br />
      <Link to="/">Go Home Now</Link>
    </div>
  );
};

export default Error404;
