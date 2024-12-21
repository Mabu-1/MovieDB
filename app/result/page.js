import { getSearchResult } from "@/db/queries";
import { notFound } from "next/navigation";
import SearchResultsPage from "../components/SearchResultsPage";

export default async function SearchPage({ searchParams }) {
  const query = searchParams.query || "";

  try {
    const results = await getSearchResult(query);

    // Don't trigger notFound for empty query
    if (!query) {
      return <SearchResultsPage query="" results={[]} />;
    }

    // Handle case when no results found for a valid query
    if (results?.results?.length === 0) {
      notFound();
    }

    return;
    <SearchResultsPage query={query} results={results.results} />;
  } catch (error) {
    console.error("Search error:", error);
    notFound();
  }
}
