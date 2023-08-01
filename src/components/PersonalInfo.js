import React from "react";
import TextField from "@mui/material/TextField";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <TextField
        type="text"
        label="First Name"
        margin="dense"
        color="warning"
        variant="standard"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <TextField
        type="text"
        label="Last Name"
        margin="dense"
        variant="standard"
        color="warning"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <TextField
        type="text"
        label="Username"
        color="warning"
        margin="dense"
        variant="standard"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;