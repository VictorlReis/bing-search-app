import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useSearch from "@/hooks/useSearch";
import { BsBing } from "react-icons/bs";
import {SearchResult} from "@/types";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const { searchResults, loading, search } = useSearch();

  const handleSearch = async () => {
    await search(query);
  };

  const clearSearch = async () => {
    setQuery("");
     await search("");
  };

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
       await handleSearch();
    }
  };

  return (
    <main className="flex flex-col bg-background text-foreground items-center justify-center h-screen">
      {" "}
      <section className="flex items-center space-x-4 mb-12">
        <Button variant="ghost" onClick={clearSearch}>
          <BsBing size={25} />
        </Button>
        <Input
          type="text"
          value={query}
          placeholder="Search..."
          className="w-96 p-4"
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
          onKeyUp={handleKeyPress}
        />
        <Button type="button" onClick={handleSearch}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </section>
      <section className="grid gap-6 max-w-4xl max-h-[70em] overflow-y-auto">
        {searchResults.map((result: SearchResult) => {
          return (
            <div key={result.id} className="p-2 rounded-lg hover:bg-zinc-50">
              <a
                href={result.url}
                className="bg-background hover:underline text-xl font-semibold text-blue-600"
              >
                {result.name}
              </a>
              <p>{result.snippet}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default SearchForm;
