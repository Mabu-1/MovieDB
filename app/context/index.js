"use client";
import { useDebounce } from "@/app/hooks/useDebounce";
import { getMovieResult } from "@/db/queries";

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedQuery = useDebounce(searchQuery, 500);

  const handleSearch = async (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedQuery.length > 2) {
        setIsLoading(true);
        try {
          const results = await getMovieResult(debouncedQuery);
          setSearchResults(results);
        } catch (error) {
          console.error("Search failed:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchResults();
  }, [debouncedQuery]);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        searchResults,
        isLoading,
        handleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
