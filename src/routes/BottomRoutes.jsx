import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Profile } from "../pages/Profile";

const Bottom = createBottomTabNavigator();

export function BottomRoutes() {
    return (
        <Bottom.Navigator
            initialRouteName="profile"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#7C3AED',
                tabBarInactiveTintColor: '#9C43AF',
            }}
        >
            <Bottom.Screen
                name="home"
                component={Home}
            />
            <Bottom.Screen
                name="product"
                component={Product}
            />
            <Bottom.Screen
                name="profile"
                component={Profile}
            />

        </Bottom.Navigator>
    )
}