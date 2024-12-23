import axios from "axios";

export async function GET(request) {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`;
    const response = await axios.get(url);

    return new Response(JSON.stringify(response.data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    return new Response(
      JSON.stringify({
        error: error.response?.data || "Internal Server Error",
      }),
      {
        status: error.response?.status || 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
