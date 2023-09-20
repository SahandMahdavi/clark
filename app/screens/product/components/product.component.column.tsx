import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { CustomCardView, CustomText } from "@app/components";
import { IProducts } from "@app/api";
import { spacing } from "@app/constants/spacing";
import { sizing } from "@app/constants/sizing";

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.large,
    marginHorizontal: spacing.large,
  },
  image: {
    height: 196,
    resizeMode: "contain",
    borderTopLeftRadius: spacing.large,
    borderTopRightRadius: spacing.large,
  },
  detailsContainer: {
    paddingTop: spacing.medium,
    paddingBottom: spacing.extraLarge,
    paddingHorizontal: spacing.medium,
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
    marginTop: spacing.medium,
  },
});

interface Props {
  item: IProducts;
  onPress: () => void;
}

const ProductsItemColumn = (props: Props) => {
  const { item, onPress } = props;

  return (
    <CustomCardView onPress={onPress} containerStyle={styles.container}>
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
