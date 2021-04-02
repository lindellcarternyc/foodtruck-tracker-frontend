import * as yup from 'yup'

import { IMAGE_UPLOAD_SCHEMA, IMAGE_URL_SCHEMA } from './image.schema'

const CUISINE_SCHEMA = yup.string()
  .trim()
  .required('Please add a cuisine type')
  .min(4, `Must be more that 4 characters`)
  .max(20, `Must be less than 20 characters`)

const TRUCK_NAME_SCHEMA = yup.string().trim()
  .required('Please enter a truck name')
  .min(5, 'A truck name must be at least 5 characters')
  .max(20, 'A truck name can not be longer that 20 characters')

export const CREATE_TRUCK_SCHEMA = yup.object().shape({
  truckname: TRUCK_NAME_SCHEMA,
  cuisine: CUISINE_SCHEMA,
  imageUrl: IMAGE_URL_SCHEMA,
  imageUpload: IMAGE_UPLOAD_SCHEMA,
}, [['imageUpload', 'imageUrl']])