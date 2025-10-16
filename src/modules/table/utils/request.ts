import { Person } from "../Table";
import axios from "axios";


const getData = async (): Promise<Person[]> => {
    const memberData:Person[] = await axios.get('http://localhost:5173/data.json').then(res => res.data);
     return memberData;
}


export {
getData
}