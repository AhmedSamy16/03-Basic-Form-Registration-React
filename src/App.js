import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (userData.firstname && userData.lastname && userData.email) setIsValid(true)
    setIsSubmitted(true)
    setUserData({
      firstname: "",
      lastname: "",
      email: ""
    })
  }
  return (
    <div className="form-container">
      {isSubmitted && isValid && <div className='success'>Sucess! Thank you for registering.</div>}
      <form onSubmit={handleSubmit}>
        <input className='form-field' type="text" placeholder='firstname' value={userData.firstname} onChange={(e) => setUserData({ ...userData, firstname: e.target.value })} />
        {isSubmitted && !userData.firstname && !isValid &&<span>Please Enter a firstname!</span>}
        <input className='form-field' type="text" placeholder='lastname' value={userData.lastname} onChange={(e) => setUserData({ ...userData, lastname: e.target.value })} />
        {isSubmitted && !userData.lastname && !isValid &&<span>Please Enter a lastname!</span>}
        <input className='form-field' type="text" placeholder='email' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        {isSubmitted && !userData.email && !isValid &&<span>Please Enter an email!</span>}
        <button className='form-field' type='submit'>register</button>
      </form>
    </div>
  );
}

export default App;
