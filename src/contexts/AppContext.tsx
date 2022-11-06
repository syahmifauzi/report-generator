import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  Reducer,
  useContext,
  useEffect,
  useMemo,
  useReducer
} from 'react'

import { compile } from '@/utils/compile'

interface IAppContext {
  template: string
  data: string
  output: string
  dispatch?: Dispatch<AppAction>
}

type AppState = {
  template: string
  data: string
  output: string
}

type AppAction = {
  type: string
  payload?: string
}

const initialState: IAppContext = {
  template: '',
  data: '',
  output: ''
}

const reducer: Reducer<AppState, AppAction> = (state, action) => {
  switch (action.type) {
    case 'template':
      return { ...state, template: action.payload || '' }
    case 'data':
      return { ...state, data: action.payload || '' }
    case 'output':
      localStorage.setItem('states', JSON.stringify(state))
      return { ...state, output: compile(state.template, state.data) }
    case 'retrieve_states':
      const states = localStorage.getItem('states')
      return { ...state, ...(states ? JSON.parse(states) : {}) }
    default:
      return { ...state }
  }
}

const AppContext = createContext<IAppContext>(initialState)

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'retrieve_states' })
  }, [])

  const contextValues = useMemo(() => {
    return { ...state, dispatch }
  }, [state, dispatch])

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
export default AppProvider
