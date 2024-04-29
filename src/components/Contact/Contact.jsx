
// export default function Contact({ data, onDelete }) {
//     const { id, name, number } = data;
  
//     const handleDelete = () => {
//       onDelete(id);
//     };
  
//     return (
//       <div>
//         <p>Name: {name}</p>
//         <p>Number: {number}</p>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     );
//   }

import { FaPhoneAlt,FaRegSmile } from "react-icons/fa";
import css from "../Contact/Contact.module.css"
export default function Contact({data:{ name, number, id}, onDelete}) {
    return (
  <div className={css.cont}>
    <div>
<p><FaRegSmile className={css.icon}/>{name}</p>
<p><FaPhoneAlt className={css.icon}/>{number}</p>
</div>
<button className={css.btn} onClick={()=>onDelete(id)}>Delete</button>
  </div>   

     )
   }