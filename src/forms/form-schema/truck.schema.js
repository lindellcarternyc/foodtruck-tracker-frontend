import * as yup from 'yup'

const CUISINE_SCHEMA = yup.string()
  .trim()
  .required('Please add a cuisine type')
  .min(4, `Must be more that 4 characters`)
  .max(20, `Must be less than 20 characters`)

const IMAGE_URL_SCHEMA = yup.string()
  .trim()
  .url()
  .test(
    'only one image value',
    'Only add an image url OR an image file',
    function(imageUrl) {
      const { imageUpload } = this.parent
      if (imageUrl && imageUpload) {
        return false
      }
      return true
    }
  )
  .when(['imageUpload'], {
    is: imageUpload => !imageUpload,
    then: yup.string().required('Please enter an image URL')
  })

const IMAGE_UPLOAD_SCHEMA = yup.mixed()
  .test(
    'only one image value',
    'Only add and image file or an image url',
    function(imageUpload) {
      const { imageUrl } = this.parent
      if (imageUpload && imageUrl) {
        return false
      }
      return true
    }
  )
  .when(['imageUrl'], {
    is: imageUrl => !imageUrl,
    then: yup.mixed().required('Please select an image file')
  })

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