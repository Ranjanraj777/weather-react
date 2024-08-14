import React from 'react'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Weathercard({location}) {
  return (
    <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {location.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptate
           corporis nihil dolorum consequuntur eos! Ipsam nobis, vitae quo quisquam illum facere
           amet eligendi. Exercitationem reprehenderit deserunt delectus ipsam nostrum.
         
        </Typography>
      </CardContent>
      
    </Card>
   
    </div>
  )
}

export default Weathercard