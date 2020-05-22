import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WS from 'react-native-websocket'

export default function App () {
  return (
    <View style={{ flex: 1 }}>
      <WS
        ref={ref => {
          this.ws = ref
        }}
        url='wss://echo.websocket.org/'
        onOpen={() => {
          console.log('Open!')
          this.ws.send('Hello')
        }}
        onMessage={console.log}
        onError={console.log}
        onClose={console.log}
        reconnect // Will try to reconnect onClose
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
