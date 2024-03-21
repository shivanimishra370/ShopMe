import React from 'react'
import AddressCart from '../AddressCart/AddressCart'
import OrderTraker from './OrderTraker'
import { Grid, Box } from '@mui/material' // Import Box from Material-UI
import StarBorderIcon from '@mui/icons-material/StarBorder'

// Import deepPurple color from Material-UI
import { deepPurple } from '@mui/material/colors'

const OrderDEtails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>
                Delivery Address

            </h1>
            <AddressCart/>
        </div>
        <div className='py-20'>
            <OrderTraker activeStep={3}/>
        </div>
        <Grid className='space-y-5' container>
            {[1,1,1,1,1].map((item)=><Grid item container className='shadow-x1 rounded-md p-5 border' sx={{alignItems:"cneter",
             justifyContent:'space-between'}}>

          
            <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems: "center", justfyContent:'space-between'}}>
              <Grid item xs={6}>
                  <div className='flex items-center space-x-4'>
                      <img className='w-[5rem] h-[5rem] object-cover object-top'
                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/1/h/g/m-pw333-purshottam-wala-original-imag8zf6ybkmhehy-bb.jpeg?q=70" 
                      alt="" />
                      <div className='space-y-2 ml-5'>
                          <p className='font semibold'>Men slim Mid Rise Black jeans</p>
                          <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: pink</span><span>Size: M</span></p>
                          <p>Seller: linaria</p>
                          <p>₹1099</p>
                      </div>
                  </div>
              </Grid>
              <Grid item>
                  <Box sx={{color : deepPurple[500]}}>
                      <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                      <span>Rate & Review Product</span>
                  </Box>
              </Grid>
            </Grid>
            </Grid>)}
        </Grid>
     </div>
  )
}

export default OrderDEtails
