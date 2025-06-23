import { axiosPrivate } from "@/lib/axios.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// Get Users List
export const useGetCollection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user-collection-data"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/users-with-last-message");
      return res.data;
    },
  });
  return { collectionData: data, isLoading };
};
// GET Individual Messages
export const useGetMessages = (receiverId) => {
  return useQuery({
    queryKey: ["messages", receiverId],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/messages/${receiverId}`);

      if (!response.data?.status) {
        throw new Error(response.data?.message || "Failed to fetch messages");
      }

      return response?.data; // this contains pagination + messages
    },
    enabled: !!receiverId, // only run when receiverId is truthy
    staleTime: 30 * 1000,
  });
};
// Send Message
export const useSendMessage = () => {
  //const navigate = useNavigate();

  const form = useForm({
    // resolver: zodResolver(sendMessageSchema),
    defaultValues: {
      receiver_id: 1,
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ receiver_id, message }) => {
      const payload = { message };
      const { data } = await axiosPrivate.post(
        `/messages/${receiver_id}`,
        payload
      );


      return data;
    },
    onSuccess: (data) => {
      // toast.success(data?.message || "Message sent successfully");
      form.reset(); // optionally reset the form
      // navigate or do something with data if needed
      // Example: navigate(`/messages/${data.data.id}`);
    },
    onError: (error) => {
      console.log(error);

      const message = error?.response?.data?.message || error.message;
      toast.error(message || "Failed to send message");
    },
  });

  return { form, mutate, isPending };
};
