import { useState, useContext } from 'react'
import { WalkerList } from '../context/WalkerListContext'

function SubmitWalkerForm(props) {

    const { editToggle, toggle, submit, _id } = props

    const initInputs ={
        name: props.name || '',
        age: props.age || '',
        rating: props.rating || '',
        contact: props.contact || ''
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
        submit(inputs, _id)
        setInputs({
            
        })
        if(editToggle) {
            toggle()
        }
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