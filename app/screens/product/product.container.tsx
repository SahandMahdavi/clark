import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  RefreshControlProps,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { IProducts, useGetProducts } from "@app/api";
import { useSearch } from "@app/hooks";
import { CustomSearchBar, CustomText, ScreenTemplate } from "@app/components";
import { colors, icons } from "@app/theme";
import { spacing } from "@app/constants/spacing";
import { EnumScreens } from "@app/constants/routes";
import { EnumLayoutGrid } from "@app/constants/enums";
import { sizing } from "@app/constants/sizing";
import ProductsItemGrid from "./components/products.component.grid";
import ProductsItemColumn from "./components/product.component.column";

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: spacing.medium,
  },
  gridViewList: {
    marginHorizontal: sizing.extraSmall,
  },
  listEmptyContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  listEmptyNotice: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: spacing.medium,
    paddingHorizontal: spacing.medium,
  },
  iconContainer: {
    paddingEnd: sizing.medium,
    paddingTop: sizing.extraSmall,
    paddingBottom: sizing.extraSmall,
    alignItems: "flex-end",
  },
});

const ProductsContainer = (): React.ReactElement => {
  const navigation = useNavigation();
  const [toggleLayout, setToggleLayout] = useState<boolean>(false);
  const { refetch, products, isLoading, refreshing } = useGetProducts();
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
      setToggleLayout(true);
    } else {
      setToggleLayout(false);
    }
  };

  const renderItem = ({ item }: { item: IProducts }): React.ReactElement => {
    const onItemPressed = () => {
      navigation.navigate(EnumScreens.PRODUCT_DETAILS as any, {
        product: item,
      });
    };

    return (
      <>
        {toggleLayout ? (
          <ProductsItemGrid item={item} onPress={onItemPressed} />
        ) : (
          <ProductsItemColumn item={item} onPress={onItemPressed} />
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

  const PRODUCTS_DATA: Array<IProducts> =
    query.length > 0 ? filteredData : products;

  const ICON = toggleLayout ? icons.gridOutline : icons.reorderOutline;

  return (
    <ScreenTemplate useLoading={isLoading}>
      <CustomSearchBar onChangeText={setSearchQuery} />

      <View style={styles.iconContainer}>
        <Icon
          name={ICON}
          color={colors.icon}
          size={spacing.extraLarge}
          onPress={onSwitchLayoutPressed}
        />
      </View>

      {toggleLayout ? (
        <FlatList
          numColumns={2}
          data={PRODUCTS_DATA}
          windowSize={2 * 2 + 1}
          renderItem={renderItem}
          maxToRenderPerBatch={2}
          style={styles.gridViewList}
          key={EnumLayoutGrid.GRID_VIEW}
          refreshControl={refreshControl}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={listEmptyComponent}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(item) => item?.id?.toString()}
        />
      ) : (
        <FlatList
          numColumns={1}
          data={PRODUCTS_DATA}
          windowSize={2 * 2 + 1}
          renderItem={renderItem}
          maxToRenderPerBatch={2}
          refreshControl={refreshControl}
          key={EnumLayoutGrid.COLUMN_VIEW}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={listEmptyComponent}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(item) => item?.id?.toString()}
        />
      )}
    </ScreenTemplate>
  );
};

export default ProductsContainer;
