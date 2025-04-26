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
    <div className="bg-white text-gray-800 font-sans leading-relaxed">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${img2})` }}>
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-white text-4xl md:text-6xl font-bold z-10 text-center px-4 [text-shadow:_2px_2px_6px_rgba(0,0,0,0.7)]" data-aos="fade-down">
          About Olek Diagnostics
        </h1>
      </div>

      {/* Introduction */}
      <section className="py-16 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img src={clinic} alt="Our Lab Facility" className="rounded-xl shadow-xl" data-aos="fade-right" />
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold text-[#a01a5a] mb-4">Who We Are</h2>
          <p className="text-lg mb-4">
            At <strong>Olek Diagnostics</strong>, we are committed to revolutionizing healthcare with affordable and precise diagnostic services. Established in Dehradun, our lab blends compassion with cutting-edge science, ensuring that patients receive accurate results with complete clarity.
          </p>
          <p className="text-lg">
            We specialize in delivering high-quality lab tests, preventive health checkups, and diagnostic consultations tailored for individuals, families, and healthcare providers across Uttarakhand and beyond.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-gray-100 py-16 px-4" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#a01a5a]">Our Journey</h2>
          <p className="text-lg mb-4">
            Since our inception, Olek Diagnostics has grown from a small community lab into a trusted name in the diagnostics industry. Our journey has been defined by innovation, relentless quality control, and strong community engagement.
          </p>
          <p className="text-lg">
            From routine tests to specialized panels, our comprehensive diagnostic offerings are backed by NABL-equivalent lab standards and a patient-first philosophy.
          </p>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 px-4 max-w-6xl mx-auto" data-aos="fade-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#a01a5a] mb-3">Our Mission, Vision & Values</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold text-[#a01a5a] mb-2">Mission</h3>
            <p>To empower every individual with accessible, accurate, and affordable diagnostics—enabling informed decisions for better health outcomes.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#a01a5a] mb-2">Vision</h3>
            <p>To be the most trusted diagnostic partner in North India, transforming healthcare through innovation, compassion, and clinical excellence.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#a01a5a] mb-2">Core Values</h3>
            <ul className="space-y-1">
              <li><strong>Integrity</strong> in every report</li>
              <li><strong>Empathy</strong> in every interaction</li>
              <li><strong>Accuracy</strong> in every test</li>
              <li><strong>Innovation</strong> in every process</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="bg-gray-100 py-16 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#a01a5a] mb-6">Advanced Diagnostic Technology</h2>
          <p className="text-lg mb-4">
            Our lab is equipped with fully automated analyzers, digital pathology systems, and AI-powered reporting tools to ensure consistent and reliable outcomes. With real-time data sharing, secure portals, and cloud-based reports, we bring diagnostics into the modern age.
          </p>
        </div>
      </section>

      {/* Meet Our Team */}
      {/* <section className="py-16 px-4 max-w-6xl mx-auto" data-aos="fade-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#a01a5a]">Meet Our Experts</h2>
          <p className="text-lg mt-2">A team of dedicated pathologists, lab technologists, and diagnostic specialists committed to your well-being.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-xl font-semibold">Dr. Anjali Mehta</h4>
            <p className="text-sm text-gray-600">Chief Pathologist</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Dr. Kunal Verma</h4>
            <p className="text-sm text-gray-600">Radiology Consultant</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Ritika Sharma</h4>
            <p className="text-sm text-gray-600">Lab Operations Manager</p>
          </div>
        </div>
      </section> */}

      {/* Patient Testimonials */}
      <section className="bg-gray-100 py-16 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#a01a5a] mb-6">What Our Patients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="bg-white p-6 shadow-lg rounded-lg">
              <p className="text-lg italic">“The staff was so polite and the test reports came earlier than expected. Highly recommended!”</p>
              <cite className="block mt-4 text-sm font-medium">– Neha Thakur, Dehradun</cite>
            </blockquote>
            <blockquote className="bg-white p-6 shadow-lg rounded-lg">
              <p className="text-lg italic">“Clean facility, affordable prices, and super professional. I trust them with all my family checkups.”</p>
              <cite className="block mt-4 text-sm font-medium">– Rajeev S., GMS Road</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
