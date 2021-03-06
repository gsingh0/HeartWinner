import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentView: {
    flex: 1  
  },

  buttonView: {
    // bottom: 0,
    marginTop: 50,
    marginBottom: 700,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 600
  },

  buttonsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  subHeader: {
    backgroundColor : "white",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 0
  }
});