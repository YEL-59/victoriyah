import { useState } from "react";
import { useNavigate } from "react-router";
import locationIcon from "@/assets/icons/location.svg";
import searchIcon from "@/assets/icons/search.svg";
import { Button } from "@/components/ui/button";

function Filter() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    // Redirect to /browse with query param
    navigate(`/browse?product=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <div className="rounded-lg border-2 border-foreground bg-gradient-to-b from-white/50 to-white shadow-[0px_4px_48px_0px_rgba(0,0,0,0.10)] backdrop-blur-[16px] p-4">
      <div className="flex items-center sm:flex-row flex-col gap-5 ">
        <div className="bg-[#FFF] w-full px-4 py-3 rounded-[8px] flex items-center gap-2">
          <img src={searchIcon} alt="icon" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search here..."
            className="outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
        </div>
        <Button
          className="text-foreground bg-primary px-8 py-6 rounded-[8px]"
          onClick={handleSearch}
          disabled={!searchTerm.trim()}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default Filter;
