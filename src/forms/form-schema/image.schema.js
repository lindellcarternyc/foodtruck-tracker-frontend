import * as yup from 'yup'

export const IMAGE_URL_SCHEMA = yup.string()
  .trim()
  .url()
  .test(
    'only one image value',
    'Only add an image url OR an image file',
    function(imageURL) {
      const { imageUpload } = this.parent
      if (imageURL && imageUpload) {
        return false
      }
      return true
    }
  )
  .when(['imageUpload'], {
    is: imageUpload => !imageUpload,
    then: yup.string().required('Please enter an image URL')
  })

export const IMAGE_UPLOAD_SCHEMA = yup.mixed()
.test(
  'only one image value',
  'Only add and image file or an image url',
  function(imageUpload) {
    const { imageURL } = this.parent
    if (imageUpload && imageURL) {
      return false
    }
    return true
  }
)
.when(['imageURL'], {
  is: imageURL => !imageURL,
  then: yup.mixed().required('Please select an image file')
})