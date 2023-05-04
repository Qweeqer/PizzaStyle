export async function getRandomPizzaImage() {
  const response = await fetch("https://loremflickr.com/800/600/pizza");
  const imageUrl = response.url;
  return imageUrl;
}
