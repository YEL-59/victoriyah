import { axiosPublic } from "@/lib/axios.config";
import { useQuery } from "@tanstack/react-query";

export const useGetHome = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/home`);
      return res.data;
    },
  });

  const homeData = data?.data || [];
  const heroData = homeData?.hero_section || {};
  const featuredData = homeData?.featured_items || [];
  const serviceData = homeData?.service_section || {};
  return { homeData, heroData, featuredData, serviceData, isLoading };
};

//for pagination data

export const useGetHomeFeatured = (page) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["home", page],
    keepPreviousData: true,
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await axiosPublic.get(`/home?page=${page}`);
      return res.data?.data || {};
    },
  });

  return { data, isLoading, isError };
};
