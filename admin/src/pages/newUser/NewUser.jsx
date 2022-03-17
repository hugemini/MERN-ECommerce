import "./newUser.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/apiCalls";




export default function NewUser() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }



  const handleClick = (e) => {
    e.preventDefault();

    const user = { ...inputs };
    
     addUser(user, dispatch);
  }




  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input name="username" type="text" placeholder="john" onChange={handleChange} />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input name="email" type="email" placeholder="john@gmail.com" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input name="password" type="password" placeholder="password" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Confirm Password</label>
          <input name="confirmpassword" type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>isAdmin</label>
          <select name="isAdmin" className="newUserSelect"   onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>



        <button onClick={handleClick} className="newUserButton">Create</button>
        {error && <span className="error">Something went wrong ...</span>}
      </form>
    </div>
  );
}
