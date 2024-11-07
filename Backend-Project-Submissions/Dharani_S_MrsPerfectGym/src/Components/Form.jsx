import { useFormik } from 'formik'
import React, { useContext, useState, useEffect } from 'react'
import { Othercontexts } from './Otherprovider'
import axios from 'axios'

const validate = (values) => {
    const errors = {}
    if (!values.session) { 
        errors.session = "Session is required..."
    }
    if (!values.mail) {
        errors.mail = "Email is required..."
    }
    if (!values.phoneno) {
        errors.phoneno = "Phone number is required..."
    }
    if (!values.activity || values.activity.length === 0) {
        errors.activity = "At least one activity must be selected..."
    }
    if (!values.training) {
        errors.training = "Training type is required..."
    }
    if (!values.help) {
        errors.help = "Please provide some details on how we can help..."
    }
    return errors
}

const Form = () => {
    const { loaders, users } = useContext(Othercontexts)
    const [loader, setloader] = loaders
    const [user, setuser] = users
    const [open, setopen] = useState(false)

    const formik = useFormik({
        initialValues: {
            session: "",
            phoneno: "",
            mail: user.mail, // Ensure mail has a default value
            activity: [],
            help: "",
            training: "",
        },
        validate,
        onSubmit: async (values) => {
            if (values.activity.length === 0) {
                alert("Fill the check box")
                return
            }
            try {
                setloader(true)
                // ("Form Values:", values)
                const res = await axios.post("https://mpbackend-2udh.onrender.com/appointments/book", values,{withCredentials:true})
                alert(res.data.message)
                if (res.data.message === "appointment booked") {
                    setopen(true) // Set to true to display the thank-you message
                }
            } catch (error) {
                console.error("Submission Error:", error)
                alert("An error occurred while submitting the form. Please try again.")
            } finally {
                setloader(false)
                formik.resetForm()
            }
        }
    })

    // Update Formik's mail field if user.mail changes
    useEffect(() => {
        if (user.mail) {
            formik.setFieldValue('mail', user.mail)
        }
    }, [user.mail])

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target
        if (checked) {
            formik.setFieldValue('activity', [...formik.values.activity, value])
        } else {
            formik.setFieldValue('activity', formik.values.activity.filter((item) => item !== value))
        }
    }

    return (
        <>
            <div className='ffb'></div>
            <div className='form'>
                <div className='fbody'>
                    <div className='fh1'>
                        <h1 style={{ fontStyle: "italic", fontSize: "26px" }}>
                            GET STARTED WITH A <span style={{ color: "red" }}>FREE</span> CONSULTATION
                        </h1>
                    </div>
                    <div className='fbody1' style={{ borderRadius: "8px" }}>
                        <div className='th'>
                            <h4 style={{ fontWeight: "bold" }}>ONE FREE</h4>
                            <h4 style={{ fontWeight: "bold", color: "rgb(192,0,0)" }}>WORKOUT</h4>
                            <p>My Workouts are designed to overcome all plateaus.</p>
                            <p>
                                It is a system that works every time because I have stripped everything that is arbitrary from it. In a nutshell, I leave nothing to chance and cover every single variable vital to achieving rapid growth. It’s not easy, in fact if you want to make great gains or lose weight it can be extremely hard work, but if you work it properly it always delivers.
                            </p>
                            <p>Get started with a FREE Consultation.</p>
                            <p style={{ alignSelf: "end", fontWeight: "bold" }}>- Mr.perfect...</p>
                        </div>
                        {open ? (
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                width:"60%"
                            }}>
                                <h1>Thanks</h1>
                                <h6 style={{ fontWeight: "bold" }}>I will get back to you within the next hour.</h6>
                            </div>
                        ) : (
                            <form className='th2' onSubmit={formik.handleSubmit}>
                                {/* Session Field */}
                                <div className='ddiv' style={{ display: "flex", flexDirection: "column" }}>
                                    <label htmlFor="session">Session</label>
                                    <input
                                        type="text"
                                        id="session"
                                        name="session"
                                        placeholder='Morning or Evening'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.session}
                                    />
                                    {formik.touched.session && formik.errors.session ? (
                                        <p className="error">{formik.errors.session}</p>
                                    ) : null}
                                </div>

                                {/* Training Field */}
                                <div className='ddiv' style={{ display: "flex", flexDirection: "column" }}>
                                    <label htmlFor="training">Training</label>
                                    <input
                                        type="text"
                                        id="training"
                                        name="training"
                                        placeholder='Personal Or Normal'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.training}
                                    />
                                    {formik.touched.training && formik.errors.training ? (
                                        <p className="error">{formik.errors.training}</p>
                                    ) : null}
                                </div>

                                {/* Phone Number Field */}
                                <div className='ddiv' style={{ display: "flex", flexDirection: "column" }}>
                                    <label htmlFor="phoneno">Phone No</label>
                                    <input
                                        type="number"
                                        id="phoneno"
                                        name="phoneno"
                                        placeholder='Phone Number'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phoneno}
                                    />
                                    {formik.touched.phoneno && formik.errors.phoneno ? (
                                        <p className="error">{formik.errors.phoneno}</p>
                                    ) : null}
                                </div>

                                {/* Checkbox Group */}
                                <fieldset style={{ border: "none", padding: "0", margin: "0" }}>
                                    <legend style={{ fontWeight: "bold", marginBottom: "8px" }}>Select Activities:</legend>
                                    <div className='row row-cols-3 g-2 uc'>
                                        <span style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                                            <input
                                                type="checkbox"
                                                id="weight_loss"
                                                onChange={handleCheckboxChange}
                                                value="weight loss"
                                                checked={formik.values.activity.includes("weight loss")}
                                            />
                                            <label htmlFor="weight_loss" style={{ paddingLeft: "2px" }}> WEIGHT LOSS</label>
                                        </span>
                                        <span style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                                            <input
                                                type="checkbox"
                                                id="body_building"
                                                onChange={handleCheckboxChange}
                                                value="body building"
                                                checked={formik.values.activity.includes("body building")}
                                            />
                                            <label htmlFor="body_building" style={{ paddingLeft: "2px" }}> BODY BUILDING</label>
                                        </span>
                                        <span style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                                            <input
                                                type="checkbox"
                                                id="silambam"
                                                onChange={handleCheckboxChange}
                                                value="silambam"
                                                checked={formik.values.activity.includes("silambam")}
                                            />
                                            <label htmlFor="silambam" style={{ paddingLeft: "2px" }}> SILAMBAM</label>
                                        </span>
                                        <span style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                                            <input
                                                type="checkbox"
                                                id="shaping"
                                                onChange={handleCheckboxChange}
                                                value="shaping"
                                                checked={formik.values.activity.includes("shaping")}
                                            />
                                            <label htmlFor="shaping" style={{ paddingLeft: "2px" }}> SHAPING</label>
                                        </span>
                                        <span style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                                            <input
                                                type="checkbox"
                                                id="strength_training"
                                                onChange={handleCheckboxChange}
                                                value="strength training"
                                                checked={formik.values.activity.includes("strength training")}
                                            />
                                            <label htmlFor="strength_training" style={{ paddingLeft: "2px" }}> STRENGTH</label>
                                        </span>
                                        <span style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                                            <input
                                                type="checkbox"
                                                id="nutrition"
                                                onChange={handleCheckboxChange}
                                                value="nutrition"
                                                checked={formik.values.activity.includes("nutrition")}
                                            />
                                            <label htmlFor="nutrition" style={{ paddingLeft: "2px" }}> NUTRITION</label>
                                        </span>
                                    </div>
                                </fieldset>
                                {/* Display Activity Errors */}
                                {formik.touched.activity && formik.errors.activity ? (
                                    <p className="error">{formik.errors.activity}</p>
                                ) : null}

                                {/* Help Textarea */}
                                <div className='dddiv' style={{ display: "flex", flexDirection: "column" }}>
                                    <label htmlFor="help">How Can I Help?</label>
                                    <textarea
                                        id="help"
                                        name="help"
                                        placeholder='Have questions?'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.help}
                                        maxLength={50}
                                    ></textarea>
                                    {formik.touched.help && formik.errors.help ? (
                                        <p className="error">{formik.errors.help}</p>
                                    ) : null}
                                </div>

                                {/* Submit Button */}
                                <button type='submit' > Submit
                                </button>
                            </form>
                        )}
                    </div>
                    <div className='contact' style={{ fontWeight: "bolder" }}>
                        <h1 style={{ color: "black", fontWeight: "bolder" }}>9715938778</h1>
                        <h1 style={{ color: "black", fontWeight: "bolder" }}>9047743533</h1>
                        <h2 style={{ color: "rgb(72, 4, 4)", fontWeight: "bolder" }}>CALL ME TODAY</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
