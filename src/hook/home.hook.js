import { axiosPrivate, axiosPublic } from "@/lib/axios.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

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
  const howItWorksData = homeData?.how_it_works || {};
  const tradingData = homeData?.trading_section || {};
  return {
    homeData,
    heroData,
    featuredData,
    serviceData,
    howItWorksData,
    tradingData,
    isLoading,
  };
};

//for pagination data

export const useGetHomeFeatured = (page) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["home_featured", page],
    keepPreviousData: true,
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await axiosPublic.get(`/home?page=${page}`);
      return res.data?.data || {};
    },
  });

  return { data, isLoading, isError };
};

export const useGetHomeFeaturedDetails = (id) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["details", id],
    keepPreviousData: true,
    queryFn: async () => {
      const res = await axiosPrivate.get(`/home/product/details/${id}`);
      return res.data?.data || {};
    },
  });

  return { data, isLoading, isError };
};

// Toggle favourite product
export const useToggleFavourite = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (productId) => {
      const { data } = await axiosPrivate.post(
        `/product/toggle-favorite/${productId}`
      );
      if (!data?.status) {
        throw new Error(data?.message || "Failed to toggle favourite");
      }
      return data;
    },

    onSuccess: (data) => {
      toast.success(data?.message || "Favourite toggled successfully");
      // Invalidate related queries to refetch fresh data and update UI:
      queryClient.invalidateQueries(["dashboard_favourites"]);
      queryClient.invalidateQueries({
        queryKey: ["home_featured"],
        exact: false,
      });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Failed to toggle favourite"
      );
    },
  });

  return { mutate, isPending };
};
export const useGetDashboardFavourites = (page = 1) => {
  return useQuery({
    queryKey: ["dashboard_favourites", page],
    queryFn: async () => {
      const res = await axiosPrivate.get(
        `/dashboard/favorites/list?page=${page}`
      );
      return {
        products: res.data?.data?.products || [],
        pagination: res.data?.data?.pagination || {},
      };
    },
  });
};

//search product
// export const useSearchProduct = (query) => {
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["search", query, page],
//     queryFn: async () => {
//       if (!query) return [];
//       const res = await axiosPublic.get(`/home/search?product=${query}`);
//       return res.data?.data || [];
//     },
//     enabled: !!query,
//   });

//   return { data, isLoading, isError };
// };

export const useSearchProduct = (query, page = 1) => {
  return useQuery({
    queryKey: ["search", query, page],
    queryFn: async () => {
      if (!query) return { products: [], pagination: null };
      const res = await axiosPrivate.get(`/home/search`, {
        params: { product: query, page },
      });
      return {
        products: res.data?.data?.products || [],
        pagination: res.data?.data?.pagination || null,
      };
    },
    enabled: !!query,
  });
};

//search categories
// export const useSearchCategories = (query, page = 1) => {
//   return useQuery({
//     queryKey: ["search", query, page],
//     queryFn: async () => {
//       if (!query) return { categories: [], pagination: null };
//       const res = await axiosPrivate.get(`/home/products/filter`, {
//         params: { product_category_id: query, page },
//       });
//       return {
//         categories: res.data?.data?.products || [],
//         pagination: res.data?.data?.pagination || null,
//       };
//     },
//     enabled: !!query,
//   });
// };

export const useSearchCategories = (query, page = 1) => {
  return useQuery({
    queryKey: ["search", query, page],
    queryFn: async () => {
      if (!query) return { products: [], pagination: null };
      const res = await axiosPrivate.get(`/home/products/filter`, {
        params: { product_category_id: query, page },
      });
      return {
        products: res.data?.data?.products || [],
        pagination: res.data?.data?.pagination || null,
      };
    },
    enabled: !!query,
  });
};
