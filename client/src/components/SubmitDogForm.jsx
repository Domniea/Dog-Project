
import { useState, useContext} from "react";
import { DogList } from "../context/DogListContext";
import axios from "axios";

function SubmitDogForm(props) {

    const dogs = useContext(DogList)
    const { editToggle, toggle, submit } = props

    const initInputs ={
        name: props.name || '',
        breed: props.breed || '',
        age: props.age || '',
        rating: props.rating || '',
        walkDays: props.walkDays || ""
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
        submit(inputs, props._id)
        if(editToggle) {
            toggle()
        }
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
                        placeholder="(Traning Level) /10"
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