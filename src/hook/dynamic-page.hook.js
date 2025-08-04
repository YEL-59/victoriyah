import { axiosPrivate, axiosPublic } from "@/lib/axios.config";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetDynamicPages = () => {
  const result = useQuery({
    queryKey: ["dynamic_pages"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/header-footer`);
      return res.data;
    },
  });

  const data = result?.data?.data || [];
  return { ...result, data };
};

export const useGetSinglePage = (slug) => {
  const result = useQuery({
    queryKey: ["dynamic_page", slug],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/contents?type=${slug}`);
      return res.data;
    },
    enabled: !!slug,
  });

  const data = result?.data?.data || {};
  return { ...result, data };
};

export const useShareProductLink = () => {
  return useMutation({
    mutationFn: async ({ productId, platform }) => {
      const { data } = await axiosPrivate.get(
        `/home/product/share/${productId}`
      );
      if (!data?.status || !data?.data?.share_url) {
        throw new Error(data.message || "Failed to generate share link");
      }

      return {
        platform,
        shareUrl: data.data.share_url,
      };
    },
  });
};
