import { axiosPrivate, axiosPublic } from "@/lib/axios.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const useGetHome = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/home`);
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
      const res = await axiosPrivate.get(`/home?page=${page}`);
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

export const useGetExchangeRequestDetails = (id) => {
  return useQuery({
    queryKey: ["exchange_request_details", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosPrivate.get(
        `/exchange-request/${id}/offered-product`
      );
      return res.data?.data;
    },
  });
};

//delete product
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosPrivate.delete(`/products/delete/${id}`);
      return data;
    },
    onSuccess: (data) => {
      toast.success("Product deleted successfully");
      queryClient.invalidateQueries(["featuredList"]); // update cache
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Delete failed");
    },
  });
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
        queryKey: ["featured_list"],
        exact: false,
      });
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
  //const queryClient = useQueryClient();
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
    // onSuccess: (data) => {
    //   toast.success(data.message || "Removed from favorites");
    //   queryClient.invalidateQueries({
    //     queryKey: ["featured_list"],
    //   });
    // },
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

//update product

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  const {
    mutate: updateProduct,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: async ({ id, payload }) => {
      const { data } = await axiosPrivate.post(
        `/product/update/${id}`,
        payload
      );
      if (!data.status) {
        throw new Error(data.message || "Update failed");
      }
      return data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Product updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["featured_list"],
        exact: false,
      });
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to update product");
    },
  });

  return { updateProduct, isUpdating, error };
};

//exchange product
export const useExchangeProduct = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      message: "",
      condition: "",
      product_category_id: "",
      requested_product_id: "",
      images: [],
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("condition", values.condition);
      formData.append("message", values.message);
      formData.append("product_category_id", values.product_category_id);
      formData.append("requested_product_id", values.requested_product_id);

      values.images.forEach((img) => formData.append("images[]", img));

      const { data } = await axiosPrivate.post("/exchange-request", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!data?.status) {
        throw new Error(data?.message || "Failed to create exchange request");
      }

      return data;
    },

    onSuccess: (data) => {
      toast.success(data.message || "Exchange request created successfully");
      navigate("/");
    },

    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || "Failed to create exchange request");
    },
  });

  return {
    form,
    mutate,
    isPending,
  };
};
