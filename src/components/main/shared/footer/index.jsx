import logo from "@/assets/Logo.png";
import facebook from "@/assets/icons/facebook-icon.svg";
import linkedin from "@/assets/icons/linkedin-icon.svg";
import youtube from "@/assets/icons/youtube-icon.svg";
import footerUpper from "@/assets/icons/footer-upper.svg";
import footerLower from "@/assets/icons/footer-lower.svg";
import Locationicon from "@/assets/icons/location-icon";
import { Link } from "react-router";
import { useGetDynamicPages } from "@/hook/dynamic-page.hook";

const Footer = () => {
  const { data: pages } = useGetDynamicPages();
  console.log({
    pages,
  });
  const iconMap = {
    facebook: facebook,
    linkedin: linkedin,
    youtube: youtube,
  };
  return (
    <div className=" bg-[#080D1E] pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Pseudo-elements for the shadow */}
      <div className="absolute top-0 left-0 z-[4]">
        <img src={footerUpper} />
      </div>
      <div className="absolute bottom-0 right-0 z-[4] rotate-180">
        <img src={footerLower} />
      </div>

      <div className="mx-auto container relative z-10">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          {/* Logo and description */}
          <div className="md:w-[316px]">
            <img src={pages?.logo} alt="" />
            <p className="mt-[18px] text-[15px] font-normal text-white/80">
              <span
                dangerouslySetInnerHTML={{
                  __html: pages?.description || "No description available.",
                }}
              />
            </p>
            <div className="mt-[18px] flex gap-4">
              {pages?.social_media?.map((item) => (
                <a
                  key={item.id}
                  className="group p-3 rounded-[38px] bg-[#B5F169] flex items-center justify-center"
                  target="_blank"
                  href={item.profile_link}
                  rel="noopener noreferrer"
                >
                  <img
                    alt={`${item.social_media} icon`}
                    loading="lazy"
                    className="color-transparent group-hover:scale-110"
                    src={iconMap[item.social_media.toLowerCase()]}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Other sections */}
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
            <div>
              <p className="text-[18px] font-medium text-primary leading-normal">
                Navigation
              </p>
              <ul>
                {[
                  { name: "Home", href: "/" },
                  { name: "Browser", href: "" },
                  { name: "Sell", href: "" },
                  { name: "About", href: "/" },
                  { name: "Contact Us", href: "" },
                ].map((link, index) => (
                  <li key={index} className="mt-[15px]">
                    <a
                      className="text-[15px] font-normal hover:font-semibold hover:text-white/80"
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
            <div>
              <p className="text-[18px] font-medium text-primary leading-normal">
                Resources
              </p>
              <ul>
                {[
                  { name: "Pricing", href: "/" },
                  { name: "FAQs", href: "/" },
                  { name: "How it works", href: "/" },
                  { name: "Blog", href: "/" },
                ].map((link, index) => (
                  <li key={index} className="mt-[15px]">
                    <a
                      className="text-[15px] font-normal hover:font-semibold hover:text-white/80"
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                {/* {pages?.map((page, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/page/${page.page_slug}`}
                      className="hover:underline hover:text-white transition"
                    >
                      {page.page_title}
                    </Link>
                  </li>
                ))} */}
                <div></div>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
            <div>
              <p className="text-[18px] font-medium text-primary leading-normal">
                Office Location{" "}
              </p>
              <address>
                {pages?.address || "1234 Street Name, City, State, 12345"}
              </address>
              {/* <div className="mt-4 flex gap-2 items-center">
                <Locationicon />
                <p className="text-[16px] font-normal text-white/80">
                  See on Map
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-[38px] border-t border-white/20 py-4 text-center text-white">
          <p className="text-[15px] font-normal">
            {pages?.copyright_text || "© 2023 Victoriyah. All rights reserved."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
