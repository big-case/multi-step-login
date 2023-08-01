import React from "react";
import { TextField } from "@mui/material";


function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <TextField
        type="text"
        margin="dense"
        variant="standard"
        color="warning"
        label="Nationality"
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <TextField
        type="text"
        label="Other"
        margin="dense"
        variant="standard"
        color="warning"
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
    </div>
  );
}

export default OtherInfo;