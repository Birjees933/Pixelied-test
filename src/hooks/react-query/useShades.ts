import { ColorShades } from "@/types/common";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// Fetch colors function
const fetchShades = async (name?: string): Promise<ColorShades> => {
  const url = name
    ? `/api/get-shades?name=${encodeURIComponent(name)}`
    : "/api/get-shades?name=Red";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch colors");
  }
  return response.json();
};

// React Query hook
export function useShades(
  name?: string,
  options?: UseQueryOptions<ColorShades>
) {
  return useQuery<ColorShades>({
    queryKey: ["get-shades", name],
    queryFn: () => fetchShades(name),
    ...options,
  });
}
