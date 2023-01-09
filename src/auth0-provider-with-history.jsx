import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Auth0ProviderWithHistory({ children }) {
  const navigate = useNavigate()

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain="dev-splnv432dhw4k6rz.jp.auth0.com"
      clientId="IwMaf63hZTLxtxikQA3duoZAmnbviWrD"
      redirectUri="http://localhost:8080"
      cacheLocation="localstorage"
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}
