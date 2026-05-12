import { useEffect, useState } from "react"

type Activity = {
  name: string,
  timeInSec: number
}

type ActivityDay = {
  date: string,
  activities: Activity[]
}

const App = () => {
  const [activityDays, setActivityDays] = useState<ActivityDay[]>()

  useEffect(()=>{
    fetch("data.json")
    .then(response => response.json())
    .then(data => setActivityDays(data))
  },[])

  return (
    <>
    {
      activityDays ?
      <div>
        {activityDays.map(day => <div>{day.date}</div>)}
      </div> :
      <div>Loading...</div>
    }
    </>
  )
}

export default App