import {useState} from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PostEdit(props) {

    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState(props.postTitle);
    const [body, setBody] = useState(props.postBody);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDelete = (e) => {
        e.preventDefault();
        props.editPost(props.postId, title, body);
        handleClose()
    };

    return (
        <div>
            <Button onClick={handleOpen}>Update</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update post
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Update your post:
                    </Typography>
                    <TextField id="modal-post-title" label="Title" variant="outlined" value={title}
                               onChange={(e) => setTitle(e.target.value)}/>
                    <TextField id="modal-post-body" label="Body" variant="outlined" value={body}
                               onChange={(e) => setBody(e.target.value)}/>
                    <Button onClick={handleDelete} autoFocus>
                        Update
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}