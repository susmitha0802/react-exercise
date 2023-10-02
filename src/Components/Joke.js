import { useQuery} from 'react-query';
import axios from 'axios';
export const Joke = () => {

    const {isLoading, data, isError, error} = useQuery("random-joke", () => {
        return axios.get("https://official-joke-api.appspot.com/random_joke");
    });

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    if(isError) {
        return <h2>{error}</h2>
    }
    
    return (
        <div key={data?.data.id}> 
         <h1>{data?.data.setup}</h1>

         <h2>{data?.data.punchline}</h2>
        </div>
    );
}
