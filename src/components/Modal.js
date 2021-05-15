import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Box,
} from "@material-ui/core";

const Modal = (props) => {
  const { open, handleClose, handleAction, actionButtonText, title, subtitle, content } = props;
  const classes = useStyles();
  return ReactDOM.createPortal(
    <div onClick={handleClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <Dialog
          open={open}
          fullWidth
          className={classes.root}
          onClose={handleClose}
          scroll="paper"
        >
          <div className={classes.singlePannel}>
            <DialogTitle >
              <Box fontSize="h3.fontSize" fontWeight="bold">
                {title}
              </Box>
              <Box fontSize="h5.fontSize">{subtitle}</Box>
            </DialogTitle>
            <DialogContent className={classes.modalContent}>
              {content}
            </DialogContent>
            <DialogActions className={classes.modalActions}>
              <Button
                variant="outlined"
                size="medium"
                className={classes.cancelButton}
                onClick={handleClose}
              >
                <Box>Cancel</Box>
              </Button>
              <Button
                onClick={() => { 
                  handleAction() 
                  handleClose()
                }}
                variant="contained"
                size="medium"
                color={actionButtonText === "Save" ? "primary" : "secondary"}
              >
                <Box>{actionButtonText}</Box>
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

const useStyles = makeStyles((theme) => ({
  singlePannel: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  modalContent: {
    height: "70%",
    overflowY: "auto",
  },
  modalActions: {
    padding: "2rem"
  },
  cancelButton: {
    marginRight: "auto",
  },
}));

export default Modal;
