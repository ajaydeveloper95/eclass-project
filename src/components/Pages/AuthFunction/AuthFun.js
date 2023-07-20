import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthFun() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      navigate('/login')
    }
  }, [])
  return <></>
}

export default AuthFun
