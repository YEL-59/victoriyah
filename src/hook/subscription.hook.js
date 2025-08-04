import { axiosPrivate } from "@/lib/axios.config";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

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

export const useCheckoutSubscription = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (id) => {
      console.log("Checking out plan:", id);
      const response = await axiosPrivate.post(
        `/subscriptions/${id}/checkout`,
        {
          success_url: `${window.location.origin}/payment-success`,
          cancel_url: `${window.location.origin}/payment-canceled`,
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.data?.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.data.url;
      } else {
        // Free plan, show toast
        // toast({
        //   title: "Success",
        //   description: data.message || "Free plan activated.",
        // });
        toast.success(data?.message || "Free plan activated.");
        navigate("/uploaditem");
      }
    },
    onError: (err) => {
      // toast({
      //   title: "Error",
      //   description: err.response?.data?.message || "Something went wrong.",
      //   variant: "destructive",
      // });
      const message = err.response?.data?.message;
      toast.error(message || "Something went wrong.");
    },
  });
};
