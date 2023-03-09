import {useState} from "react"
import {IState as Props} from "../App"


interface IProps {
    habits: Props["habits"]
    habit: Props["habits"][0]
    onChange: (habit: Props["habits"][0]) => void
}


export default function List({habits, onChange, habit}: IProps) {

const [isOpen, setIsOpen] = useState(false)

    const selectHabit = (option: IProps["habit"]) => {
        onChange(option)
        console.log(option)
    }
    
    return (
        <div>
            <div className="optionsContainer" onBlur={()=>setIsOpen(false)} onClick={()=> setIsOpen(!isOpen)}>
            <span>{habit.habits}</span>
            <div className="buttonsContainer">
                <button 
                className="xBtn" 
                onClick={(e) => {
                    e.stopPropagation()
                }}>
                    &times; 
                </button>
                <div className="divider"></div>
                <div className="caret"></div>
            </div>
            </div>

            <div className="habitOptions">
                <ul className={`habitList ${isOpen? "show":""}`}>
                {habits.map((habit,i) => (
                            <li 
                            key={i} 
                            className="date"
                            onClick={(e)=>{
                                selectHabit(habit)
                                e.stopPropagation()
                                setIsOpen(false)
                            }}
                            >
                                {habit.habits}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}