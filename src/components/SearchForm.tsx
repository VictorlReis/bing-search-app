import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useSearch from "@/hooks/useSearch";
import { BsBing } from "react-icons/bs";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const { searchResults, loading, error, search } = useSearch();

  console.log(searchResults);
  const handleSearch = async () => {
    search(query);
  };

  const clearSearch = () => {
    setQuery("");
    search("");
  };

  return (
    <div className="flex flex-col bg-background text-foreground items-center justify-center h-screen">
      {" "}
      <div className="flex items-center space-x-4 mb-12">
        <Button variant="ghost" onClick={clearSearch}>
          <BsBing />
        </Button>
        <Input
          type="text"
          value={query}
          placeholder="Search..."
          className="w-96 p-4"
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
        />
        <Button type="button" onClick={handleSearch}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>
      <div className="grid gap-6 max-w-4xl">
        {searchResults.map((result) => {
          return (
            <div key={result.id} className="p-2 rounded-lg hover:bg-zinc-50">
              <a
                href={result.url}
                className="bg-background hover:underline text-xl font-semibold"
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
