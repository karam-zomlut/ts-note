import * as yup from 'yup';

const todoSchema = yup
  .object({
    title: yup.string().required(),
    description: yup.string(),
  })
  .required();

export default todoSchema;
