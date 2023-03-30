import useSWR from "swr"
import fetcher from "../lib/fetcher"

export default function useFetchText(){
    //change to return isLoaded bool and text object containing text and senderNumber
    //conditionally render spinner if isLoaded is false
    const {data, error, isLoading} = useSWR("/api/getText", fetcher, {refreshInterval: 60000})
    if(error || !data?.text || !data?.senderNumber){
        return "No text available."
    }
    return [isLoading, data.text, data.senderNumber]
}