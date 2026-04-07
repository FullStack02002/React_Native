import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>dashboard</Text>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})