import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function BasicModal({ open, handleClose }) {
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
          You already got all the attributes of the character on your own. Just
          put them together!
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, fontStyle: "italic", textAlign: "center" }}
          className="myriad-text"
        >
          <p>
            "Without your help, there's no way Kasuga would have done so much.
            Don't you think?"
          </p>

          <p>
            "I didn't give the kid superpowers. He was already strong enough."
          </p>
        </Typography>
      </Box>
    </Modal>
  );
}
