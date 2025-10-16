import { Person } from "../Table";
import axios from "axios";


const getData = async (): Promise<Person[]> => {
    const memberData:Person[] = [
  { "id": 1, "firstName": "John", "lastName": "Doe" },
  { "id": 2, "firstName": "Jane", "lastName": "Smith" },
  { "id": 3, "firstName": "Alice", "lastName": "Johnson" },
  { "id": 4, "firstName": "Michael", "lastName": "Brown" },
  { "id": 5, "firstName": "Emily", "lastName": "Davis" },
  { "id": 6, "firstName": "Daniel", "lastName": "Miller" },
  { "id": 7, "firstName": "Sophia", "lastName": "Wilson" },
  { "id": 8, "firstName": "David", "lastName": "Moore" },
  { "id": 9, "firstName": "Olivia", "lastName": "Taylor" },
  { "id": 10, "firstName": "James", "lastName": "Anderson" },
  { "id": 11, "firstName": "Isabella", "lastName": "Thomas" },
  { "id": 12, "firstName": "Ethan", "lastName": "Jackson" },
  { "id": 13, "firstName": "Mia", "lastName": "White" },
  { "id": 14, "firstName": "Alexander", "lastName": "Harris" },
  { "id": 15, "firstName": "Charlotte", "lastName": "Martin" },
  { "id": 16, "firstName": "Benjamin", "lastName": "Thompson" },
  { "id": 17, "firstName": "Amelia", "lastName": "Garcia" },
  { "id": 18, "firstName": "Lucas", "lastName": "Martinez" },
  { "id": 19, "firstName": "Harper", "lastName": "Robinson" },
  { "id": 20, "firstName": "Mason", "lastName": "Clark" },
  { "id": 21, "firstName": "Evelyn", "lastName": "Rodriguez" },
  { "id": 22, "firstName": "Logan", "lastName": "Lewis" },
  { "id": 23, "firstName": "Abigail", "lastName": "Lee" },
  { "id": 24, "firstName": "Jacob", "lastName": "Walker" },
  { "id": 25, "firstName": "Ella", "lastName": "Hall" }
]
;
     return memberData;
}


export {
getData
}
