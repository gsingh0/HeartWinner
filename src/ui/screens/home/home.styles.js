import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    home: {
        position: 'relative',
        flex: 1,
      },

    backdrop: {
        backgroundColor: 'yellow',
    },
    
    mainButtons: {
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        flexWrap:'wrap',
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'flex-end',
        backgroundColor: 'red'
    }
});