import { axiosPrivate } from "@/lib/axios.config";
import { useQuery } from "@tanstack/react-query";

export const useGetDynamicPages = () => {
  const result = useQuery({
    queryKey: ["dynamic_pages"],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/contents?type=termsAndConditions`);
      return res.data;
    },
  });

  const data = result?.data?.data || [];
  return { ...result, data };
};

// export const useGetSinglePage = (slug) => {
//   const result = useQuery({
//     queryKey: ["dynamic_page", slug],
//     queryFn: async () => {
//       const res = await axiosPrivate.get(`/dynamic-page/${slug}`);
//       return res.data;
//     },
//     enabled: !!slug,
//   });

//   const data = result?.data?.data || {};
//   return { ...result, data };
// };
