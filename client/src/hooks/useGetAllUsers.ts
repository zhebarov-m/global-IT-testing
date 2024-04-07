import {useQuery} from "@tanstack/react-query";
import axios from "axios";


const API_URL_LESSONS = 'http://localhost:3000/'

async function fetchData(query: any) {
    const {data} = await axios.get(`${API_URL_LESSONS}?term=${query}`)
    return data
}

export interface IUser {
    name: string;
    phone: string;
    email: string;
    address: string;
    position_name: string;
    department: string;
    hire_date: string;
}


export default function useGetAllUsers(query: any) {

    return useQuery({
        queryKey: ['lesson', query],
        queryFn: () => fetchData(query),
    })
}
