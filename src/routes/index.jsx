import { NavigationContainer } from "@react-navigation/native";
import  {BottomRoutes}  from "./BottomRoutes";
import  DrawerRoutes  from "./DrawerRoutes";
import  {StackRoutes } from "./StackRoutes";   

const TIPO_DE_NAVEGACAO = "drawer"; // drawer, stack, bottom

export function Routes() {
    return (
        <NavigationContainer>
            {TIPO_DE_NAVEGACAO === "drawer" && <DrawerRoutes />}
            {TIPO_DE_NAVEGACAO === "stack" && <StackRoutes />}
            {TIPO_DE_NAVEGACAO === "bottom" && <BottomRoutes />}
        </NavigationContainer>
    )
}