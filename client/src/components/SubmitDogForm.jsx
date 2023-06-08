
import { useState } from "react";
import axios from "axios";

function SubmitDogForm() {
    const initInputs ={
        name: '',
        breed: '',
        age: '',
        rating: '',
        walkDays: ""
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
        axios.post('/api/dogs', inputs)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        console.log('Submitted')
    }

    return (
        <>
            <div className="DogForm">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        value={inputs.name}
                        onChange={handleChange}
                        placeholder="Dog's Name"
                    />
                    <input 
                        type="text" 
                        name="breed" 
                        value={inputs.breed}
                        onChange={handleChange}
                        placeholder="Dog's Breed"
                    />
                    <input 
                        type="text" 
                        name="age" 
                        value={inputs.age}
                        onChange={handleChange}
                        placeholder="Dog's Age"
                    />
                    <input 
                        type="text" 
                        name="rating" 
                        value={inputs.rating}
                        onChange={handleChange}
                        placeholder="About your dog!"
                    />
                    <input 
                        type="text" 
                        name="walkDays" 
                        value={inputs.walkDays}
                        onChange={handleChange}
                        placeholder="Day to walk your dog"
                    />
                    <button>Submit</button>
                </form>

            </div>
        </>
    )
} 

export default SubmitDogForm