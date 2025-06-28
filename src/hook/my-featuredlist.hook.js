import { axiosPrivate } from "@/lib/axios.config";
import { useQuery } from "@tanstack/react-query";

export const useGetFeaturedList = (page = 1) => {
  return useQuery({
    queryKey: ["featured_list", page],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/dashboard/my-products?page=${page}`);
      return {
        products: res.data?.data?.products || [],
        pagination: res.data?.data?.pagination || {},
      };
    },
  });
};
