import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, useWindowDimensions, Pressable } from 'react-native';
import Cidade from "@/models/Cidade";
import CitiesList from '@/components/CitiesList';
import CityInfo from '@/components/CityInfo';
import { router } from 'expo-router';
import { CitiesContext, CitiesContextState } from '@/context/CitiesContext';

export default function PrivateScreen() {

    // const [cidades, setCidades] = useState<Array<Cidade> | null>(null);
    const { cities: cidades } = useContext(CitiesContext) as CitiesContextState;
    const [cidade, setCidade] = useState<Cidade | null>(null);
    const { width, height } = useWindowDimensions();
    const isPortrait = width < height;

    const selecionarCidade = (cidade: Cidade) => {
        if (isPortrait)
            router.push(`/cidades/${cidade.id}`);
        else
            setCidade(cidade);
    }

    return (
        <View style={styles.container}>
            <View style={isPortrait ? styles.containerListPortaint : styles.containerListLandscape}>
                <Text>Cidades</Text>
                <CitiesList cidades={cidades} onSelected={selecionarCidade} />
                <Pressable style={styles.fabToLocation} onPress={() => {
                    router.push('/(private)/location');
                }}>
                    <Text style={styles.fabToLocationLabel}>+</Text>
                </Pressable>
                {/* <Pressable style={styles.fabToForm} onPress={() => {
                    router.push('/(private)/formCity');
                }}>
                    <Text style={styles.fabToLocationLabel}>+</Text>
                </Pressable> */}
                <Pressable style={styles.fabToForm} onPress={() => {
                    router.push('/(private)/333');
                }}>
                    <Text style={styles.fabToLocationLabel}>+</Text>
                </Pressable>
            </View>
            {!isPortrait && cidade && <CityInfo cidade={cidade} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    containerListPortaint: {
        width: "100%",
    },
    containerListLandscape: {
        width: "30%",
    },
    fabToLocation: {
        position: 'absolute',
        right: 10,
        bottom: 20,
        backgroundColor: "#7cb518",
        padding: 10,
        borderRadius: 50,
    },
    fabToForm: {
        position: 'absolute',
        right: 10,
        bottom: 80,
        backgroundColor: "#023047",
        padding: 10,
        borderRadius: 50,
    },
    fabToLocationLabel: {
        fontSize: 20,
    }
});