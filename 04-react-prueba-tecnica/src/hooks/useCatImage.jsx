import React, { useEffect, useState } from "react";

const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState();
  const CAT_PREFIX = "https://cataas.com";

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ")[0];
    //console.log(firstWord);

    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);
  return { imageUrl: `${CAT_PREFIX}${imageUrl}` };
};

export default useCatImage;
