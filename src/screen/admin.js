import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../config/firebasemethods";
import MainLyout from "./adminscreen/mainlayout";
import loaderImg from '../assets/loader.gif'

function Admin() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

let checkAuth = () => {
  setLoader(true);
  checkUser()
      .then(() => {
        setLoader(false);
      })
      .catch((err) => {
        navigate("/login");
      });
}

  useEffect(() => {
    checkAuth();
  }, []);
  return loader ? (
    <img src={loaderImg} />
  ) : (
    <>
      <MainLyout />
    </>
  );
}
export default Admin;