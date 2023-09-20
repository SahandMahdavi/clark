import React from "react";
import { View, Image, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { CustomCardView, CustomText } from "@app/components";
import { IProducts } from "@app/api";
import { sizing } from "@app/constants/sizing";

const styles = StyleSheet.create({
  container: {
    marginTop: sizing.large,
    marginHorizontal: sizing.medium,
  },
  image: {
    height: 196,
    resizeMode: "contain",
    borderTopLeftRadius: sizing.large,
    borderTopRightRadius: sizing.large,
  },
  detailsContainer: {
    paddingTop: sizing.medium,
    paddingBottom: sizing.extraLarge,
    paddingHorizontal: sizing.medium,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    maxWidth: 200,
    fontWeight: "800",
    fontSize: sizing.medium,
  },
  price: {
    fontWeight: "700",
  },
  description: {
    marginTop: sizing.medium,
  },
});

interface Props {
  style?: any;
  item: IProducts;
  onPress: () => void;
}

const ProductsItemColumn = (props: Props): React.ReactElement => {
  const { item, style, onPress } = props;

  return (
    <CustomCardView
      onPress={onPress}
      containerStyle={[styles.container, style]}
    >
      <Image source={{ uri: item?.image }} style={styles.image} />

      <View style={styles.detailsContainer}>
        <View style={styles.rowContainer}>
          <CustomText
            text={item?.title}
            numberOfLines={2}
            style={styles.title}
          />

          <CustomText style={styles.price} text={item?.price + " " + "$"} />
        </View>

        <CustomText
          numberOfLines={2}
          ellipsizeMode="tail"
          text={item?.description}
          style={styles.description}
        />
      </View>
    </CustomCardView>
  );
};

export default ProductsItemColumn;
