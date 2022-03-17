import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./user.css";
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { updateUser } from "../../redux/apiCalls";

export default function User() {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const user = useSelector(
    state => state.user.users.find((user) => user._id === userId));
  
  const handleClick = (e) => {
    e.preventDefault();
    //todo

    if (file != null) {

        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const user = { ...inputs, img: downloadURL};
                    updateUser(userId, user, dispatch);
                });
            }
        );
    }
    else {
        const user = { ...inputs };
        updateUser(userId, user, dispatch);
    }


}

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  onChange={handleChange}
                  name="username"
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  onChange={handleChange}
                  name="email"
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>IsAdmin</label>
                <select name="isAdmin" id="isAdmin" onChange={handleChange} >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>



            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={user.img}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
              </div>
              <button className="userUpdateButton" onClick={handleClick} >Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
