import logo from "@/assets/Logo.png";
import facebook from '@/assets/icons/facebook-icon.svg';
import linkedin from '@/assets/icons/linkedin-icon.svg';
import youtube from '@/assets/icons/youtube-icon.svg';
import footerUpper from '@/assets/icons/footer-upper.svg';
import footerLower from '@/assets/icons/footer-lower.svg';

const Footer = () => {
  return (
    <div className=" bg-[#080D1E] pt-16 pb-8 relative overflow-hidden">
      {/* Pseudo-elements for the shadow */}
      <div className="absolute top-0 left-0 z-[4]"><img src={footerUpper} /></div>
      <div className="absolute bottom-0 right-0 z-[4] rotate-180"><img src={footerLower} /></div>

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
                { src: facebook, alt: "Facebook", href: "/" },
                { src: linkedin, alt: "LinkedIn", href: "/" },
                { src: youtube, alt: "Youtube", href: "/" },
              ].map((icon, index) => (
                <a
                  key={index}
                  className="group p-3 rounded-[38px] bg-[#B5F169] flex items-center justify-center"
                  target="_blank"
                  href={icon.href}
                  rel="noopener noreferrer"
                >
                  <img
                    alt={`${icon.alt} icon`}
                    loading="lazy"
                    className="color-transparent group-hover:scale-110"
                    src={`${icon.src}`}
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
