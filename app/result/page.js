import SearchResultsPage from "../components/SearchResultsPage";

export default async function SearchPage({ searchParams }) {
  const query = searchParams.query || "";
  return <SearchResultsPage query={query} />;
}
