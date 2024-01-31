import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useSearch from "@/hooks/useSearch";

const SearchForm = () => {
  const [query, setSearchText] = useState("");
  const { searchResults, loading, error, search } = useSearch();

  const handleSearch = async (e) => {
    e.preventDefault();
    search(query);
  };

  return (
    <div className="flex flex-col bg-background text-foreground items-center justify-center h-screen">
      {" "}
      <div className="flex items-center space-x-4">
        <Input
          type="text"
          placeholder="Search..."
          className="w-96 p-4"
          onChange={(e) => setSearchText(e.target.value)}
          disabled={loading}
        />
        <Button type="button" onClick={handleSearch}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>
      <div className="mt-4">
        {searchResults.map((result) => {
          return (
            <div key={result.id}>
              <a href={result.url}>{result.name}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchForm;
