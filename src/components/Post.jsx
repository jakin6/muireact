import React from 'react'
import {Box,Card,CardHeader,
    Avatar,IconButton,CardMedia,CardContent,
    Typography,CardActions,Checkbox} from '@mui/material'
import {Favorite, FavoriteBorder, MoreVert} from "@mui/icons-material"
import ShareIcon from '@mui/icons-material/Share';
const Post = () => {
  return (
    <Box flex={4} p={2}>
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox  icon={<FavoriteBorder />} 
          checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon/>
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  )
}

export default Post