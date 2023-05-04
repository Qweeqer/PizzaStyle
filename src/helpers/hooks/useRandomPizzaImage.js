import { useState, useEffect } from "react";
import { getRandomPizzaImage } from "../utils/imageFetcher";

export function useRandomPizzaImage() {
  const [randomPizzaImage, setRandomPizzaImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      const imageUrl = await getRandomPizzaImage();
      setRandomPizzaImage(imageUrl);
      setIsLoading(false);
    }

    fetchImage();
  }, []);

  return { randomPizzaImage, isLoading };
}
