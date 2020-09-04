// write your custom hook here to control your checkout form
import {useState} from "react";

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = event => {setValues({...values, [event.target.name]: event.target.value})};

    const handleSubmit = event => {
        event.preventDefault();
        setShowSuccess(true);
    }

    return [values, showSuccess, handleChange, handleSubmit];
}

export default useForm;