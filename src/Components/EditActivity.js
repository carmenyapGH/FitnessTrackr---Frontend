import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../api";
import { useParams } from "react-router-dom";

const EditActivity = () => {
  const { id } = useParams();
  console.log(id);
  const fetchActivityById = async () => {
    fetch(`${BASE_URL}/activities/${id}`, {
      method: "GET",
    });
  };

  const upDateActivity = () => {};

  return (
    <>
      <div>
        <form></form>
      </div>
    </>
  );
};

export default EditActivity;
