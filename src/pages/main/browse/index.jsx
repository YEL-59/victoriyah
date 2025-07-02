import { useState } from "react";
import Arrowlefticon from "@/assets/icons/arrowleft-icon";

import FeaturedCard from "@/components/main/home/featuredcard";
import img2 from "@/assets/featuredimg1.png";

import { FiSearch } from "react-icons/fi";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useLocation } from "react-router";
import { useSearchCategories, useSearchProduct } from "@/hook/home.hook";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useGetCategoryid } from "@/hook/postitem.hook";

const Browse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const productQuery = params.get("product") || "";
  const pageParam = parseInt(params.get("page") || "1", 10);
  const [page, setPage] = useState(pageParam);
  const { categoryid } = useGetCategoryid();
  console.log("categoryid", categoryid);

  const categories = (categoryid || []).map((category) => ({
    id: category.id,
    name: category.name,
    // image: category.image || img2,
  }));
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const { data: categoryData } = useSearchCategories(selectedCategoryId, page);
  console.log({ datacategory: categoryData });
  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setPage(1);
    navigate(`/browse?category=${categoryId}&page=1`);
  };

  // Keep page state in sync with URL param on location change
  useEffect(() => {
    setPage(pageParam);
  }, [pageParam]);
  const categoryParam = params.get("category");

  // useEffect(() => {
  //   if (categoryParam) {
  //     setSelectedCategoryId(Number(categoryParam));
  //   }
  // }, [categoryParam]);
  useEffect(() => {
    if (!categoryParam && categoryid && categoryid.length > 0) {
      const firstCategoryId = categoryid[0].id;
      setSelectedCategoryId(firstCategoryId);
      navigate(`/browse?category=${firstCategoryId}&page=1`, { replace: true });
    } else if (categoryParam) {
      setSelectedCategoryId(Number(categoryParam));
    }
  }, [categoryParam, categoryid, navigate]);

  const { data, isLoading, isError } = useSearchProduct(productQuery, page);

  const handlePageChange = (newPage) => {
    if (
      newPage < 1 ||
      (data?.pagination && newPage > data.pagination.last_page)
    ) {
      return;
    }
    // Update URL with new page number
    navigate(
      `/browse?product=${encodeURIComponent(productQuery)}&page=${newPage}`
    );
  };

  const products = selectedCategoryId ? categoryData?.products : data?.products;

  const pagination = selectedCategoryId
    ? categoryData?.pagination
    : data?.pagination;

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const filteredProducts = (products || [])
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "alphabetical_asc") return a.name.localeCompare(b.name);
      if (sortBy === "alphabetical_desc") return b.name.localeCompare(a.name);
      if (sortBy === "newest")
        return new Date(b.created_at) - new Date(a.created_at);
      if (sortBy === "oldest")
        return new Date(a.created_at) - new Date(b.created_at);
      return 0;
    });
  return (
    <div className="bg-background py-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6 gap-4 md:gap-0">
        <div className="relative w-[350px] h-[40px]">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search Products..."
            className="pl-10 pr-4 rounded-full bg-white w-full h-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-5 items-center">
          <p
            className="border-foreground sm:border-r-2 px-3 text-[16px] font-normal leading-normal
"
          >
            {filteredProducts?.length || 0} results
          </p>
          <div className="flex gap-5 items-center">
            <p
              className="text-[16px] font-normal leading-normal
"
            >
              Sort By:{" "}
            </p>
            <Select
              value={sortBy}
              onValueChange={setSortBy}
              className="w-[180px] bg-white rounded-full"
            >
              <SelectTrigger className="w-[180px] bg-white rounded-full">
                <SelectValue placeholder="Alphabetically, A-Z" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alphabetical_asc">
                  Alphabetically, A-Z
                </SelectItem>
                <SelectItem value="alphabetical_desc">
                  Alphabetically, Z-A
                </SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid xl:grid-cols-12 gap-6">
        <div className="hidden xl:block bg-white p-6 rounded-xl col-span-3 h-[fit-content]">
          <h1 className="text-foreground text-xl font-semibold mb-4">
            Categories
          </h1>
          <div>
            {categories.map((category) => (
              <div
                key={category.id}
                className={`flex justify-between items-center gap-5 border-b border-foreground/25 p-3 cursor-pointer transition ${
                  selectedCategoryId === category.id
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="flex gap-2 items-center">
                  {/* <img
                    src={category.image}
                    alt={category.name}
                    className="w-6 h-6"
                  /> */}
                  <h3 className="text-foreground text-[18px] font-normal leading-[164%]">
                    {category.name}
                  </h3>
                </div>
                <Arrowlefticon />
              </div>
            ))}
          </div>
        </div>

        <div className="xl:hidden flex justify-between items-center p-4 bg-white rounded-lg">
          <Sheet>
            <SheetTrigger>
              <Menu className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left">
              <h1 className="text-foreground text-xl font-semibold mb-4">
                Categories
              </h1>
              <div>
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`flex justify-between items-center gap-5 border-b border-foreground/25 p-3 cursor-pointer transition ${
                      selectedCategoryId === category.id
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <div className="flex gap-2 items-center">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-6 h-6"
                      />
                      <h3 className="text-foreground text-[18px] font-normal leading-[164%]">
                        {category.name}
                      </h3>
                    </div>
                    <Arrowlefticon />
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Featured Section */}
        <div className="rounded col-span-12 md:col-span-9">
          <div className="gap-6">
            {/* {searchResults?.map((item) => (
              <FeaturedCard key={item.id} {...item} />
            ))} */}
            {!isLoading && !isError && (
              <>
                {filteredProducts?.length === 0 ? (
                  <p>No results found.</p>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProducts?.map((item) => (
                        <FeaturedCard
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          image={item.image}
                          condition={item.condition}
                          location={item.address}
                          time={item.created_at}
                          isFavorited={item.is_favorite}
                        />
                      ))}
                    </div>

                    {pagination && (
                      <div className="flex justify-center gap-4 mt-8">
                        <button
                          onClick={() => handlePageChange(page - 1)}
                          disabled={page <= 1}
                          className="px-4 py-2 border rounded disabled:opacity-50"
                        >
                          Previous
                        </button>
                        <span className="px-4 py-2">
                          Page {page} of {pagination.last_page}
                        </span>
                        <button
                          onClick={() => handlePageChange(page + 1)}
                          disabled={page >= pagination.last_page}
                          className="px-4 py-2 border rounded disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
