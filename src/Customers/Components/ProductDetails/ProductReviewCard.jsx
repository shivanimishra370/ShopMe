import { Avatar, Grid, Rating , Box} from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56, height: 56, bgcolor:"#9155fd"}}>R</Avatar>
            </Box>

        </Grid>
<Grid items xs={9}>
    <div className='sapce-y-2'>
        <div>
<p className='font-semibold text-lg'>Raam</p>
<p className='opacity-70'>April 5, 2023</p>
        </div>
    </div>
    <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
    <p>I love the clothes from this website!! I am so glad I found them.....everything has been spot on, fits
         wonderfully, styles are trendy and lots to choose from!! Thanks for being here for us!!!</p>
</Grid>
       </Grid>
    </div>
  )
}

export default ProductReviewCard
