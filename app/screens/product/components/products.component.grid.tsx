import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { CustomCardView, CustomText } from "@app/components";
import { IProducts } from "@app/api";
import { spacing } from "@app/constants/spacing";
import { sizing } from "@app/constants/sizing";

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "space-between",
    marginTop: spacing.large,
    marginHorizontal: sizing.extraSmall,
  },
  image: {
    height: 150,
    resizeMode: "contain",
    borderTopLeftRadius: spacing.large,
    borderTopRightRadius: spacing.large,
  },
  detailsContainer: {
    paddingTop: spacing.medium,
    paddingBottom: spacing.extraLarge,
    paddingHorizontal: spacing.medium,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
  },
  price: {
    fontWeight: "700",
    marginTop: sizing.medium,
  },
  description: {
    marginTop: spacing.medium,
  },
});

interface Props {
  item: IProducts;
  onPress: () => void;
}

const ProductsItemGrid = (props: Props) => {
  const { item, onPress } = props;

  return (
    <CustomCardView onPress={onPress} containerStyle={styles.container}>
      <Image source={{ uri: item?.image }} style={styles.image} />

      <View style={styles.detailsContainer}>
        <CustomText numberOfLines={2} text={item?.title} style={styles.title} />

        <CustomText style={styles.price} text={item?.price + " " + "$"} />

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

export default ProductsItemGrid;
