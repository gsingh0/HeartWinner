import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(220,20,60, 0.25)'
  },
  imgContainer: {
    flexDirection: 'row',
    height: 300,
    width: 300
  },

  text: {
    marginTop: '5%',
    fontSize: 25,
    fontFamily: 'Optima-BoldItalic',
    color: 'rgb(220,20,60)'
  },
  
  image: {
      resizeMode: 'cover',
      flex: 1,
      borderColor: 'black',
      borderWidth: 20,
      borderColor: 'rgba(220,20,60, 0.7)',
      borderRadius: 150,
      aspectRatio: 1 // Your aspect ratio
  },
  buttonsContainer: {
    top: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  }
});