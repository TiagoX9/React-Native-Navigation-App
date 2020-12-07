import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBarNavigation from './Navigators/TopBarNavigation';
import BottomBarNavigation from './Navigators/BottomTabNavigation';
import StackNavigator from './Navigators/StackNavigation';
import DrawerNavigation from './Navigators/DrawerNavigation';
import RouteParamsNavigation from './Navigators/RouteParamsNavigator';

export default function App() {
    return (
        <SafeAreaProvider>
            <RouteParamsNavigation />
        </SafeAreaProvider>
    );
}