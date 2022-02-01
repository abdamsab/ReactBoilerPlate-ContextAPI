import React, { useState, useContext } from 'react'

const AppContext = React.createContext()


const AppProvider = ({ children }) => {

	const msg = 'Hello React'  //test props

	return (
		<AppContext.Provider
			value ={{
				msg,
			}}
		>
		 {children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppProvider }