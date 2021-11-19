import React from 'react'
import {useState} from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    
} from "@mui/material";
import { Alert } from "bootstrap";

const AlertDialog = (removeList) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        removeList();
    };
    const handleKeepClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Start a New List"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        When you start a new list, your existing list will be deleted. Would you like to start a new
                        list?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Start New list</Button>
                    <Button onClick={handleKeepClose} autoFocus>
                        Keep Existing
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AlertDialog
