import { useState } from "react"

export const useCreateNewAccount = (initialState = {}) => {
const [values, setValues] = useState(initialState)


const handleInputChangeUser = ({target}) =>{
    setValues({
        ...values,
        [target.name]: target.value
    });

}
return[values, handleInputChangeUser]
}

