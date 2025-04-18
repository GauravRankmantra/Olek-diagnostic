import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img2 from "../assets/Images/HomeImg2.jpg";
import clinic from "../assets/Images/clinic.jpg"

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"  style={{ backgroundImage: `url(${img2})` }}>
        <div className="bg-black/20 bg-opacity-50 w-full h-full absolute top-0 left-0" />
        <h1 className="text-white  [text-shadow:_2px_2px_4px_rgba(0,0,0,0.7)] text-4xl md:text-6xl font-bold z-10 text-center px-4" data-aos="fade-down">
          About Olek Diagnostics
        </h1>
      </div>

      {/* Intro */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={clinic} alt="Clinic" className="rounded-lg shadow-lg" data-aos="fade-right" />
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              We, Olek Diagnostics situated at Dehradun, Uttarakhand, have state-of-the-art clinics with modern equipment. Our clinic is ergonomically designed keeping the patients comfort in mind. All patients are assured of the best service in a very non-stressful ambiance and thorough attention is paid to hygiene and sanitation. Healthcare is simplified like never before! With our rich knowledge and experience, be assured of quality healthcare service.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-gray-100 py-16 px-4" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-lg leading-relaxed">
            Olek Diagnostics has been set up with the core philosophy centred on providing an unparalleled level of accuracy in test results, fostering trust and confidence among patients and healthcare professionals alike. This commitment to accuracy is complemented by a pricing model that prioritises accessibility without compromising the quality of service.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-4">Our Vision</h2>
        <p className="text-lg text-center leading-relaxed">
          Our vision is to enhance the healthcare outcomes and contribute to the well-being of individuals, with reliable & affordable diagnostic solutions.
        </p>
      </section>

      {/* Values */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div data-aos="fade-right">
              <h4 className="text-xl font-semibold mb-2">Accuracy and Precision</h4>
              <p>
                Ensuring the highest standards of accuracy and precision in all diagnostic procedures and test results is fundamental by rigorous quality control measures and adherence to established protocols.
              </p>
            </div>
            <div data-aos="fade-left">
              <h4 className="text-xl font-semibold mb-2">Patient-Centric Approach</h4>
              <p>
                Putting patients first by focusing on compassionate care, clear communication of results, and prioritising their well-being.
              </p>
            </div>
            <div data-aos="fade-right">
              <h4 className="text-xl font-semibold mb-2">Ethical Practices</h4>
              <p>
                Upholding the highest ethical standards in handling patient samples, maintaining confidentiality, and ensuring the integrity of diagnostic procedures.
              </p>
            </div>
            <div data-aos="fade-left">
              <h4 className="text-xl font-semibold mb-2">Collaboration and Teamwork</h4>
              <p>
                Encouraging a collaborative environment among laboratory staff & healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;