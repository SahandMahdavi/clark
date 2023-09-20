import React, { useMemo, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  RefreshControlProps,
} from "react-native";
import {
  Easing,
  withSpring,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { AppStackParamList } from "@app/navigators";
import { IProducts, useGetProducts } from "@app/api";
import { useSearch } from "@app/hooks";
import { CustomSearchBar, CustomText, ScreenTemplate } from "@app/components";
import { colors, icons } from "@app/theme";
import { EnumScreens } from "@app/constants/routes";
import { EnumLayoutGrid } from "@app/constants/enums";
import { sizing } from "@app/constants/sizing";
import ProductsItemGrid from "./components/products.component.grid";
import ProductsItemColumn from "./components/product.component.column";

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: sizing.medium,
  },
  gridViewList: {
    marginHorizontal: sizing.extraSmall,
  },
  columnViewList: {
    marginHorizontal: sizing.mediumTiny,
  },
  listEmptyContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  listEmptyNotice: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: sizing.medium,
    paddingHorizontal: sizing.medium,
  },
  iconContainer: {
    alignItems: "flex-end",
    paddingEnd: sizing.medium,
    paddingTop: sizing.extraSmall,
  },
});

const ProductsContainer: React.FC = () => {
  const toggleScale = useSharedValue(1);
  const [toggleLayout, setToggleLayout] = useState<boolean>(false);
  const { refetch, products, isLoading, refreshing } = useGetProducts();
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const {
    query,
    setQuery: setSearchQuery,
    filteredData,
  } = useSearch(!products ? [] : products);

  const onRefresh = () => {
    refetch();
  };

  const onSwitchLayoutPressed = () => {
    if (!toggleLayout) {
      toggleScale.value = withSpring(0.97);
      setToggleLayout(true);
    } else {
      toggleScale.value = withTiming(1, {
        duration: 1200,
        easing: Easing.inOut(Easing.ease),
      });
      setToggleLayout(false);
    }
  };

  const renderItem = ({ item }: { item: IProducts }): React.ReactElement => {
    const onItemPressed = () => {
      navigation.navigate(EnumScreens.PRODUCT_DETAILS, {
        product: item,
      });
    };

    const style = {
      transform: [{ scale: toggleScale }],
    };

    return (
      <>
        {toggleLayout ? (
          <ProductsItemGrid item={item} onPress={onItemPressed} style={style} />
        ) : (
          <ProductsItemColumn
            item={item}
            style={style}
            onPress={onItemPressed}
          />
        )}
      </>
    );
  };

  const refreshControl: React.ReactElement<RefreshControlProps> | undefined = (
    <RefreshControl
      onRefresh={onRefresh}
      refreshing={refreshing}
      tintColor={colors.tint}
    />
  );

  const listEmptyComponent = (): React.ReactElement => {
    return (
      <View style={styles.listEmptyContainer}>
        <CustomText
          style={styles.listEmptyNotice}
          text={`No items to show at this moment! \nPlease try again later`}
        />
      </View>
    );
  };

  const listHeaderComponent = useMemo(() => {
    const ICON = toggleLayout ? icons.reorderOutline : icons.gridOutline;

    return (
      <View style={styles.iconContainer}>
        <Icon
          name={ICON}
          color={colors.icon}
          size={sizing.extraLarge}
          onPress={onSwitchLayoutPressed}
        />
      </View>
    );
  }, [toggleLayout]);

  const PRODUCTS_DATA: Array<IProducts> =
    query.length > 0 ? filteredData : products;

  const NUM_COLUMNS = toggleLayout ? 2 : 1;
  const LIST_KEY = toggleLayout
    ? EnumLayoutGrid.GRID_VIEW
    : EnumLayoutGrid.COLUMN_VIEW;

  const LIST_STYLE = toggleLayout ? styles.gridViewList : styles.columnViewList;

  return (
    <ScreenTemplate useLoading={isLoading}>
      <CustomSearchBar onChangeText={setSearchQuery} />

      <FlatList
        key={LIST_KEY}
        style={LIST_STYLE}
        data={PRODUCTS_DATA}
        renderItem={renderItem}
        numColumns={NUM_COLUMNS}
        refreshControl={refreshControl}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={listEmptyComponent}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item) => item?.id?.toString()}
      />
    </ScreenTemplate>
  );
};

export default ProductsContainer;
