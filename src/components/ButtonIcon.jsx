import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function ButtonIcon({ iconName, ...rest}){
    return (
        <TouchableOpacity {...rest}>
            <MaterialIcons
                name={iconName}
                size = {24}
            />
        </TouchableOpacity>
    )
}