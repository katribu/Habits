
import Habits from './components/Habit';
import List from './components/List';
import './App.css';
import Header from './components/Header';
import {useState, useEffect} from "react"
import Day from './components/Day';
import Month from './components/Month';
import { options, months } from './utils/selectMenus';
import { getHabitOptionList } from './utils/fetch';

export interface Habit {
  habits: string;
}

function App() {

  const [habit, setHabit] = useState<Habit[]>([{habits:""}])
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0])
  const [currentMonth, setMonth] = useState<typeof months[0]>(months[0])

  async function populateHabitList() {
    const habitArray = await getHabitOptionList()
    setHabit(habitArray)
  }

  useEffect(() => {
    populateHabitList()
  },[])

  const handleHabitChange = (selectedHabit: Habit) => {
    setHabit([selectedHabit, ...habit.filter(h => h !== selectedHabit)]);
  }; 
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div>
          <h5>Add a new habit to the list</h5>
          <Habits habit={habit} setHabit={setHabit} />
        </div>

        <div className="optionFields">
          <Month value={currentMonth} monthOptions={months} onChange={option => setMonth(option)}/>
          <Day options={options} value={value} onChange={option => setValue(option)}/>
          <List habits={habit}  habit={habit[0]} onChange={handleHabitChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
