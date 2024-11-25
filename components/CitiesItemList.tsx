import { View, Text, StyleSheet, Pressable } from "react-native";
import Cidade from "@/models/Cidade";

export default function CitiesItemList(props: { 
    item: Cidade | null, 
    onSelected: (cidade: Cidade) => void 
}) {
    const { item, onSelected } = props;
    const { nome, pais, atualizado} = item as Cidade;
    const atualizadoFormat = new Date(atualizado).toLocaleDateString("pt-BR");
    return (
        <Pressable style={styles.itemListContainer} onPress={() => onSelected(item as Cidade)}>
            <View style={styles.itemListHeader}>
                <Text style={styles.itemListHeaderText}>{nome}</Text>
                <Text style={styles.itemListHeaderText}>{pais}</Text>
            </View>
            <View style={styles.itemListContent}>
                <Text>{`${atualizadoFormat}`}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    itemListContainer: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
    },
    itemListHeader: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemListHeaderText: {
        fontSize: 20,
    },
    itemListContent: {
        alignItems: 'flex-end',
    }
})