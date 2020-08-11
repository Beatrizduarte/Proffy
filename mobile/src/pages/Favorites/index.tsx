import React, {useState} from 'react';
import { View,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {  useFocusEffect } from '@react-navigation/native'

import styles from './styles';
import PageHeader from '../../components/pageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';

function Favorites() {
  const [favorite, setFavorite] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorite(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() =>{
    loadFavorites();
  })

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {favorite.map((teacher: Teacher) =>{
          return(
            <TeacherItem 
              key={teacher.id}
              teacher={teacher}
              favorited
            />
          );
        })}
        
      </ScrollView>
    </View>
  );
}

export default Favorites;