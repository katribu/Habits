import {useState} from "react"


type SelectOption = {
    label: string
    value: string
}


type SelectProps = {
    value?: SelectOption
    options: SelectOption[]
    onChange: (value:SelectOption | undefined) => void
}

export default function Day({value, options, onChange}: SelectProps){
    const [isOpen, setIsOpen] = useState(false)

    const clearOptions = () => {
        onChange(undefined)
    }

    const selectOption = (option: SelectOption) => {
        onChange(option)
    }
    return (
        <div>
            <div className="optionsContainer" onBlur={()=>setIsOpen(false)} onClick={()=> setIsOpen(!isOpen)}>
                <span>{value?.label}</span>
                <div className="buttonsContainer">
                    <button 
                    className="xBtn" 
                    onClick={(e) => {
                        e.stopPropagation()
                        clearOptions()
                    }}>
                        &times; 
                    </button>
                    <div className="divider"></div>
                    <div className="caret"></div>
                </div>
            </div>

            <div className="dateOptions" >
                <ul className={`dateList ${isOpen? "show":""}`}>
                    {options.map(option => (
                        <li 
                        key={option.value} 
                        className="date"
                        onClick={(e) => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                        }}

                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}