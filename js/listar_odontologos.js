const tableBody = document.querySelector("#odontologosTable>tbody");
const apiURL = "http://localhost:8080/api/v1";
function fetchOdontologos()
{
    fetch(`${apiURL}/odontologo`)//por default supone un GET
    .then((response)=>response.json())
    .then((data)=>
    {
        console.log(tableBody);
        tableBody.innerHTML="";
        data.forEach((odontologo,index)=>
        {
            const row = document.createElement("tr");
            row.innerHTML=`
            <td>${odontologo.id}</td>
            <td><input readonly class='border-0 focus-ring inputM M${odontologo.matricula}' value='${odontologo.nombre}'></td>
            <td><input readonly  class='border-0 focus-ring inputM M${odontologo.matricula}' value='${odontologo.apellido}'></td>
            <td><input readonly  class='border-0 focus-ring inputM M${odontologo.matricula}' value='${odontologo.matricula}'></td>
            <td>
            <button class="btn btn-primary btn-sm editBtn" onclick="editOdontologo('M${odontologo.matricula}','${odontologo.id}')">Guardar</button>
            <button class="btn btn-danger btn-sm deleteBtn" onclick="deleteOdontologo('${odontologo.id}')">Eliminar</button>
            </td>
            `;
            tableBody.appendChild(row);
        });
        })

    .catch((error)=>{
        console.error("Error fetching data:",error);
    });
}
fetchOdontologos();