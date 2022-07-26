import { api } from '../Services/api'
import { useState, createContext, useContext, useCallback } from 'react'

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@reactAlunos:token')
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`
      return { token }
    }
    return {}
  })

  const signin = useCallback(async ({ email, password }) => {
    const response = await api.post('account/loginUser', { email, password })
    const { token } = response.data
    localStorage.setItem('@reactAlunos:token', token)
    api.defaults.headers.Authorization = `Bearer ${token}`
    setData({ token })
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem('@reactAlunos:token')
    setData({})
  }, [])

  return (
    <AuthContext.Provider value={{ signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
