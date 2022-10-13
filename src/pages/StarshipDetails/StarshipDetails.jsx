import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { getDetails } from "../../service/sw-api";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <div>
        {starshipDetails.name ?
          <>
            <h3>{starshipDetails.name}</h3>
            <h3>{starshipDetails.model}</h3>          
          </>
          :
          <>
          </>
        }
      </div>
    </>
  )

}

export default StarshipDetails
