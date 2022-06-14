// import axios from "axios";
// import { useQuery } from "react-query";
import { useSuperHerosData } from "./useSuperHerosData";

// const fetchSuperHeroes = () => {
  
//   return axios.get("http://localhost:5000/superheroes")
// }

export const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    console.log('Perform side effect after data fetching')
  }

  const onError = () => {
    console.log('Perform side effect on data failure')
  }


  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHerosData(onSuccess, onError)
  // useQuery("super-heroes", fetchSuperHeros, 
  // {
  //   // staleTime:10000,
  //   // refetchOnMount: true,
  //   // refetchOnWindowFocus: false,
  //   // refetchInterval: 2000,
  //   // refetchIntervalInBackground: true,
  //   // enabled:false,
  // },
  // {
  //   onSuccess,
  //   onError,
  //   select: (data) => {
  //     const superheroes = data.data.map(hero=>hero.name)
  //     return superheroes
  //   }
  // }
  // );

  console.log({isLoading, isFetching})

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heros</button>
      {/* {data?.superheroes.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}
      {
        data.map((heroName)=> {
          return <div key={heroName}>{heroName}</div>
        })
      }
    </>
  );
};
