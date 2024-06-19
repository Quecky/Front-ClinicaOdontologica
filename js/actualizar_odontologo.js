

function editOdontologo(MATRICULA,id)
{
    const input = document.querySelectorAll(`.${MATRICULA}`);

    const nombre = input[0].value;
    const apellido = input[1].value;
    const matricula = input[2].value;

    fetch(`${apiURL}/odontologo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, apellido, matricula }),
      }).then((response) => {
        if (response.status === 200) {
          console.log("Actualizado con exito");

          fetchOdontologos();
       deshabilitarModificacion();
        }
      });

}

function habilitarModificacion()
{
    const input= document.querySelectorAll(".inputM");
    input.forEach(value=>
        {
        value.readOnly=false
        value.classList.remove('border-0')
        value.classList.add('border-2')
  
    }
        )
  
}

function deshabilitarModificacion()
{
    const input= document.querySelectorAll(".inputM");
    input.forEach(value=>
        {
        value.readOnly=true
        value.classList.remove('border-2')
        value.classList.add('border-0')
  
    }
        )
  
}