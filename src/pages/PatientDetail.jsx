import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import {useParams} from 'react-router-dom';
import { getPatientById } from '../helpers/dummy-data';
import { Avatar } from '@mui/material';

const PatientDetail = () => {

    const {id} = useParams();
    const [data,setData] = useState({});

    useEffect(()=>{
     if(!id) return;
     const info = getPatientById(id);
     console.log(info);
     setData(info);
    },[id]);

  return (
    <>
    <Header/>
     <div className='authContainer pt-header'>
     <div className='authBox'>
      <h1>{data?.name}</h1>
      <Avatar src={data?.profile} className="mx-auto" sx={{width:"200px",height:"200px"}}/>
      <div className='w-300 mx-auto ml-2 mt-2'>
      <p>Disease: {data.disease}</p>
      <p>Age: {data.age}</p>
      <p>Mobile: {data.mobile}</p>
      <p>DOB: {data?.birthday}</p>
      <p>Email: {data?.email}</p>
      <p>Address: {data?.address}</p>
      </div>
     </div>
     </div>
    </>
  )
}

export default PatientDetail