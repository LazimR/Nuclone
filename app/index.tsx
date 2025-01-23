
import { Link, useLocalSearchParams } from 'expo-router';

import { Text } from 'react-native';
import { View } from 'react-native';

export default function Page() {
    const { slug } = useLocalSearchParams();
    // Por algum motivo o o href esta dando erro, mas não afeta a aplicação
    return (
        <View>
        <Text>Pagina Inicial{slug}</Text>
        <Link href={"/about"}> Sobre </Link>
        {/* @ts-ignore */}
        <Link href={"/user/lazim"}> Lazim </Link> 
        {/* @ts-ignore */}
        </View>
    );
}
