import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { addUserAxios } from "../services/userApi.services"

export default function AddUser(props) {

    // הודעת שגיאה שחוזרת מהשרת (למשל: Email already exists)
    const [serverError, setServerError] = useState("")

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data) => {

        // השדות חייבים להיות בדיוק אלה שהשרת מצפה להם ב-req.body
        const newUser = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        try {
            setServerError("")
            const result = await addUserAxios(newUser) // { user, token }
            console.log(result)
            localStorage.setItem("token", result.token) // שומרים את הטוקן לבקשות הבאות
            reset()
        } catch (err) {
            // axios זורק שגיאה על סטטוס 400/409, וההודעה של השרת נמצאת ב-err.response.data
            setServerError(
                err.response?.data?.error ||
                err.response?.data?.message ||
                err.message
            )
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Min length is 2" },
                    })}
                />
                <p>{errors.name?.message}</p>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                    })}
                />
                <p>{errors.email?.message}</p>

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Min length is 6" },
                    })}
                />
                <p>{errors.password?.message}</p>

                <button type="submit">Sign Up</button>
                <p>{serverError}</p>
            </form>
        </>
    )
}