import { AddBox, Delete, Edit, PlusOne, Visibility } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import PatientCreateEdit from "../components/PatientCreateEdit";
import { PATIENTS } from "../helpers/dummy-data";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [patients, setPatients] = useState(PATIENTS);
  const [patient, setPatient] = useState(null);
  const navigate = useNavigate();

  const handleDeletePatient = (id) => {
    const index = patients.findIndex((d) => d.id === id);
    if (index !== -1) {
      patients.splice(index, 1);
      setPatients([...patients]);
    }
  };

  const handleEditPatient = (data) => {
    setPatient({ ...data });
  };

  const onEditCreateSubmit = (data, edit = false) => {
    if (!edit) {
      patients.push({
        ...data,
        id: patients?.length + 1,
        profile:
          "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-avatar-placeholder-abstract-white-blue-green-png-image_3918476.jpg",
        address:
          "2762 High Meadow Lane City, State, Zip: Sweet Valley, Pennsylvania(PA), 18656",
        age: 34,
      });
      setPatient([...patients]);
    } else {
      const index = patients.findIndex((d) => d.id === patient.id);
      if (index === -1) return;
      patients[index] = { ...data, ...patient[index] };
      setPatient([...patients]);
    }
    setPatient(null);
  };

  const handleView = (id) => {
    navigate("/data/" + id);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className=" flex justify-between  pt-header w-full">
          <h2 className="mt-6 flex1">All Patients</h2>
          <Button
            onClick={() => setPatient(true)}
            dark
            width="200px"
            classes="flex items-center justify-center"
          >
            <AddBox className="mr-2" /> Add New Patient
          </Button>
        </div>
        <div className="table">
          <div className="tableHeader flex">
            <p className="w-10p">Patient Id</p>
            <p className="w-20p">Name</p>
            <p className="w-20p">Disease</p>
            <p className="w-20p">Mobile</p>
            <p className="w-20p">Email</p>
            <p className="w-10p">Actions</p>
          </div>
          <div className="tableBody">
            {patients.map((data, i) => (
              <PatientRow
                data={data}
                key={i}
                onDelete={handleDeletePatient}
                onEdit={handleEditPatient}
                onView={handleView}
              />
            ))}
          </div>
        </div>
      </div>
      <PatientCreateEdit
        open={patient}
        onClose={() => setPatient(null)}
        onSubmit={onEditCreateSubmit}
      />
    </>
  );
};

export default HomePage;

const PatientRow = ({ data, onDelete, onEdit,onView }) => {
  const handleEdit = () => onEdit(data);
  const handleView = () => onView(data?.id);

  return (
    <div className="flex tableRow">
      <p className="w-10p">{data.id}</p>
      <p className="flex items-center w-20p">
        <Avatar src={data.profile} className="mr-2" /> {data.name}
      </p>
      <p className="w-20p">{data.mobile}</p>
      <p className="w-20p">{data.email}</p>
      <p className="w-20p">{data.disease}</p>
      <p className="w-10p flex items-center cursor-pointer">
        <Visibility sx={{ color: "deepskyblue" }} onClick={handleView} />
        <Edit className="mx-1" onClick={handleEdit} />
        <Delete sx={{ color: "red" }} onClick={() => onDelete(data?.id)} />
      </p>
    </div>
  );
};
