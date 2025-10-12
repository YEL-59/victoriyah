// src/pages/DynamicPage.jsx
import { useGetDynamicPages } from "@/hook/dynamic-page.hook";
import { useParams } from "react-router";

const DynamicPage = () => {
  const { slug } = useParams();
  const { data } = useGetDynamicPages();

  const page = data?.dynamic_pages?.find((p) => p.slug === slug);

  if (!page) return <p className="p-4 text-center">Page not found</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{page.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  );
};

export default DynamicPage;
