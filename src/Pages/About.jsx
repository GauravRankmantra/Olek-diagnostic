import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img2 from "../assets/Images/HomeImg2.jpg";
import clinic from "../assets/Images/clinic.jpg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${img2})` }}>
        <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
        <h1 className="text-white text-4xl md:text-6xl font-bold z-10 text-center px-4 [text-shadow:_2px_2px_6px_rgba(0,0,0,0.7)]" data-aos="fade-down">
          Discover Olek Diagnostics
        </h1>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={clinic} alt="Olek Diagnostics Clinic" className="rounded-lg shadow-lg" data-aos="fade-right" />
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold text-[#a01a5a] mb-4">Redefining Diagnostic Excellence</h2>
            <p className="text-lg leading-relaxed mb-4">
              At <strong>Olek Diagnostics</strong>, we don’t just offer tests — we provide insights. Located in the heart of Dehradun, we’re committed to transforming the healthcare experience through accuracy, innovation, and empathy. Our modern infrastructure, state-of-the-art equipment, and expert medical staff ensure that every test leads to clarity and confidence in your health journey.
            </p>
            <p className="text-lg leading-relaxed">
              With an unwavering commitment to quality and a patient-first philosophy, we empower you to make informed decisions about your health in a stress-free and hygienic environment.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16 px-4" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#a01a5a]">Why Olek Diagnostics?</h2>
          <p className="text-lg leading-relaxed mb-6">
            In a world of uncertainty, accurate diagnostics is your first line of defense. Whether it’s a routine check-up or a specialized test, our team ensures precision, promptness, and privacy every step of the way. Our technology-driven systems eliminate guesswork and bring you closer to proactive health management.
          </p>
          <p className="text-lg leading-relaxed">
            With years of trusted service, we have become a preferred choice for thousands across Uttarakhand seeking dependable health diagnostics without compromising comfort or cost.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 px-4 max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#a01a5a]">Our Vision & Mission</h2>
        <p className="text-lg text-center leading-relaxed mb-4">
          Our vision is to create a healthier society by making early detection and preventive diagnostics accessible, affordable, and reliable for everyone.
        </p>
        <p className="text-lg text-center leading-relaxed">
          Our mission is to uphold the highest standards of medical testing, driven by continuous innovation, compassion, and collaboration with medical professionals, while placing our patients’ well-being at the core of every decision we make.
        </p>
      </section>

      {/* Our Core Values */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#a01a5a]" data-aos="fade-up">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div data-aos="fade-right">
              <h4 className="text-xl font-semibold mb-2">Uncompromised Accuracy</h4>
              <p>
                Accuracy is not an option — it’s our standard. Every report is verified and validated through stringent quality controls, ensuring medical precision and peace of mind.
              </p>
            </div>
            <div data-aos="fade-left">
              <h4 className="text-xl font-semibold mb-2">People First</h4>
              <p>
                From walk-in patients to partner physicians, every interaction is guided by empathy, respect, and responsiveness. Your comfort and confidence are our priority.
              </p>
            </div>
            <div data-aos="fade-right">
              <h4 className="text-xl font-semibold mb-2">Transparency & Trust</h4>
              <p>
                We believe in complete transparency in our processes, prices, and results — building long-term trust with every patient we serve.
              </p>
            </div>
            <div data-aos="fade-left">
              <h4 className="text-xl font-semibold mb-2">Excellence Through Innovation</h4>
              <p>
                Our diagnostic labs are equipped with cutting-edge technology and constantly evolving practices to ensure timely and accurate diagnostics at all times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
