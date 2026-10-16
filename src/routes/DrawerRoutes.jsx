import { createDrawerNavigator } from "@react-navigation/drawer";
import  Home  from "../pages/Home";
import  Product  from "../pages/Product";
import  Profile  from "../pages/Profile";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            initialRouteName="profile"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name="home"
                component={Home}
            />
            <Drawer.Screen
                name="product"
                component={Product}
            />
            <Drawer.Screen
                name="profile"
                component={Profile}
            />
        </Drawer.Navigator>
    )
}