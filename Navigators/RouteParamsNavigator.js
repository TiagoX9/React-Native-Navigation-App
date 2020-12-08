import * as React from "react";
import { View, Button, Text, Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

const data = require('../assets/data.json')

const CustomCard = (props) => {
    return (
        <TouchableOpacity
        style={{ 
            width: 200, 
            height: 200,
            margin: 10, 
            justifyContent: 'center', 
            alignItems: 'center',
            borderWidth: 2
        }}
        onPress={() => props.navigation.navigate("Single", 
        { item: props.item, header: props.item.name })}
        > 
            <Text style={{ color: 'white' }}>{props.item.name}</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold'}}>{props.item.title}</Text> 
        </TouchableOpacity>
    )
}

const Single = (props) => {
    const item = props.route.params.item;
    return (
        <View
        style={{ 
            width: '100%', 
            height: '100%', 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: "#03cafc" 
        }}
        >   
            <Text style={{ color: 'white' }}>{item.name}</Text>
            <Text style={{ 
                fontSize: 24, 
                fontWeight: 'bold',
                color: 'white'
                }}>{item.title}</Text>
            <Button 
            title="Go to Home" 
            onPress={() => props.navigation.navigate("Home")} />
        </View>
    )
}

function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#48d969",
      }}
    >
      {data.map(x => {
          return(
            <CustomCard key={Math.random()} item={x} navigation={navigation} />
          )
      })}
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "green" },
        }}
      />
      <Stack.Screen
        name="Single"
        component={Single}
        options={
            ({ route }) => ({ title: route.params.header})
        }
      />
    </Stack.Navigator>
  );
}

export default function RouteParamsNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
