import useSWR from "swr"
import fetcher from "../lib/fetcher"

export default function useFetchText(){
    const {data, error} = useSWR("/api/getText", fetcher, {refreshInterval: 60000}) 
    if(data){
        return data.text
    }
    return "No text available."
}