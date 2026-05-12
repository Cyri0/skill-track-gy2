import { useEffect, useState } from "react"
import Tile from "./components/Tile"

type Activity = {
  name: string,
  timeInSec: number
}

export type ActivityDay = {
  date: string,
  activities: Activity[]
}

const App = () => {
  const [activityDays, setActivityDays] = useState<ActivityDay[]>()
  const [maxActivityTime, setMaxActivityTime] = useState(0)


  useEffect(()=>{
    fetch("data.json")
    .then(response => response.json())
    .then(data => setActivityDays(data))
  },[])

  useEffect(()=>{
    if(!activityDays) return;

    let maxTime = 0;
    
    activityDays.forEach(day => {
      let curr = 0;

      day.activities.forEach(activity => {
        curr += activity.timeInSec
      })

      if(curr > maxTime)
        {maxTime = curr;}
    })
    setMaxActivityTime(maxTime);
  },[activityDays])

  return (
    <>
    <h1>{maxActivityTime}</h1>
    {
      activityDays ?
      <section className="tileWrapper">
        {activityDays.map(day => <Tile day={day} maxTime={maxActivityTime} />)}
      </section> :
      <div>Loading...</div>
    }
    </>
  )
}

export default App