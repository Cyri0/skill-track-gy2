import type { ActivityDay } from "../App"

type TilePropsType = {
    day: ActivityDay,
    maxTime: number
}

const Tile = ({day, maxTime}:TilePropsType) => {
  
  let sumTime = 0;
  day.activities.forEach(activity => sumTime += activity.timeInSec)

  const calculateColor = () => {
    if(sumTime > maxTime * 0.8) return "var(--my-color)"
    if(sumTime > maxTime * 0.5) return "oklch(from var(--my-color) l c h / 0.6 )"
    if(sumTime > maxTime * 0.2) return "oklch(from var(--my-color) l c h / 0.3 )"
    if(sumTime > 0) return "oklch(from var(--my-color) l c h / 0.1 )"
    return "gainsboro"
  }

  return (
    <div 
    className="tile" 
    title={day.date}
    style={{ background: calculateColor() }}
    ></div>
  )
}

export default Tile