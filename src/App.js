import { categories } from "./data"
import "./App.css"
import Cards from "./cards"
import Title from "./title"
function App() {
    return (
        <div>
            {/* <div style={{ width: "25%", display: "inline-block" }}>
                <img src={reactSvg} alt="" />
            </div> */}
            <div className="cards">
                <Title />
                <div className="cardWrapper" >
                    <Cards categories={categories} />
                </div>
            </div>
        </div>
    )
}
export default App;