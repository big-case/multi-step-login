import OtherInfo from "./OtherInfo";
import SignUpInfo from "./SignUpInfo";
import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

function Form() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const handleOpenSnackbar = () => {
    setOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <Button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </Button>
          <Button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                handleOpenSnackbar();
                console.log(formData);
                return (
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    message="Submitted"
                  />
                )
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Form;