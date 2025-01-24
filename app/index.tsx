
import { Link, useLocalSearchParams, useRouter } from 'expo-router';

import { StyleSheet, Text, Button, ScrollView } from 'react-native';
import { View } from 'react-native';
import ImageUser from '@/components/imageUser';

export default function Page() {
    const { slug } = useLocalSearchParams();
    const router = useRouter();
    const user = "Lazim";
    const handleShowRoutes = () => {
        console.log(router);
    };
    return (
        <ScrollView style={styles.container}>
        <View style={styles.header}>
            <View>
            <ImageUser/>
            </View>
            <Text style={{color:'white'}}>Olá, {user}</Text>
        </View>
        <View style={styles.main}>
            <Text>Conta</Text>

            <ScrollView 
                style={styles.horizontalScrollView} 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                >
                <Text style={styles.scrollItem}>Pix</Text>
                <Text style={styles.scrollItem}>Pagar</Text>
                <Text style={styles.scrollItem}>Transferir</Text>
                <Text style={styles.scrollItem}>Depositar</Text>
                <Text style={styles.scrollItem}>Pegar Emprestimo</Text>
            </ScrollView>
            <Link href={{pathname:"/user/lazim"}}> Lazim </Link> 
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#820ad1',
        padding: 0,
    },
    text: {
        color: 'white'
    },
    horizontalScrollView:{
        marginTop: 20,
        marginLeft: 20,
        height: 50,
    },
    scrollContent: {
        flexDirection: 'row',
        paddingHorizontal: 10, // Espaçamento interno do contêiner
      },
    scrollItem: {
        marginRight: 16, // Espaço entre os itens
        fontSize: 16,
      },
    header: {
        marginTop: 10,
        minHeight: 100
    },
    main: {
        backgroundColor: 'white',
        flex: 1,
    },

})

