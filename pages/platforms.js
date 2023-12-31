import Base from "@layouts/Baseof";
import Circle from "@layouts/components/Circle";
import ImageFallback from "@layouts/components/ImageFallback";
import Footer from "@layouts/partials/Footer";
import { getListPage } from "@lib/contentParser";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Platforms = ({ bannerr, features, specialities }) => {
  const paginationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bannerr = document.querySelector(".bannerr");
      const bannerrBg = document.querySelector(".bannerr-bg");
      const bannerrContent = document.querySelector(".bannerr-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

      tl.fromTo(
        ".bannerr-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      )
        .fromTo(
          ".bannerr-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".bannerr-img",
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

      //parallax bannerr
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: bannerr,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });

      const position = (bannerr.offsetHeight - bannerrBg.offsetHeight) * 0.4;
      parallaxTl
        .fromTo(
          bannerrBg,
          {
            y: 0,
          },
          {
            y: -position,
          }
        )
        .fromTo(
          bannerrContent,
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        )
        .fromTo(
          ".bannerr-bg .circle",
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
      <section className="section bannerr pt-0">
        <div className="container-xl">
          <div className="relative">
            <div className="bg-theme bannerr-bg col-12 absolute left-0 top-0">
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
            <div className="row overflow-hidden rounded-2xl">
              <div className="col-12">
                <div className="row relative justify-center pb-10">
                  <div className="bannerr-content col-10 pb-10 pt-20 text-center">
                    {markdownify(
                      bannerr.title,
                      "h1",
                      "mb-8 bannerr-title opacity-0"
                    )}
                    <div className="bannerr-btn opacity-0">
                      <Link
                        className="btn btn-primary"
                        href={bannerr.link.href}
                      >
                        {bannerr.link.label}
                      </Link>
                    </div>
                  </div>
                  <div className="col-10">
                    <ImageFallback
                      className="bannerr-img opacity-0"
                      src={bannerr.image}
                      width={1170}
                      height={666}
                      priority={true}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Special Features */}
      <section className="section">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="animate lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto"
                src={specialities.primary.image}
                width={575}
                height={511}
                alt="primary specialities"
              />
            </div>
            <div className="animate lg:col-5 lg:order-1">
              <p>{specialities.primary.subtitle}</p>
              {markdownify(
                specialities.primary.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(specialities.primary.description, "p", "mt-10")}
            </div>
          </div>
          <div className="row items-center">
            <div className="animate lg:col-6">
              <ImageFallback
                className="mx-auto"
                src={specialities.secondary.image}
                width={575}
                height={511}
                alt="secondary specialities"
              />
            </div>
            <div className="animate lg:col-5">
              <p>{specialities.secondary.subtitle}</p>
              {markdownify(
                specialities.secondary.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(specialities.secondary.description, "p", "mt-10")}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container text-center">
          <div className="animate">
            <p className="uppercase">{features.sub_title}</p>
            {markdownify(features.title, "h2", "mt-4 section-title")}
            {markdownify(features.description, "p", "mt-10")}
          </div>
          <div className="animate from-right relative mt-10">
            <Swiper
              slidesPerView={1}
              loop={true}
              navigation={{
                clickable: true,
                type: "arrow",
              }}
              style={{
                "--swiper-navigation-color": "#fff",
              }}
              pagination={{
                type: "bullets",
                el: paginationRef.current,
                clickable: true,
                dynamicBullets: true,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
              }}
              modules={[Pagination, Navigation]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {features.list.map((item, index) => (
                <SwiperSlide key={"feature-" + index}>
                  <div className="feature-card m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                    <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                      <FeatherIcon icon={item.icon} />
                    </div>
                    <h3 className="h4 mb-5 mt-6">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="relative mt-9 flex justify-center">
              <div className="pagination " ref={paginationRef}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </Base>
  );
};

export default Platforms;

// for Platform page data
export const getStaticProps = async () => {
  const platformpage = await getListPage("content/platformcontent.md");
  const { frontmatter } = platformpage;
  const { bannerr, features, specialities } = frontmatter;

  return {
    props: {
      bannerr: bannerr,
      features: features,
      specialities: specialities,
    },
  };
};
