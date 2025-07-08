import { axiosPrivate } from "@/lib/axios.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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

//get user profile
export const useGetNotification = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["notification"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/notifications");
      return res.data;
    },
  });

  return { notification: data?.data, isLoading };
};

export const useDeleteNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      await axiosPrivate.delete(`/notifications/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notifications"]);
    },
  });
};

export const useMarkNotificationAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      await axiosPrivate.post(`/notifications/read/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notifications"]);
    },
  });
};
