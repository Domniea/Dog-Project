import {useState} from 'react'
import axios from 'axios'

const SubmitWalkerForm = () => {
    const initInputs ={
        name: '',
        age: '',
        rating: '',
        contact: ''
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        setInputs(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/api/walker', inputs)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        console.log('Submitted')
    }

    return (
        <>
            <div className="WalkerForm">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        value={inputs.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    <input 
                        type="text" 
                        name="age" 
                        value={inputs.age}
                        onChange={handleChange}
                        placeholder="Age"
                    />
                    <input 
                        type="text" 
                        name="rating" 
                        value={inputs.rating}
                        onChange={handleChange}
                        placeholder="Ratings"
                    /> 
                    <input 
                        type="text" 
                        name="contact" 
                        value={inputs.contact}
                        onChange={handleChange}
                        placeholder="Contact"
                    />
                    <button>Submit</button>
                </form>

            </div>
        </>
    )
} 
  


export default SubmitWalkerForm