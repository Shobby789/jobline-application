import React from "react";
import "./Hire.css";
import Header from "../../common/header/Header";
import EmployerForm from "../../components/employerForm/EmployerForm";

const Hire = () => {
  return (
    <>
      <Header
        text={"Create an employer account"}
        showSearchBox={false}
        height={70}
      />
      <section className="container-fluid py-5 bg-light">
        <div className="container py-5">
          <EmployerForm />
        </div>
      </section>
    </>
  );
};

export default Hire;
