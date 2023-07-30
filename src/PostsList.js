import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PostEdit from "./PostEdit";
import DeleteModal from "./DeleteModal";

export default function PostsList(props) {
    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>

            {props.posts.map((post) => {
                return (
                    <ListItem alignItems="flex-start" key={post.id}>
                        <ListItemText
                            primary={post.title}
                            secondary={
                                <React.Fragment>
                                    {post.body}
                                </React.Fragment>
                            }
                        />
                        <PostEdit postId={post.id} postTitle={post.title} postBody={post.body}
                                  editPost={props.editPost}/>
                        <DeleteModal deletePost={props.deletePost} postId={post.id}/>
                    </ListItem>
                )
                    ;
            })}
        </List>
    );
}