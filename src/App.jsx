import { useState } from 'react'
import './App.scss'

function App() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    message: '',
  })

  function handleChange(e){
    e.preventDefault();

    const {name, value} = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className='App'>
      <form action="">

        <h1>The Form!</h1>

        <span>
          <input 
            type="text" 
            name="name" 
            id="name"
            value={formState.name}
            onChange={handleChange} 
          />
          <label htmlFor="name" className={formState.name ? 'active' : ''}>Your Name</label>
        </span>

        <span>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={formState.email}
            onChange={handleChange} 
          />
          <label htmlFor="email" className={formState.email ? 'active' : ''}>Your Email</label>
        </span>

        <span>
          <input 
            type="password" 
            name="password" 
            id="password"
            value={formState.password}
            onChange={handleChange} 
          />
          <label htmlFor="password" className={formState.password ? 'active' : ''}>Your Password</label>
        </span>

        <span>
          <textarea 
            name="message" 
            id="message"
            value={formState.message}
            onChange={handleChange}>
          </textarea>
          <label htmlFor="password" className={formState.message ? 'active' : ''}>Your Message</label>
        </span>

        <button type="submit" value="SUBMIT" id='submit'>
          SUBMIT
        </button>

      </form>
    </div>
  )
}

export default App
