import { useState } from "react"

export const useVerifyPassword = ( initialState = {} ) => {
    const [values, setvalues] = useState(initialState);

    const handleInputChangePassword = ({target}) =>{
        setvalues({
            ...values,
            [target.name]: target.value
        });
        // if(!target.name === target.value){
        //     console.log("Son iguales")
        // }

    }
    return[values, handleInputChangePassword];
}
