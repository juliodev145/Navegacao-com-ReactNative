
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import  ButtonIcon  from "../components/ButtonIcon";
import  Header  from "../components/Header";
import  Title  from "../components/Title";

export default function Home() {
    const navigate = useNavigation();
    return (
        <View style={{
            flex: 1,
            padding: 32,
            paddingTop: 54,
        }}
        >
            <Header>
                <Title>Home</Title>
                <ButtonIcon
                    iconName="add-circle"
                    onPress={() => navigate.navigate("product")}
                />
            </Header>
        </View>
    )
}