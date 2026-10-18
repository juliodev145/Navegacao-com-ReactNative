import {View, Text, StyleSheet} from "react-native";

import {DrawerContentScrollView, DrawerItem, DrawerItemList,} from "@react-navigation/drawer";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function MeuMenu(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <MaterialIcons
                    name="account-circle"
                    size={70}
                    color="#7C3AED"
                />
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
        marginBottom: 10,
    },
});