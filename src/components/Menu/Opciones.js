const optionStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "20px",
};

function Opciones(props) {


  useEffect(() => {
    props.setMensaje(selectedItem.label);
  });
  
  console.log("Soy props: ", props);
  let principio = "";
  let final = "";

  return (
    <div>
      <h6>Modificaciones</h6>
      <div style={optionStyle}>
        <button class="btn btn-outline-dark">Negrita</button>
        <button class="btn btn-outline-dark">Cursiva</button>
        <button class="btn btn-outline-dark">Background Color</button>
        <button class="btn btn-outline-dark">Text Color</button>
        <button class="btn btn-outline-dark">Imagen</button>
      </div>
    </div>
  );
}

export default Opciones;
