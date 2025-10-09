import React, { useState } from 'react'

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    country: '',
    gender: '',
    agree: false,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function validate() {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name required'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Valid email required'
    if (!form.age || Number(form.age) <= 0) errs.age = 'Enter valid age'
    if (!form.country) errs.country = 'Select country'
    if (!form.gender) errs.gender = 'Select gender'
    if (!form.agree) errs.agree = 'Accept terms'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length === 0) {
      // simulate a short API call
      setTimeout(() => {
        setSubmitted(form)
      }, 150)
    }
  }

  return (
    <form data-testid="signup-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input data-testid="input-name" name="name" value={form.name} onChange={handleChange} />
        {errors.name && <div data-testid="err-name">{errors.name}</div>}
      </label>

      <label>
        Email
        <input data-testid="input-email" name="email" value={form.email} onChange={handleChange} />
        {errors.email && <div data-testid="err-email">{errors.email}</div>}
      </label>

      <label>
        Age
        <input data-testid="input-age" name="age" type="number" value={form.age} onChange={handleChange} />
        {errors.age && <div data-testid="err-age">{errors.age}</div>}
      </label>

      <label>
        Country
        <select data-testid="select-country" name="country" value={form.country} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="IN">India</option>
          <option value="US">USA</option>
        </select>
        {errors.country && <div data-testid="err-country">{errors.country}</div>}
      </label>

      <div>
        Gender
        <label><input data-testid="radio-male" type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={handleChange} />Male</label>
        <label><input data-testid="radio-female" type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={handleChange} />Female</label>
      </div>
      {errors.gender && <div data-testid="err-gender">{errors.gender}</div>}

      <label>
        <input data-testid="checkbox-agree" type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
        I agree
      </label>
      {errors.agree && <div data-testid="err-agree">{errors.agree}</div>}

      <button data-testid="btn-submit" type="submit">Submit</button>

      {submitted && <pre data-testid="submission">{JSON.stringify(submitted, null, 2)}</pre>}
    </form>
  )
}
