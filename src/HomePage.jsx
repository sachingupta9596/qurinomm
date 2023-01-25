import "./HomePage.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    const user = {
      username,
      password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
    window.location.reload();
  }

  return (
    <>
      <div className="LoginContainer">
        <h1>You are not logged in . Please login first</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="email"
            id="username"
            name="username"
            placeholder="your Email "
          />

          <label htmlFor="lname">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Your password"
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
