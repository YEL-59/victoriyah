import { axiosPrivate } from "@/lib/axios.config";
import { useQuery } from "@tanstack/react-query";

export const useGetSubscriptionPlan = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["subscriptionPlan"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/subscription-plans/list");
      return res.data;
    },
  });
  return { subscriptionPlan: data?.data, isLoading };
};
