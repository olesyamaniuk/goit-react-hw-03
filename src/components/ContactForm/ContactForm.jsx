// import{Form, Formik, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import css from "../ContactForm/ContactForm.module.css"
// import { nanoid } from 'nanoid'

// const UserSchema = Yup.object().shape({
//   name:Yup.string()
//   .min(3,"Min 3 characters!!!")
//   .max(50,"Max 50 characters!!!")
//   .required("Is required!!!"),
//   number:Yup.string()
//   .min(3,"Min 3 characters!!!")
//   .max(50,"Max 50 characters!!!")
//   .required("Is required!!!"),
// })

// export default function ContactForm({onAdd}) {
//   const nameId = nanoid();
//   const numberId= nanoid();

//   const handleSubmit = (values, actions) => {
//     const newContId = {...values, id: nanoid()};
//     onAdd(newContId);
//     actions.resetForm();
//   };
//     return (
//     <Formik
//      initialValues={{
//       name:"",
//       number:"",
//     }} 
//     validationSchema={UserSchema}
//     onSubmit={handleSubmit}>
//     <Form >
//       <div >
//         <label htmlFor="nameId" >Name</label>
//         <Field  name ="name" id={nameId} />
//         <ErrorMessage
            
//             name="name"
//             component="span"
//           />
//       </div>

//       <div className={css.formElem}>
//         <label htmlFor="numberId" >Number</label>
//         <Field  name ="number" id={numberId} />
//         <ErrorMessage
            
//             name="number"
//             component="span"
//           />
//       </div>
     
//       <button >Add Contact</button>
//     </Form>

//     </Formik>
       
//      )
//    }

import{Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css"
import { nanoid } from 'nanoid'

const UserSchema = Yup.object().shape({
  name:Yup.string()
  .min(3,"Min 3 characters!!!")
  .max(50,"Max 50 characters!!!")
  .required("Is required!!!"),
  number:Yup.string()
  .min(3,"Min 3 characters!!!")
  .max(50,"Max 50 characters!!!")
  .required("Is required!!!"),
})

export default function ContactForm({onAdd}) {
  const nameId = nanoid();
  const numberId= nanoid();

  const handleSubmit = (values, actions) => {
    const newContId = {...values, id: nanoid()};
    onAdd(newContId);
    actions.resetForm();
  };
    return (
    <Formik
     initialValues={{
      name:"",
      number:"",
    }} 
    validationSchema={UserSchema}
    onSubmit={handleSubmit}>
    <Form className={css.form}>
      <div className={css.formElem}>
        <label htmlFor="nameId" className={css.text}>Name</label>
        <Field className={css.input} name ="name" id={nameId} />
        <ErrorMessage
            className={css.error}
            name="name"
            component="span"
          />
      </div>

      <div className={css.formElem}>
        <label htmlFor="numberId" className={css.text}>Number</label>
        <Field className={css.input} name ="number" id={numberId} />
        <ErrorMessage
            className={css.error}
            name="number"
            component="span"
          />
      </div>
     
      <button className={css.btn}>Add Contact</button>
    </Form>

    </Formik>
       
     )
   }