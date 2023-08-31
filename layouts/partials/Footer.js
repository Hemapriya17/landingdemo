import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone, location } = config.contact_info;
  return (
    // <footer className="">
      <div className="container">
        <div className="row border-y border-border py-12">
          <div className="md:col-5 lg:col-4 lg:mt-0 m-8">
            <Logo />
            {markdownify(footer_content, "p", "mt-5")}
          </div>
          <div className="mt-8 md:col-6 lg:col-4 lg:mt-0">
            <h3 className="h5">Socials</h3>
            <div className="mt-5">
               <Link href={`mailto:${email}?subject=Queries about Twinmo`}>{email}</Link>
              {/* social icons */}
              <Social source={social} className="social-icons mt-5" />
            </div>
          </div>
          <div className="mt-8 md:col-8 lg:col-3 lg:mt-0">
            <h3 className="h5">Quick Links</h3>
            {/* footer menu */}
            <ul className="mt-5 leading-10">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    className=" hover:text-primary"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Location & Contact</h3>
            <ul className="mt-5 leading-10">
              <li>{markdownify(location)}</li>
              {phone && (
                <li>
                  <Link href={`tel:${phone}`}>{phone}</Link>
                </li>
              )}
            </ul>
          </div> */}
        </div>
        {/* copyright */}
        <div className="py-6 text-center">
          {markdownify(copyright, "p", "footer-copy-write")}
        </div>
      </div>
    // </footer>
  );
};

export default Footer;
