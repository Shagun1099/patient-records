import { Close } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const PatientCreateEdit = ({ open, onClose,onSubmit }) => {
    const [data,setData] = useState({});

    useEffect(()=>{
     if(open===true || !open){
        setData({});
        return;
     };
     setData({...open});
    },[open]);

    const handleEdit = (e,field) => {
        const value = e.target.value;
        data[field] = value;
        setData({...data});
    }

    const handleSubmit = () =>{
        onSubmit(data,open !== true);
        setData({});
    }


  return (
    <Dialog onClose={onClose} open={!!open} className="text-center">
      <div className="text-center px-2 py-4 relative">
        <Close
          className="absolute top-1 right-1 cursor-pointer"
          onClick={onClose}
        />
        <h2>Edit/Create Patient</h2>
        <Input placeholder="Name" dark classes="mt-2" value={data?.name} onChange={e=>handleEdit(e,'name')}/>
        <Input placeholder="Enter Email" dark classes="mt-2" value={data?.email} onChange={e=>handleEdit(e,'email')} />
        <Input placeholder="Enter Phone" dark classes="mt-2" value={data?.mobile} onChange={e=>handleEdit(e,'mobile')}/>
        <Input placeholder="Enter Disease" dark classes="mt-2" value={data?.disease} onChange={e=>handleEdit(e,'disease')}/>
        <Input placeholder="Enter DOB" dark classes="mt-2" value={data?.birthday} onChange={e=>handleEdit(e,'birthday')}/>
        <Button dark onClick={handleSubmit}>
          Submit Details
        </Button>
      </div>
    </Dialog>
  );
};

export default PatientCreateEdit;
