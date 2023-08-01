import React from "react";
import TextField from "@mui/material/TextField";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <TextField
        type="text"
        label="Email"
        margin="dense"
        color="warning"
        variant="standard"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <TextField
        className="input"
        type="password"
        label="Password"
        margin="dense"
        color="warning"
        variant="standard"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <TextField
        type="password"
        label="Confirm Password"
        margin="dense"
        color="warning"
        variant="standard"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;