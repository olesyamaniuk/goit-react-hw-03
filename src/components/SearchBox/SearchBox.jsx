// export default function SerchBox({value, onFilter}) {
//     return (
//     <div>
// <p >Find contacts by name</p>
// <input type="text"  value={value} onChange={e=>onFilter(e.target.value) }/>
//     </div>
       
//      )
//    }
import css from '../SearchBox/Search.module.css'
export default function SerchBox({value, onFilter}) {
    return (
    <div>
<p className={css.text}>Find contacts by name</p>
<input type="text" className={css.input} value={value} onChange={e=>onFilter(e.target.value) }/>
    </div>
       
     )
   }
   