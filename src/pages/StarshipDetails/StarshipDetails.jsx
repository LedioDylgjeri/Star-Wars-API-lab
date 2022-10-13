import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { getDetails } from "../../service/sw-api";
import { Link } from "react-router-dom";

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
            <h3>Ship Name:{starshipDetails.name}</h3>
            <h3>Ship Model:{starshipDetails.model}</h3> 
            <Link to="/">
              <button type="submit">Return</button>  
            </Link>         
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
