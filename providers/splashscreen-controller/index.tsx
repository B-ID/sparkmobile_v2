import { View, Text } from 'react-native'
import React, { FC,PropsWithChildren, useEffect } from 'react'
import { SplashScreen } from 'expo-router'

type Props = PropsWithChildren

SplashScreen.preventAutoHideAsync

const SplashScreehController:FC<Props> = ({children}) => {
    const [isAuthLoading, saetIsAuthLoading] = React.useState(true);

    useEffect(() => {
        if (isAuthLoading) return
        SplashScreen.hideAsync()
    }, [isAuthLoading])

  return (
    <>
    {children}
    </>
  )
}

export default SplashScreehController