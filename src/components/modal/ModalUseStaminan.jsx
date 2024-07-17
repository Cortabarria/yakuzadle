import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "black", // Set background color to black
  color: "white", // Set text color to white
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function WantToUseModal({ open, handleClose, handleContinue }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          className="myriad-text"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Do you want to use the Staminan Royale?
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, textAlign: "center" }}
          className="myriad-text"
        >
          <p>
            If you use it, it will consume one of your lives but give you an
            attribute you still don't have. Don't be afraid to ask for help!
          </p>
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, fontStyle: "italic", textAlign: "center" }}
          className="myriad-text"
        >
          <p>[Would you tell me how to get to the station?]</p>

          <p>Oh, shit... It's English! 🤯</p>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 3 }}>
          <Button variant="contained" color="primary" onClick={handleContinue}>
            Continue
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
