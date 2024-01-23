import Layout from "@/components/layout";
import heroImage from "@/assets/digital-agency.png";
import { Button } from "@/components/ui/button";
import aboutUsImage from "@/assets/570-5705464_wp-self-employed-business-training-workshop-cartoon-clipart.png";

function Home() {
  return (
    <Layout>
      <section className="w-full" id="hero">
        <div className="w-full bg-hero bg-cover bg-fixed bg-center pb-5">
          <div className="lg:flex justify-center items-center gap-14 pt-32">
            <div className="flex flex-col gap-7 lg:mb-0 md:mb-12 mb-8 cursor-default">
              <h1 className="md:text-4xl text-xl lg:text-start text-center text-color_5 font-bold md:w-[30rem] w-[20rem] lg:mx-0 mx-auto tracking-wide">
                Grow & Expand your business with us
              </h1>
              <p className="md:text-lg text-base text-white lg:text-justify text-center lg:mx-0 mx-auto md:w-[37rem] w-[20rem]">
                We are a digital agency that helps your business grow in the
                digital era. We offer creative and innovative solutions for your
                design, development, marketing, and analytics needs. Contact us
                now and find out how we can help you achieve your goals.
              </p>
              <div className="flex items-center lg:mx-0 mx-auto gap-5">
                <a href="#about-us">
                  <Button
                    size={"lg"}
                    className="bg-color_1 hover:bg-color_2 transition-all md:text-lg"
                  >
                    Learn more
                  </Button>
                </a>

                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="bg-color_4 md:text-lg text-white hover:bg-color_3 hover:text-white"
                >
                  Hire us
                </Button>
              </div>
            </div>
            <img
              src={heroImage}
              alt="https://genetif.id/"
              className="md:w-[32rem] w-[20rem] lg:mx-0 mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-gradient" id="about-us">
        <div className="flex flex-col justify-center items-center gap-5 mb-12">
          <p className="text-color_5 font-semibold text-4xl">
            About us
          </p>
          <p className=" text-white text-center lg:text-lg text-base md:w-[32rem] w-[20rem]">
            experience With years of experience in digital industry, we bring a
            wealth of expertise to every project
          </p>
        </div>
        <div className="lg:flex justify-center lg:gap-20 md:gap-10 lg:px-0 md:px-10">
          <img
            src={aboutUsImage}
            alt="genetif.id"
            className="lg:w-[27rem] md:w-[20rem] w-[15rem] lg:mx-0 mx-auto mb-8"
          />
          <div className="flex flex-col gap-5 md:w-[35rem] w-[20rem] lg:mx-0 mx-auto">
            <p className="lg:text-justify md:text-base text-sm text-center text-white">
              Esthablished Year of Establishment, Media agency was founded by{" "}
              <span className="font-bold text-color_5">Muzaki firdaus</span>,
              two digital enthusiasts who saw the limitless potential of the
              internet. What started as a small venture has since grown into a
              dynamic agency, serving clients worldwide.
            </p>
            <p className="lg:text-justify md:text-base text-sm text-center text-white mb-4">
              Our journey has been marked by innovation, collaboration, and a
              relentless. Experience in the digital industry, we bring a wealth
              of expertise to every project.
            </p>
            <Button
              variant={"outline"}
              size={"lg"}
              className="bg-transparent text-white w-fit md:text-lg hover:bg-slate-500 hover:text-white transition-all lg:mx-0 mx-auto"
            >
              Read more
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
