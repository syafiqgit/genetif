import Layout from "@/components/layout";
import heroImage from "@/assets/digital-agency.png";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <Layout>
      <section className="w-full" id="hero">
        <div className="w-full bg-hero h-screen bg-cover bg-center ">
          <div className="lg:flex justify-center items-center gap-14 pt-32">
            <div className="flex flex-col md:gap-10 gap-7 lg:mb-0 md:mb-12 mb-8 cursor-default">
              <h1 className="md:text-4xl text-xl lg:text-start text-center text-white font-bold md:w-[30rem] w-[20rem] lg:mx-0 mx-auto tracking-wide leading-snug">
                Grow & Expand your business with us
              </h1>
              <p className="md:text-lg text-base text-white lg:text-justify text-center lg:mx-0 mx-auto md:w-[37rem] w-[20rem]">
                We are a digital agency that helps your business grow in the
                digital era. We offer creative and innovative solutions for your
                design, development, marketing, and analytics needs. Contact us
                now and find out how we can help you achieve your goals.
              </p>
              <div className="flex items-center lg:mx-0 mx-auto gap-5">
                <Button
                  size={"lg"}
                  className="bg-color_1 hover:bg-color_2 transition-all md:text-lg"
                >
                  Learn more
                </Button>
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
    </Layout>
  );
}

export default Home;
