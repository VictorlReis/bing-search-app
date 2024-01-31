import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useSearch from "@/hooks/useSearch";

const SearchForm = () => {
  const [query, setSearchText] = useState("");
  const { searchResults, loading, error, search } = useSearch();

  console.log(searchResults);
  const handleSearch = async (e) => {
    e.preventDefault();
    search(query);
  };

  return (
    <div className="flex flex-col bg-background text-foreground items-center justify-center h-screen">
      {" "}
      <div className="flex items-center space-x-4 mb-12">
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
      <div className="grid gap-6 max-w-4xl">
        {searchResults.map((result) => {
          return (
            <div key={result.id} className="px-14">
              <a
                href={result.url}
                className="text-blue-700 hover:underline text-xl font-semibold"
              >
                {result.name}
              </a>
              <p>{result.snippet}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchForm;
