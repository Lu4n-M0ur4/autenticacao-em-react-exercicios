import { useState } from "react";

const useForm = (initialState) => {

    const [form, setForm] = useState(initialState)

    const onChangeInput = (e) => {

        const {name, value} =  e.target; 

        setForm({...form, [name]:value})
    }

        const clearFild = (e) =>{
            e.preventDefault();
            setForm(initialState);
          }
        
          return { form, onChangeInput, clearFild };

    }


export default useForm;