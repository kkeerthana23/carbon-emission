import * as React from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import Box from '@mui/material/Box';
import {FaPencilAlt} from 'react-icons/fa';

export default function AddEditPageComponent(params){
    // debugger;
    // console.log("PARAM ROW "+params.row);
    //const co2 = params.row.co2

    const [co2, setCO2] = useState(params.row.co2);
    //Battery and Motor Components
    const [costManufactured, setCostManufactured] = useState(params.row.costManu);
    const [dateManufactured, setDateManufactured] = useState(params.row.dateManu);
    const [partNumber, setPartNumber] = useState(params.row.partNum);
    const [salesPrice, setSalesPrice] = useState(params.row.salesPr);
    const [serialNumber, setSerialNumber] = useState(params.row.serialNum);

    // Sea and Ground Transport Components
    const [trackingNum, setTrackingNum] = useState(params.row.costManu);
    const [routeID, setRouteID] = useState(params.row.dateManu);
    const [shipID, setShipID] = useState(params.row.partNum);
    const [fuelCost, setFuelCost] = useState(params.row.salesPr);
    const [labourCost, setLabourCost] = useState(params.row.salesPr);
    const [customerCost, setCustomerCost] = useState(params.row.salesPr);
    // const [openEdit, setOpenEdit] = React.useState(params.row.openEdit);

   
    const handleCloseEdit = () => {
        // setOpenEdit(false);
        params.close(false);
    };

    const type = params.type;
    var field = false;
    var route = true;
    var admin = true;
    console.log(type);

    // Show fields when its Battery and Motor. Add route to the fields when its sea and ground. Show only HPT fields for admin page.
    if(type === "Sea Route" || type === "Ground Transport"){
        route = false;
        field = true;
        admin = true;
    }
    else if(type === 'Battery' || type === 'Motor'){
        field = false;
        route = true;
        admin = true;
    }
    else if(type === "HPT"){
        admin = false;
        field = true;
        route = true;
    }


    return(
        <Dialog open={params.open} onClose={handleCloseEdit}>
        <DialogTitle><span style={{paddingRight:'10px'}}><FaPencilAlt/></span>Edit {type} Details</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Edit existing battery details here.
            </DialogContentText>

            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '40ch', backgroundColor:'#fff' }, paddingLeft:'0px', '& .MuiButton-root':{backgroundColor: '#0fa153'}}} noValidate autoComplete="off">
              <div  hidden={field}>
                  <TextField required error={serialNumber !== null && serialNumber !== '' ? false : true} id="serialNumber" variant='outlined' label="Product Serial Number" defaultValue="" value={serialNumber} onChange={e => setSerialNumber(e.target.value)}/>
              </div>
              <div  hidden={field}>
                  <TextField required error={partNumber !== null && partNumber !== '' ? false : true} id="partNumber" variant='outlined' label="Part Number" defaultValue="" value={partNumber} onChange={e => setPartNumber(e.target.value)}/>
              </div>
              <div hidden={field}>
                  <TextField required error={co2 !== null && co2 !== '' ? false : true} id="co2" variant='outlined' label="CO2" type="number" defaultValue="" value={co2} onChange={e =>{setCO2(e.target.value);}  }/>
              </div>
              <div hidden={field}>
                  <TextField required error={costManufactured !== null && costManufactured !== '' ? false : true} id="costManufactured" variant='outlined' label="Cost of Manufacture ($)" type="number" defaultValue="" value={costManufactured} onChange={e => setCostManufactured(e.target.value)}/>
              </div>
              <div  hidden={field}>
                  <TextField required error={dateManufactured !== null && dateManufactured !== '' ? false : true} id="dateManufactured" variant='outlined' type="date" label="Date Manufactured" value={dateManufactured} onChange={e => setDateManufactured(e.target.value)} InputLabelProps={{ shrink: true }}/>
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker label="Date Manufactured" renderInput={(params) => <TextField {...params} />} value={dateManufactured} onChange={(newVal) => setDateManufactured(newVal)} />
                  </LocalizationProvider> */}
              </div>
              <div hidden={field}>
                    <TextField required error={salesPrice !== null && salesPrice !== '' ? false : true} id="salesPrice" variant='outlined' label="Sales Price ($)" type="number" defaultValue="" value={salesPrice} onChange={e => setSalesPrice(e.target.value)}/>
              </div>

              <div  hidden={route}>
                  <TextField required error={trackingNum !== null && trackingNum !== '' ? false : true} id="trackingNum" variant='outlined' label="Tracking Number" type="number" defaultValue="" value={trackingNum} onChange={e => setTrackingNum(e.target.value)}/>
              </div>
              <div  hidden={route}>
                  <TextField required error={routeID !== null && routeID !== '' ? false : true} id="routeID" variant='outlined' label="Route ID" defaultValue="" value={routeID} onChange={e => setRouteID(e.target.value)}/>
              </div>
              <div hidden={route}>
                  <TextField required error={co2 !== null && co2 !== '' ? false : true} id="co2" variant='outlined' label="CO2" type="number" defaultValue="" value={co2} onChange={e =>{setCO2(e.target.value);}  }/>
              </div>
              <div  hidden={route}>
                  <TextField required error={shipID !== null && shipID !== '' ? false : true} id="shipID" variant='outlined' label="Ship ID" defaultValue="" value={shipID} onChange={e => setShipID(e.target.value)}/>
              </div>
              <div hidden={route}>
                  <TextField required error={fuelCost !== null && fuelCost !== '' ? false : true} id="fuelCost" variant='outlined' label="Fuel Cost ($)" type="number" defaultValue="" value={fuelCost} onChange={e => setFuelCost(e.target.value)}/>
              </div>
              <div hidden={route}>
                  <TextField required error={labourCost !== null && labourCost !== '' ? false : true} id="labourCost" variant='outlined' label="Labour Cost ($)" type="number" defaultValue="" value={labourCost} onChange={e => setLabourCost(e.target.value)}/>
              </div>
              <div hidden={route}>
                  <TextField required error={customerCost !== null && customerCost !== '' ? false : true} id="customerCost" variant='outlined' label="Customer Cost ($)" type="number" defaultValue="" value={customerCost} onChange={e => setCustomerCost(e.target.value)}/>
              </div>

              <div hidden={admin}>
                  <Autocomplete disablePortal id="hptID" options={top100Films} renderInput={(params) => <TextField {...params} label="HPT ID" />}/>                       
              </div>
              <div hidden={admin}>
                  <Autocomplete disablePortal id="batteryID" options={top100Films} renderInput={(params) => <TextField {...params} label="Battery ID" />}/>                       
              </div>
              <div hidden={admin}>
                  <Autocomplete disablePortal id="motorID" options={top100Films} renderInput={(params) => <TextField {...params} label="Motor ID" />}/>                       
              </div>
              <div hidden={admin}>
                  <Autocomplete disablePortal id="seaRouteID" options={top100Films} renderInput={(params) => <TextField {...params} label="Sea Route" />}/>                       
              </div>
              <div hidden={admin}>
                  <Autocomplete disablePortal id="groundRouteID" options={top100Films} renderInput={(params) => <TextField {...params} label="Ground Transport Route" />}/>                       
              </div>
            </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseEdit} style={{color:'#fff', backgroundColor:'#004e38', border:'0.5px solid #004e38'}}>Cancel</Button>
            <Button onClick={handleCloseEdit} style={{color:'#fff', backgroundColor:'#004e38', border:'0.5px solid #004e38'}}>Submit</Button>
        </DialogActions>
    </Dialog>
    );
}

const top100Films = [
];