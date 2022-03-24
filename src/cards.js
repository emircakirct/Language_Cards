import { useState } from "react"
import ContentComponent from './contentComponent'
function Cards(props) {
    const [arrayIndex, setArrayIndex] = useState([])
    const handleClick = (index) => {
        if (!arrayIndex.includes(index)) {

            setArrayIndex([...arrayIndex, index])
        }
        else {
            let newArray = arrayIndex.filter(i => i !== index)
            setArrayIndex(newArray)
        }
    }
    return (
        <>
            {props.categories.map((language, index) => { //index=0
                let existsOrNot = arrayIndex.includes(index) //false
                return <ContentComponent existsOrNot={existsOrNot} index={index} language={language} handleClick={handleClick} />
            })}
        </>
    )
}
export default Cards