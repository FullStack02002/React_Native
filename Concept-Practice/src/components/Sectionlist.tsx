import React from 'react';
import { SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const DATA = [
  {
    id:1,
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    id:2,
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    id:3,
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    id:4,
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Sectionlist = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top','bottom']}>
        <SectionList
        sections={DATA}
        keyExtractor={(item)=>item}
        renderItem={({item})=>(
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Sectionlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});