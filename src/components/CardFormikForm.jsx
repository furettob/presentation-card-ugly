import React from 'react';
import { useFormik } from 'formik';
import {getLocalStorageData, setLocalStorageItem} from "../utils/storage";

const SignupForm = ({callback}) => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            name: "stefano",
            lastname: "spensieri",
            description:"",
            skill:""
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            console.log("Local storage data: ", getLocalStorageData())
            console.log('State on submission: ', formik.values);
            setLocalStorageItem(formik.values.name + "_" + formik.values.lastname, {
                name:formik.values.name,
                lastname:formik.values.lastname,
                skill:formik.values.skill,
                description: formik.values.description
            })
            callback && callback()
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="string"
                onChange={formik.handleChange}
                value={formik.values.name}
            />

            <label htmlFor="lastname">Last Name</label>
            <input
                id="lastname"
                name="lastname"
                type="string"
                onChange={formik.handleChange}
                value={formik.values.lastname}
            />

            <label htmlFor="skill">Skill</label>
            <input
                id="skill"
                name="skill"
                type="string"
                onChange={formik.handleChange}
                value={formik.values.skill}
            />
            <label htmlFor="description">Descrizione</label>
            <textarea
                id="description"
                name="description"
                type="string"
                onChange={formik.handleChange}
                value={formik.values.description}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm