import facebook from "@/assets/icons/facebook-icon.svg";
import linkedin from "@/assets/icons/linkedin-icon.svg";
import youtube from "@/assets/icons/youtube-icon.svg";
import footerUpper from "@/assets/icons/footer-upper.svg";
import footerLower from "@/assets/icons/footer-lower.svg";

import { Link } from "react-router";
import { useGetDynamicPages } from "@/hook/dynamic-page.hook";

const Footer = () => {
  const { data: pages } = useGetDynamicPages();

  const iconMap = {
    facebook,
    linkedin,
    youtube,
  };

  return (
    <div className="bg-[#080D1E] pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Background decorative SVGs */}
      <div className="absolute top-0 left-0 z-[4]">
        <img src={footerUpper} alt="footer upper" />
      </div>
      <div className="absolute bottom-0 right-0 z-[4] rotate-180">
        <img src={footerLower} alt="footer lower" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <div className="flex flex-wrap gap-y-10 justify-between sm:px-4 md:px-10">
          {/* Logo and description */}
          <div className="w-full sm:w-1/2 lg:w-[316px]">
            <img src={pages?.logo} alt="logo" className="h-12" />
            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              <span
                dangerouslySetInnerHTML={{
                  __html: pages?.description || "No description available.",
                }}
              />
            </p>
            <div className="mt-4 flex gap-3">
              {pages?.social_media?.map((item) => (
                <a
                  key={item.id}
                  className="group p-3 rounded-full bg-[#B5F169] flex items-center justify-center transition-transform hover:scale-105"
                  target="_blank"
                  href={item.profile_link}
                  rel="noopener noreferrer"
                >
                  <img
                    alt={`${item.social_media} icon`}
                    loading="lazy"
                    src={iconMap[item.social_media.toLowerCase()]}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[200px]">
            <p className="text-[18px] font-medium text-primary">Navigation</p>
            <ul>
              {[
                { name: "Home", href: "/" },
                { name: "Browser", href: "" },
                { name: "Sell", href: "" },
                { name: "About", href: "/" },
                { name: "Contact Us", href: "" },
              ].map((link, index) => (
                <li key={index} className="mt-4">
                  <a
                    className="text-[15px] text-white/80 hover:text-white"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[200px]">
            <p className="text-[18px] font-medium text-primary">Resources</p>
            <ul>
              {[
                { name: "Pricing", href: "/" },
                { name: "FAQs", href: "/" },
              ].map((link, index) => (
                <li key={index} className="mt-4">
                  <a
                    className="text-[15px] text-white/80 hover:text-white"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {pages?.dynamic_pages?.map((page) => (
                <li key={page.id} className="mt-4">
                  <Link
                    to={`/page/${page.slug}`}
                    className="text-[15px] text-white/80 hover:text-white"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[200px]">
            <p className="text-[18px] font-medium text-primary">
              Office Location
            </p>
            <address className="text-[15px] mt-4 text-white/80 not-italic leading-relaxed">
              {pages?.address || "1234 Street Name, City, State, 12345"}
            </address>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-white/20 pt-4 text-center text-white text-[15px]">
          <p>
            {pages?.copyright_text || "© 2023 Victoriyah. All rights reserved."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
