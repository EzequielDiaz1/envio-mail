import Opciones from "./Opciones";
import emailjs from "emailjs-com";
import { useState } from "react";

const div1Style = {
  height: "500px",
  width: "900px",
  backgroundColor: "rgba(255,255,255,0.7)",
  marginTop: "100px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

function Carga() {
  const frmContact = { user_name: "", user_email: "", message: "" };
  const [contact, setContact] = useState(frmContact);
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nl8109o",
        "template_hum7j2r",
        contact,
        "user_0qm6Dm0hCAVMxnH10E16F"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
    console.log(msg);
  };

  return (
    <form style={div1Style} onSubmit={sendEmail}>
      <div>
        <h6>Tu nombre</h6>
        <input
          type="text"
          name="user_name"
          style={{ width: "70%" }}
          onChange={handleChange}
        />
      </div>
      <div>
        <h6>Correo</h6>
        <input
          type="email"
          name="user_email"
          style={{ width: "70%" }}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h6>Texto a enviar</h6>
        <textarea
          name="message"
          style={{ width: "70%", maxHeight: "100px" }}
          onChange={handleChange}
        />
      </div>
      <Opciones setMensaje={(msg) => setMsg(msg)} contenido={contact.message} />
      <div>
        <button class="btn btn-primary">Enviar</button>
      </div>
    </form>
  );
}

export default Carga;
