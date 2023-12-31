import Base from "@layouts/Baseof";
import Circle from "@layouts/components/Circle";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import Footer from "@layouts/partials/Footer";
import { getListPage } from "@lib/contentParser";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { useEffect } from "react";

const Industries = ({ banners, specialityy }) => {

  useEffect(() => {
    const ctx = gsap.context(() => {
      const banners = document.querySelector(".banners");
      const bannersBg = document.querySelector(".banners-bg");
      const bannersContent = document.querySelector(".banners-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

      tl.fromTo(
        ".banners-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      )
        .fromTo(
          ".banners-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".banners-img",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          ">-.5"
        );

      //parallax banners
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banners,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });

      const position = (banners.offsetHeight - bannersBg.offsetHeight) * 0.4;
      parallaxTl
        .fromTo(
          bannersBg,
          {
            y: 0,
          },
          {
            y: -position,
          }
        )
        .fromTo(
          bannersContent,
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        )
        .fromTo(
          ".banners-bg .circle",
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Base>
      <section className="pt-0 section banners">
        <div className="container-xl">
          <div className="relative">
            <div className="absolute top-0 left-0 bg-theme banners-bg col-12">
              <Circle
                className="circle left-[10%] top-12"
                width={32}
                height={32}
                fill={false}
              />
              <Circle
                className="circle left-[2.5%] top-[29%]"
                width={85}
                height={85}
              />
              <Circle
                className="circle bottom-[48%] left-[22%]"
                width={20}
                height={20}
              />
              <Circle
                className="circle bottom-[37%] left-[15%]"
                width={47}
                height={47}
                fill={false}
              />
              <Circle
                className="circle bottom-[13%] left-[6%]"
                width={62}
                height={62}
                fill={false}
              />
              <Circle
                className="circle right-[12%] top-[15%]"
                width={20}
                height={20}
              />
              <Circle
                className="circle right-[2%] top-[30%]"
                width={73}
                height={73}
                fill={false}
              />
              <Circle
                className="circle right-[19%] top-[48%]"
                width={37}
                height={37}
                fill={false}
              />
              <Circle
                className="circle right-[33%] top-[54%]"
                width={20}
                height={20}
              />
              <Circle
                className="circle bottom-[20%] right-[3%]"
                width={65}
                height={65}
              />
            </div>
            <div className="overflow-hidden row rounded-2xl">
              <div className="col-12">
                <div className="relative justify-center pb-10 row">
                  <div className="pt-20 pb-10 text-center banners-content col-10">
                    {markdownify(
                      banners.title,
                      "h1",
                      "mb-8 banners-title opacity-0"
                    )}
                    <div className="opacity-0 banners-btn">
                      <Link className="btn btn-primary" href={banners.link.href}>
                        {banners.link.label}
                      </Link>
                    </div>
                  </div>
                  {/* <div className="justify-center col-10 ">
                    <ImageFallback
                      className="opacity-0 banners-img"
                      src={banners.image}
                      width={770}
                      height={666}
                      priority={true}
                      alt=""
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Special Features */}
      <section className="section">
        <div className="container">
          <div className="items-center justify-center row">
            <div className="animate lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto"
                src={specialityy.primary.image}
                width={545}
                height={411}
                alt="primary specialityy"
              />
            </div>
            <div className="animate lg:col-5 lg:order-1">
              {/* <p>{specialityy.primary.subtitle}</p> */}
              {markdownify(
                specialityy.primary.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(specialityy.primary.description, "p", "mt-10")}
            </div>
          </div>
          <div className="items-center row">
            <div className="animate lg:col-6">
              <ImageFallback
                className="mx-auto"
                src={specialityy.secondary.image}
                width={545}
                height={411}
                alt="secondary specialityy"
              />
            </div>
            <div className="animate lg:col-5">
              {/* <p>{specialityy.secondary.subtitle}</p> */}
              {markdownify(
                specialityy.secondary.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(specialityy.secondary.description, "p", "mt-10")}
            </div>
          </div>
          <div className="items-center justify-center row">
            <div className="animate lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto"
                src={specialityy.primary2.image}
                width={545}
                height={511}
                alt="primary specialityy"
              />
            </div>
            <div className="animate lg:col-5 lg:order-1">
              {/* <p>{specialityy.primary2.subtitle}</p> */}
              {markdownify(
                specialityy.primary2.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(specialityy.primary2.description, "p", "mt-10")}
            </div>
          </div>
          <div className="items-center row">
            <div className="animate lg:col-6">
              <ImageFallback
                className="mx-auto"
                src={specialityy.secondary2.image}
                width={545}
                height={411}
                alt="secondary specialityy"
              />
            </div>
            <div className="animate lg:col-5">
              {/* <p>{specialityy.secondary2.subtitle}</p> */}
              {markdownify(
                specialityy.secondary2.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(specialityy.secondary2.description, "p", "mt-10")}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </Base>
  );
};

export default Industries;

// for Platform page data
export const getStaticProps = async () => {
  const industrypage = await getListPage("content/industrycontent.md");
  const { frontmatter } = industrypage;
  const { banners, specialityy } = frontmatter;

  return {
    props: {
      banners: banners,
      specialityy: specialityy,
    },
  };
};
