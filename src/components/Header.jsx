import { Logout, Menu } from "@mui/icons-material";
import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };
  return (
    <div className={`${styles.header}`}>
      <div className="flex items-center ml-4">
        <Menu /> <h2 className="ml-2">Patients Records</h2>
      </div>
      <div onClick={handleLogout} className="flex cursor-pointer items-center mr-4">
        Logout <Logout className="ml-2" />
      </div>
    </div>
  );
};

export default Header;
