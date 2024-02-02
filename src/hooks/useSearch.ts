import { useState } from "react";
import axios from "axios";

const useSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>("");

  const search = async (query: string) => {
    if (!query || query === "") {
      setLoading(false);
      setSearchResults([]);
      return { searchResults, loading, error, search };
    }
    try {
      setError(null);
      setLoading(true);
      const response = await axios.get(
        `https://api.bing.microsoft.com/v7.0/search?q=${query}`,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": import.meta.env.VITE_BING_API_KEY,
          },
        },
      );
      setSearchResults(response.data.webPages.value);
    } catch (error) {
      setError("Error fetching search results");
    } finally {
      setLoading(false);
    }
  };

  return { searchResults, loading, error, search };
};

export default useSearch;
