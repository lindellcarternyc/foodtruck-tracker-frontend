import * as yup from 'yup'

import { IMAGE_UPLOAD_SCHEMA, IMAGE_URL_SCHEMA } from './image.schema'

export const MENU_ITEM_NAME_SCHEMA = yup.string().trim()
  .required('Please enter an item name')
  .min(3, 'An item name must be at least 3 characters')
  .max(20, 'An item name can not be longer that 20 characters')

export const MENU_ITEM_DESCRIPTION_SCHEMA = yup.string().trim()
  .required('Please enter an item description')
  .min(3, 'An item description must be at least 3 characters')
  .max(20, 'An item description can not be longer that 20 characters')


export const CREATE_MENU_ITEM_SCHEMA = yup.object().shape({
  itemName: MENU_ITEM_NAME_SCHEMA,
  itemDescription: MENU_ITEM_DESCRIPTION_SCHEMA,
  imageURL: IMAGE_URL_SCHEMA,
  imageUpload: IMAGE_UPLOAD_SCHEMA
}, [['imageUpload', 'imageURL']])

export const EDIT_MENU_ITEM_SCHEMA = yup.object().shape({
  itemName: MENU_ITEM_NAME_SCHEMA,
  itemDescription: MENU_ITEM_DESCRIPTION_SCHEMA,
  imageURL: IMAGE_URL_SCHEMA,
  imageUpload: IMAGE_UPLOAD_SCHEMA
}, [['imageUpload', 'imageURL']])