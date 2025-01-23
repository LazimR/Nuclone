
import { Link, useLocalSearchParams } from 'expo-router';

import { View } from 'react-native';
import { Text } from 'react-native';

export default function Page() {
    const { slug } = useLocalSearchParams();

    return (
        <View>
            <Text>Tela Sobre {slug}</Text>
            <Link href={"/"}> Inicio </Link>
        </View>
    );
}
