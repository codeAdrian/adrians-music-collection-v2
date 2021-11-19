export const withCloudinary = (url: string, resize?: boolean) =>
  `https://res.cloudinary.com/adrianbece/image/fetch/${
    resize ? 'f_auto,w_400,c_scale' : 'f_auto'
  }/${url}`;
