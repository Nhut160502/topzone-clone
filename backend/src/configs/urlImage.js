export const urlImage = (folder, image) => {
  return `${process.env.HOST}:${process.env.PORT}/${folder}/${image}`;
};
