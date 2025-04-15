import { GET } from "@/lib/axios";
import { ColorShades } from "@/types/common";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// Fetch colors function
const fetchGradients = async (): Promise<ColorShades> => {
  const url = "/api/get-gradients";

  const response = await GET<ColorShades>(url);
  if (!response) {
    throw new Error("Failed to fetch gradients");
  }
  return response;
};

export function useGradients(options?: UseQueryOptions<ColorShades>) {
  return useQuery<ColorShades>({
    queryKey: ["get-gradients"],
    queryFn: () => fetchGradients(),
    ...options,
  });
}
