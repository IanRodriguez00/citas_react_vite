import {useState, useEffect} from 'react';
import Error from './Error';


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setemail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    
    const [error, setError] = useState(false);


    useEffect(()=>{
        if(Object.keys(paciente).length>0){   
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setemail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente])
 
    const generarId = ()=>{
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random+fecha
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
         //Validación del Formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
        console.log("hay al menos un campo vacio")
        setError(true)
        return;
    }
    setError(false)

    
    //objeto de Paciente
    const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas
    }

    if(paciente.id){
       //editado el registro
       console.log(pacientes)
      objetoPaciente.id = paciente.id
         const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
        setPacientes(pacientesActualizados)
        setPaciente({})
        
    }else{
       //nuevo registro
       //console.log(pacientes)
       objetoPaciente.id=generarId()
       setPacientes( pacientes=>[...pacientes, objetoPaciente ])
    }
    
     //reiniciar el form
     setNombre('')
     setPropietario('')
     setemail('')
     setFecha('')
     setSintomas('')
}
   
   
    
  return (
    <div className=" md:w-1/2 lg:w-2/5">
      <h2 className=" font-black text-3xl text-center">
        Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className=" text-indigo-600 
            font-bold">
                Adimistralos</span>
        </p>
        <form 
        onSubmit={handleSubmit}
        className=" bg-white shadow-xl rounded-lg
         px-5 py-10 mb-5">
            {error && <Error><p>Todos los campos son obligatorios</p></Error>}
            <div className="mb-5">
                <label className=" block text-gray-700 uppercase font-bold" 
                htmlFor="mascota">
                    Nombre Mascota </label>
                <input id="mascota"
                type="text" 
                className=" border-2 w-full p-2 mt-2 
                 placeholder-gray-400 rounded-md"    
                placeholder="Nombre de la mascota"
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}>

                </input>
            </div>
            <div className="mb-5">
                <label className=" block text-gray-700 uppercase font-bold" 
                htmlFor="propietario">
                    Nombre Propietario</label>
                <input id="propietario"
                className=" border-2 w-full p-2 mt-2 
                 placeholder-gray-400 rounded-md" 
                type="text" 
                placeholder="Nombre del Propietario"
                 value={propietario}
                onChange={(e)=> setPropietario(e.target.value)}>
                </input>
            </div>
            <div className="mb-5">
                <label className=" block text-gray-700 uppercase font-bold" 
                htmlFor="email">
                    Email</label>
                <input id="email"
                className=" border-2 w-full p-2 mt-2 
                 placeholder-gray-400 rounded-md" 
                type="email" 
                placeholder="Email contacto Propietario"
                value={email}
                onChange={(e)=> setemail(e.target.value)}>
                
                </input>
            </div>
            <div className="mb-5">
                <label className=" block text-gray-700 uppercase font-bold" 
                htmlFor="alta">
                    Alta</label>
                <input id="alta"
                className=" border-2 w-full p-2 mt-2 
                 placeholder-gray-400 rounded-md" 
                type="date" 
                value={fecha}
                onChange={(e)=> setFecha(e.target.value)}>
                </input>
            </div>
            <div className="mb-5">
                <label className=" block text-gray-700 uppercase font-bold" 
                htmlFor="sintomas">
                    Sintomas</label>
              <textarea
                id="sintomas" className="border-2 w-full p-2 mt-2 
                placeholder-gray-400 rounded-md" placeholder="Describe los Sintomas" 
                value={sintomas}
                onChange={(e)=> setSintomas(e.target.value)}>

               </textarea>
            </div>
            <input type="submit"
            className=" bg-indigo-600 w-full p-3
             text-white uppercase font-bold
              hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
            value={paciente.id?'editar Paciente': 'Agregar paciente'}
              />
        </form>
    </div>
  )
}

export default Formulario



