import React, { useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IconsConfigProps {
  children: React.ReactNode;
}

const IconsConfigProvider = (props: IconsConfigProps): React.ReactElement => {
  const { children } = props;

  useEffect(() => {
    async function loadFonts() {
      try {
        await Ionicons.loadFont();
      } catch (error) {
        console.error("Error loading fonts =>", error);
      }
    }
    loadFonts();
  }, []);

  return <>{children}</>;
};

export default IconsConfigProvider;
