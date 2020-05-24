import React,{useState} from 'react';

const useSelect = (stateInicial, opciones) => {
    const[state,guardarState] = useState(stateInicial);
    const SelectNoticias =()=>{
        return(
            <select value={state} onChange={ e => guardarState(e.target.value)} className="browser-default">
                {opciones.map(opcion =>{
                    return(
                    <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                    )
                })}
            </select>
        )
    }
    return [state,SelectNoticias];
};

export default useSelect;