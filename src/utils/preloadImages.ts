import { withCloudinary } from './withCloudinary';

const preloadImage = (url: string) => {
  const img = new Image();
  img.src = withCloudinary(url);
  return img;
};

export const preloadImages = (images: string[]) => {
  const preloaded = [];
  for (let i = 0; i < images.length; i++) {
    preloaded.push(preloadImage(images[i]));
  }
};
