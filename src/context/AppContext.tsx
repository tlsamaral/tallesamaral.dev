import React, { useState, useMemo } from 'react'

interface IAppContext {
  activeMenu: boolean
  setActiveMenu: (value: boolean) => void
}

export const AppContext = React.createContext({} as IAppContext)

interface ProviderProps {
  children: React.ReactNode
}

function AppProvider({ children }: ProviderProps) {
  const [activeMenu, setActiveMenu] = useState(false)
  const value = useMemo(
    () => ({
      activeMenu,
      setActiveMenu,
    }),
    [activeMenu, setActiveMenu],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
