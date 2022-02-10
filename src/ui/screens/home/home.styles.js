import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    home: {
        position: 'relative',
        flex: 1,
        backgroundColor: 'black'
      },

    backdrop: {
        backgroundColor: 'yellow',
        height: 100
    },

    scrollView: {
        
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
        backgroundColor: 'rgba(220,20,60, 0.5)',
        
        
    }
});