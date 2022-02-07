import { Button } from 'react-native-elements';
import * as firebase from 'firebase/auth';
import { useState } from 'react';
import sleep from '../../../../api/Thread';
import { Alert } from 'react-native';

export default function LogoutButton({ navigation }) {
    const [isLoading, setLoading] = useState(false);

    const logOut = async () => {
        try {
            setLoading(true);
            await sleep(3000);
            await firebase
                .getAuth()
                .signOut()
                .then((value) => {
                    Alert.alert("You have successfully logged out");
                    setLoading(false);
                }, (error) => {
                    Alert.alert("Error logging out: " + error);
                });
        } catch (err) {
            Alert.alert('There is something wrong!', err.message);
        }
    }

    return (
        <Button
            title="Log out"
            onPress={() => logOut()}
            loading={isLoading}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
                backgroundColor: 'red',
                borderRadius: 5,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
            }}
        />
    )
}