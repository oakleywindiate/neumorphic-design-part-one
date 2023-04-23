import { PixelRatio } from 'react-native';

export const pixelSize = 30;
export const dpSize = PixelRatio.roundToNearestPixel(pixelSize / PixelRatio.get());

export const margins = {
    small: PixelRatio.roundToNearestPixel(20 / PixelRatio.get()),
    medium: PixelRatio.roundToNearestPixel(40 / PixelRatio.get()),
    large: PixelRatio.roundToNearestPixel(60 / PixelRatio.get()),
  };