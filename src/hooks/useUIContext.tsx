import {useContext} from 'react'
import { UIContext } from '../contexts'

export const useUI = () => {
  return useContext(UIContext)
}
