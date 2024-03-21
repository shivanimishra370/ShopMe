import { Box, Grid, TextField } from '@mui/material';
import React from 'react';
import AddressCart from '../../AddressCart/AddressCart';
import { Button } from '@mui/material';

const DeliveryAddressform = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get("firstname"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipcode: data.get("zip"),
            mobile: data.get("phoneNumber")
        }
        console.log("address", address)
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCart/>
                        <Button style={{ marginTop: 2, bgcolor: "RGB(145 85 253)" }} size="large" variant="contained">Deliver Here</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className='border rounded-s-md shadow-md-5 p-5'>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id='firstname'
                    name='firstname'
                    label='First Name'
                    fullWidth
                    autoComplete='given-name'/>
                     </Grid>
                     
                     <Grid  item xs={12} sm={6}>
                     <TextField
                    required
                    id='lastname'
                    name='lastname'
                    label='Last Name'
                    fullWidth
                    autoComplete='given-name'/>
                     </Grid>

                     <Grid  item xs={12}>
                     <TextField
                    required
                    id='address'
                    name='address'
                    label='Address'
                    fullWidth
                    autoComplete='given-address'
                    multiline
                    rows={4}
                    />
                     </Grid>
                     <Grid  item xs={12} sm={6}>
                     <TextField
                    required
                    id='city'
                    name='city'
                    label='City'
                    fullWidth
                    autoComplete='given-city'/>
                     </Grid>
                     <Grid  item xs={12} sm={6}>
                     <TextField
                    required
                    id='state'
                    name='state'
                    label='State / Province / Region'
                    fullWidth
                    autoComplete='given-state'/>
                     </Grid>
                     <Grid  item xs={12} sm={6}>
                     <TextField
                    required
                    id='zip'
                    name='zip'
                    label='Zip / Potal Code'
                    fullWidth
                    autoComplete='shipping postal-code'/>
                     </Grid>
                     <Grid  item xs={12} sm={6}>
                     <TextField
                    required
                    id='phoneNumber'
                    name='phoneNumber'
                    label='Phone Number'
                    fullWidth
                    autoComplete='given-name'/>
                     </Grid>
                     <Grid item xs={12} sm={6}>
                                    <Button sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }} size="large" variant='contained' type='submit'>Deliver Here</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default DeliveryAddressform;