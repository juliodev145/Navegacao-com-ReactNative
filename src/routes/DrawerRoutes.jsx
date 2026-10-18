import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Product from "../screens/Product";
import Profile from "../screens/Profile";
import MeuMenu from "../components/MeuMenu";
import Settings from "../screens/Settings";
import { MaterialIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MeuMenu {...props} />}
            initialRouteName="home"
            screenOptions={{
                headerShown: true,
                headerTintColor: "#111827",
                headerStyle: { backgroundColor: "#FFFFFF" },            
                drawerPosition: "left",
                drawerType: "front",
                drawerActiveTintColor: "#7C3AED",
                drawerActiveBackgroundColor: "#EDE9FE",
                drawerInactiveTintColor: "#6B7280",
                drawerLabelStyle: { fontSize: 15, fontWeight: "600" },
                drawerStyle: { backgroundColor: "#FFFFFF", width: 260 },
            }}
        >
            <Drawer.Screen
                name="home"
                component={Home}
                options={{
                    drawerLabel: "Início",
                    title: "Início",
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="product"
                component={Product}
                options={{
                    drawerLabel: "Produtos",
                    title: "Produto",
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="inventory-2" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="profile"
                component={Profile}
                options={{
                    drawerLabel: "Perfil",
                    title: "Perfil",
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="person" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="settings"
                component={Settings}
                options={{
                    drawerLabel: "Configurações",
                    title: "Configurações",
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="settings" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}