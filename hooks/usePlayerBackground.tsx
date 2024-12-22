import { colors } from "@/constants/constants";
import { useEffect, useState } from "react";
import { getColors } from "react-native-image-colors";
import { IOSImageColors } from "react-native-image-colors/build/types";

export const usePlayerBackground = (image: string) => {
  const [imageColors, setImageColors] = useState<IOSImageColors | null>(null);

  useEffect(() => {
    getColors(image, {
      fallback: colors.background,
      cache: true,
      key: image,
    }).then((colors) => setImageColors(colors as IOSImageColors));
  }, [image]);

  return { imageColors };
};
