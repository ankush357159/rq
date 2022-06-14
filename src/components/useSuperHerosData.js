import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {  
    return axios.get("http://localhost:5000/superheroes")
  }

export const useSuperHerosData = (onSuccess, onError) =>   {
    return useQuery('super-heros', fetchSuperHeroes, {
        onSuccess,
        onError,
        select: (data) => {
          const superheroes = data.data.map(hero=>hero.name)
          return superheroes
        }
    })
}
 