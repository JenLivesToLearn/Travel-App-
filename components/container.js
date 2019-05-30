import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
const container = function container(props) {
  return <View style={styles.container(props.padding)}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: function(padding) {
    return ({
      flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: padding
    })
   
  },
});

container.defaultProps = {
  padding:8
}
export default container;
