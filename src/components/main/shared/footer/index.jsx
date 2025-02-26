import logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <div className=" bg-[#080D1E] pt-16 relative">
      {/* Pseudo-elements for the shadow */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-[465px] opacity-60 bg-gradient-radial from-[#96E437] to-[#537E1E] filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-[465px] opacity-60 bg-gradient-radial from-[#96E437] to-[#537E1E] filter blur-[100px]"></div>
      </div>

      <div className="mx-auto container relative z-10">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          {/* Logo and description */}
          <div className="md:w-[316px]">
            <img src={logo} alt="" />
            <p className="mt-[18px] text-[15px] font-normal text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              fugit non...
            </p>
            <div className="mt-[18px] flex gap-4">
              {[
                { src: "facebook.svg", alt: "Facebook", href: "#" },
                { src: "linkdin.svg", alt: "LinkedIn", href: "/" },
                { src: "instagram1.svg", alt: "Instagram", href: "/" },
              ].map((icon, index) => (
                <a
                  key={index}
                  className="hover:scale-110"
                  target="_blank"
                  href={icon.href}
                  rel="noopener noreferrer"
                >
                  <img
                    alt={`${icon.alt} icon`}
                    loading="lazy"
                    width="36"
                    height="36"
                    className="color-transparent"
                    src={`https://www.englishyaari.com/img/${icon.src}`}
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
                  { name: "News", href: "/our-tutors" },
                  { name: "Contact", href: "/become-a-tutor" },
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
                  { name: "Home", href: "/" },
                  { name: "News", href: "/our-tutors" },
                  { name: "Contact", href: "/become-a-tutor" },
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
                Office Location{" "}
              </p>
              <ul>
                {[
                  { name: "Home", href: "/" },
                  { name: "News", href: "/our-tutors" },
                  { name: "Contact", href: "/become-a-tutor" },
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
        </div>

        {/* Footer bottom */}
        <div className="mt-[38px] border-t border-white/20 py-4 text-center text-white">
          <p className="text-[15px] font-normal">
            © 2024 YOURLOGO. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
