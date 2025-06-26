import { axiosPrivate, axiosPublic } from "@/lib/axios.config";
import { sellSchema } from "@/schemas/sell.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const useCreateProduct = () => {
  const navigate = useNavigate();

  const form = useForm({
    // resolver: zodResolver(sellSchema),
    defaultValues: {
      name: "",
      description: "",
      condition: "",
      product_category_id: "",
      images: [],
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("condition", values.condition);
      formData.append("product_category_id", values.product_category_id);
      values.images.forEach((img) => formData.append("images[]", img));
      (values.video_links || []).forEach((l) =>
        formData.append("video_links[]", l)
      );

      const { data } = await axiosPrivate.post("/product/store", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!data?.status) {
        throw new Error(data?.message || "Failed to create product");
      }

      return data;
    },

    onSuccess: (data) => {
      toast.success(data.message || "Product created successfully");
      navigate("/"); // Adjust the path if needed
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || "Failed to create product");
    },
  });

  return {
    form,
    mutate,
    isPending,
  };
};

//category id

export const useGetCategoryid = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categoryid"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/product-categories/list");
      return res.data;
    },
  });
  return { categoryid: data?.data, isLoading };
};
