import React from "react";
import axios from "axios";
import "./user.css";
import Sidebar from "../../components/sideBar/sideBar";
import { useContext,useState } from "react";
import { Context } from "../../context/Context";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      email,
      password,
    };
    if (file) {
      const data =new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:7000/api/upload/", data);
      } catch (err) {}
    }
    try {
      await axios.put("http://localhost:7000/api/users/"+user._id, updatedUser);
    } catch (err) {}
  };
 
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          {/* <span className="settingsTitleDelete">Delete Account</span> */}
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              // src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              src={user.profilePic}
              alt=""
            />
            {/* <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label> */}
            {/* <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}
            /> */}
          </div>
          <label>Username: {user.username}</label>
          {/* <input type="text" placeholder={user.username} name="name" onChange={e=>setUsername(e.target.value)} /> */}
          <label>Email:{user.email}</label>
          {/* <input type="email" placeholder={user.email} name="email" onChange={e=>setEmail(e.target.value)}/> */}
          {/* <label>Password: </label> */}
          {/* <input type="password" placeholder="Password" name="password" onChange={e=>setPassword(e.target.value)}/> */}
          {/* <button className="settingsSubmitButton" type="submit">
            Update
          </button> */}





          <h4>Sorry! You can't edit user info right now</h4>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}