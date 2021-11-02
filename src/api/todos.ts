// export const getTodos = () => {
//     return new Promise((resolve) => {

//         setTimeout(() => {
//             resolve([
//                 {
//                     "id": 336.5293574533601,
//                     "description": "bcxvb",
//                     "completed": false,
//                     "favorite": true
//                 },
//                 {
//                     "id": 336.5293572533601,
//                     "description": "343g34g",
//                     "completed": true,
//                     "favorite": false
//                 },
//                 {
//                     "id": 326.5297474533601,
//                     "description": "g3rger",
//                     "completed": true,
//                     "favorite": true
//                 },
//                 {
//                     "id": 133.5293554533601,
//                     "description": "231f",
//                     "completed": false,
//                     "favorite": false
//                 },
//                 {
//                     "id": 245.5293554743601,
//                     "description": "sdyh",
//                     "completed": true,
//                     "favorite": false
//                 },
//                 {
//                     "id": 162.5173554533601,
//                     "description": "bcgf",
//                     "completed": true,
//                     "favorite": true
//                 }
//             ])
//         }, 300)
//     })
// }

import { ListItem } from "../redux/thunk";

export const getTodos = async (data: ListItem) => {
    await fetch('http://localhost:8000/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
  }