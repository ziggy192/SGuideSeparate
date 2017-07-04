/**
 * Created by Nghia on 6/13/2017.
 */
import React from 'react';
import { Text, View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.borderStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  borderStyle: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
}

export default CardSection
