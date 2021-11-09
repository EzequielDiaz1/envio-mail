import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useState } from "react";
import { Formik, Field, Form } from "formik";

const div1Style = {
  height: "500px",
  width: "900px",
  backgroundColor: "rgba(255,255,255,0.7)",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

function Carga() {
  const errors = {};

  const sendEmail = (values) => {
    emailjs
      .send(
        "service_nl8109o",
        "template_hum7j2r",
        values,
        "user_0qm6Dm0hCAVMxnH10E16F"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "El correo fue envíado correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h2
        style={{
          marginTop: "10px",
          fontFamily: "Bebas Neue, cursive",
          fontSize: "64px",
        }}
      >
        Ezequiel Diaz - Project Send Email
      </h2>
      <Formik
        initialValues={{ user_name: "", user_email: "", message: "" }}
        validate={(values) => {
      

          // We need a name
          if (!values.user_name)
            errors.user_name = "Debe completar este campo obligatoriamente";

          // We need a valid e-mail
          if (!values.user_email)
            errors.user_email = "Debe completar este campo obligatoriamente";
          else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
          )
            errors.user_email =
              "La dirección de correo electrónico no es valida";

          return errors;
        }}
        onSubmit={(values) => {
          sendEmail(values);
        }}
      >
        <Form style={div1Style}>
          <div>
            <h6>Tu nombre</h6>
            <Field
              type="text"
              name="user_name"
              style={{ width: "70%" }}
              required
            />
          </div>
          <div>
            <h6>Correo</h6>
            <Field type="email" name="user_email" style={{ width: "70%" }} required />
          </div>

          <div>
            <h6>Texto a enviar</h6>
            <Field name="message" style={{ width: "70%" }} required />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Carga;
