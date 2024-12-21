async function getAllTrending() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/trending`);
    if (!response.ok) {
      throw new Error("Failed to fetch trending movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}
async function getAllPopular() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/popular`);
    if (!response.ok) {
      throw new Error("Failed to fetch trending movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}
async function getAllTopRated() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/topRated`);
    if (!response.ok) {
      throw new Error("Failed to fetch trending movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}
async function getMovieDetails(movieID) {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/movie/${movieID}`
    );
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    console.log("aaaaa");

    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return [];
  }
}
async function getCastDetails(movieID) {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/movie/${movieID}/credits`
    );
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return [];
  }
}
async function getRecommendations(movieID) {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/movie/${movieID}/recommendations`,
      {
        cache: "no-store", // This is the React Server Component way to disable caching
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return [];
  }
}
async function getSearchResult(query) {
  if (!query) return [];

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/search/movie?query=${encodeURIComponent(
        query
      )}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch movie details");
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return [];
  }
}
async function getMovieResult(query) {
  if (!query) return [];

  try {
    const response = await fetch(
      `/api/search/movie?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return [];
  }
}

export {
  getAllPopular,
  getAllTopRated,
  getAllTrending,
  getCastDetails,
  getMovieDetails,
  getMovieResult,
  getRecommendations,
  getSearchResult,
};
