import useSWR from "swr"
import fetcher from "../lib/fetcher"

export default function useFetchText(){
    const {data, error, isLoading} = useSWR("/api/getText", fetcher, {refreshInterval: 60000})
    if(isLoading){
        return "Fetching text 📲..."
    } 
    if(error){
        return "No text available."
    }
    return data.text
}