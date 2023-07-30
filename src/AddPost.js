import {useState} from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";


export default function AddPost(props) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addPost(title, body);
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField id="title-input" label="Title" variant="outlined" name="title"
                       type="text"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}/>
            <TextField id="value-input" label="Body" variant="outlined"  name="body"
                       value={body}
                       onChange={(e) => setBody(e.target.value)}/>
            <Button variant="outlined" type="submit" className="btn-submit">
                Add Post
            </Button>
        </form>
    )
}