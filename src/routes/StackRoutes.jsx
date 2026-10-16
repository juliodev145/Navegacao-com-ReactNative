import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="home"
                component={Home}
            />
            <Stack.Screen
                name="product"
                component={Product}
                options={{
                    headerShown: true,
                    headerTitle: 'Listagem de produtos',
                }}
            />
            </Stack.Navigator>
    )
}