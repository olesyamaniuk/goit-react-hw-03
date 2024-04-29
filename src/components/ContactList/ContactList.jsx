// import Contact from "../Contact/Contact";

// export default function ContactList({ contacts, onDelete }) {
//   return (
//     <ul>
//       {contacts.map((contact) => (
//         <li key={contact.id} >
//           <Contact data={contact} onDelete={onDelete} />
//         </li>
//       ))}
//     </ul>
//   );
// }

import Contact from "../Contact/Contact"
import css from "../ContactList/ContactList.module.css"

export default function ContactList( {contact , onDelete }) {
    return (
      <ul className={css.list}>
        {contact.map((contacts)=>(
          <li key={contacts.id} className={css.item}>
            <Contact data={contacts} onDelete={onDelete} />
          </li>
        ))}
      </ul>
       
     )
   }