import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { IProducts } from "@app/api";
import { colors } from "@app/theme/colors";
import { EnumScreens } from "@app/constants/routes";
import ProductsContainer from "@app/screens/product/product.container";
import ProductDetailsContainer from "@app/screens/productDetails/details.container";

export type AppStackParamList = {
  Products: undefined;
  ProductDetails: {
    product: IProducts;
  };
};

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EnumScreens.PRODUCTS}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Group
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.background,
          },
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <Stack.Screen
          name={EnumScreens.PRODUCTS}
          component={ProductsContainer}
        />
        <Stack.Screen
          options={{
            title: "",
            headerShown: true,
          }}
          name={EnumScreens.PRODUCT_DETAILS}
          component={ProductDetailsContainer}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer theme={Theme}>
      <AppStack />
    </NavigationContainer>
  );
};
