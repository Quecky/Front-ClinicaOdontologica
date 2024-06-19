function deleteOdontologo(id) {
  fetch(`${apiURL}/odontologo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status === 200) {
      console.log("Eliminado con exito");
      fetchOdontologos();
   
    }
  });
}
