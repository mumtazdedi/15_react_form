import style from './style.module.css';
import React, { useState } from 'react';

const Form = ({ formData, setFormData, data, setData }) => {

    const [classType, setClassType] = useState(["Coding Backend with Golang", "Coding Frontend with ReactJS", "Fullstack Developer"])
    const [bgStudy, setBgStudy] = useState("IT");

    const handleChange = (value, key) => {
        const newData = { ...data };

        newData[key] = value;

        setData(newData);

        value = null;
    }

    const validName = new RegExp(
        '^[a-zA-Z]+[a-zA-Z]+[a-zA-Z]$'
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.phone.length < 9 || data.phone.length > 14) {
            alert("Phone number must be between 9 and 14 characters");
        } else if (!validName.test(data.name)) {
            alert("Name is not valid");
        }
        else {
            const newFormData = [...formData];

            newFormData.push(data);

            setFormData(newFormData);

            alert("User " + data.name + " has been added");

            setBgStudy("");
            console.log(classType[0]);

            setData({
                name: "",
                email: "",
                phone: 0,
                bgStudy: "",
                class: "",
                file: "",
                hope: "",
            });

        }
    }

    const handleClick = (e) => {
        if (e.target.name === "reset") {
            setData({
                name: "",
                email: "",
                phone: 0,
                bgStudy: "",
                class: "",
                file: "",
                hope: "",
            });
        }
    }

    if (handleClick) {

    }

    return (
        <div className={style.form}>
            <form onSubmit={handleSubmit}>
                <div className={style.form_group}>
                    <label>Nama Lengkap: </label>
                    <input type="text" value={data.name} onChange={(e) => handleChange(e.target.value, 'name')} required />
                </div>
                <div className={style.form_group}>
                    <label>Email: </label>
                    <input type="email" value={data.email} onChange={(e) => handleChange(e.target.value, 'email')} required />
                </div>
                <div className={style.form_group}>
                    <label>No Handphone: </label>
                    <input type="number" value={data.phone} onChange={(e) => handleChange(e.target.value, 'phone')} required />
                </div>
                <div className={style.form_group}>
                    <label>Latar Belakang Pendidikan: </label>
                    <input type="radio" name='bgStudy' value="IT" onChange={(e) => handleChange(e.target.value, 'bgStudy')} /> IT
                    <input type="radio" name='bgStudy' value="NON IT" onChange={(e) => handleChange(e.target.value, 'bgStudy')} /> Non IT
                </div>
                <div className={style.form_group}>
                    <label>Kelas Coding yang Dipilih: </label>
                    <select defaultValue={classType[0]} onChange={(e) => handleChange(e.target.value, 'class')}>
                        {classType.map((type, typeIdx) => (
                            <option value={type} key={typeIdx} >{type}</option>
                        ))}
                    </select>
                </div>
                <div className={style.form_group}>
                    <label>Foto Surat Kesungguhan: </label>
                    <input type="file" value={data.file} onChange={(e) => handleChange(e.target.value, 'file')} required />
                </div>
                <div className={style.form_group}>
                    <label>Harapan untuk Coding Bootcamp Ini: </label>
                    <textarea name="hope" value={data.hope} onChange={(e) => handleChange(e.target.value, 'hope')}></textarea>
                </div>
                <div className={style.form_group}>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
