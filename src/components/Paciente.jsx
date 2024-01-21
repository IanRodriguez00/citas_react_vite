

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre,propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar=()=>{
    const respuesta = confirm('deseas elimiar ese paciente?')
    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-lg 
    px-5 py-10 rounded-xl">
    <p className=" font-bold mb-3 text-gray-700 
    uppercase">
      Nombre: {''}
      <span className="font-normal normal-case">
        {nombre}</span>
    </p>

    <p className=" font-bold mb-3 text-gray-700 
    uppercase">
      Propietario: {''}
      <span className="font-normal normal-case">
       {propietario}</span>
    </p>

    <p className=" font-bold mb-3 text-gray-700 
    uppercase">
      email: {''}
      <span className="font-normal normal-case">
        {email}</span>
    </p>

    <p className=" font-bold mb-3 text-gray-700 
    uppercase">
      fecha alta: {''}
      <span className="font-normal normal-case">
       {fecha}</span>
    </p>
    <p className=" font-bold mb-3 text-gray-700 
    uppercase">
      Sintomas: {''}
      <span className="font-normal normal-case">
      {sintomas}</span>
    </p>
    <div className=" grid md:flex justify-around mt-10">
      <button type="button"
      className="py-2 px-10 md:mb-0
       bg-indigo-600 hover:bg-indigo-700 w-40
        text-white font-bold uppercase rounded-lg mb-5 "
        onClick={()=> setPaciente(paciente)}>Editar</button>
      <button type="button"
      className="py-2 px-10
       bg-red-600 hover:bg-red-700 w-40 
       text-white font-bold uppercase rounded-lg "
       onClick={handleEliminar}>Eliminar</button>
    </div>
  </div>
  )
}

export default Paciente
