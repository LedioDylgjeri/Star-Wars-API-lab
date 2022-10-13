import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllStarships } from "../../service/sw-api"

const StarshipPage = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipData()
  }, [])
  
  return (
    <>
      <div>
        <h2 class="header">STAR WARS STARSHIPS</h2>
        <div>
          {starships.map(starship => 
            <Link key={starship.name} to='/starship' state={{starship}}>
              <div className="starship">
                <h3 class="starship-name">{starship.name}</h3>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default StarshipPage