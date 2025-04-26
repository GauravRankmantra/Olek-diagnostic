import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 font-raleway">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#a01a5a]">
        Privacy Policy
      </h1>

      <section className="space-y-4">
        <p>
          At Olek Diagnostics, we are committed to safeguarding the privacy of
          all personal and medical information entrusted to us. This Privacy
          Policy outlines how we collect, use, and protect your data when you
          use our diagnostic services, visit our website, or access your medical
          records through our systems.
        </p>
        <p>
          By using our services, you agree to the collection and use of
          information in accordance with this policy.
        </p>
      </section>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-semibold text-[#a01a5a] mb-4">
        Information We Collect
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Personal Identification Information:</strong> Full name, date
          of birth, contact number, email address, postal address, and gender.
        </li>
        <li>
          <strong>Medical Records:</strong> Lab test requests, diagnostic
          reports, prescriptions, doctor referrals, and health history submitted
          by you or your physician.
        </li>
        <li>
          <strong>Payment Information:</strong> payment method, and transaction
          history (processed through secure third-party providers).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#a01a5a] mt-8 mb-4">
        Use of Information
      </h2>
      <p>
        We use your personal and medical data solely for the following purposes:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          To conduct diagnostic tests and generate medical reports accurately.
        </li>
        <li>
          To contact you regarding test results, follow-ups, or service
          feedback.
        </li>
        <li>
          To provide access to your reports via secured online portals or email.
        </li>
        <li>
          To improve our diagnostic services, accuracy, and user experience.
        </li>
        <li>
          To comply with legal and regulatory requirements for healthcare
          providers.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#a01a5a] mt-8 mb-4">
        Protection of Your Data
      </h2>
      <p>
        All data, including your diagnostic reports, are stored on secure,
        encrypted servers and are accessible only to authorized personnel. We
        implement stringent physical, electronic, and managerial measures to
        ensure data confidentiality.
      </p>
      <p>
        Your data is never shared, sold, or disclosed to any third party without
        your explicit consent, unless required by law or court order.
      </p>

      <h2 className="text-2xl font-semibold text-[#a01a5a] mt-8 mb-4">
        Medical Reports
      </h2>

      <p>
        Reports are stored for a defined period as mandated by local medical
        record retention laws and then securely deleted or archived.
      </p>

      <h2 className="text-2xl font-semibold text-[#a01a5a] mt-8 mb-4">
        Data Sharing and Legal Compliance
      </h2>
      <p>We may disclose information only when:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Required by regulatory authorities or court orders.</li>
        <li>
          To healthcare professionals involved in your treatment (with your
          consent).
        </li>
        <li>
          To insurance providers, if you are availing claim-based diagnostics.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#a01a5a] mt-8 mb-4">
        Cookies and Website Tracking
      </h2>
      <p>
        Our website may use cookies for basic functionality and analytics.
        However, we do not store any personal or medical information in cookies
        or trackers. Your browsing data is anonymous and never linked to your
        lab reports or personal identity.
      </p>

      <h2 className="text-2xl font-semibold text-[#a01a5a] mt-8 mb-4">
        Your Consent
      </h2>
      <p>
        By accessing our services or submitting your samples, you provide
        informed consent for us to collect and use your medical information for
        diagnostic and service-related purposes, as outlined in this policy.
      </p>

      <h2 className="text-2xl font-semibold text-[#a01a5a] mt-8 mb-4">
        Updates to the Privacy Policy
      </h2>
      <p>
        We may update this policy from time to time. Any changes will be posted
        on this page with the revised effective date.
      </p>

      <h2 className="text-2xl font-semibold text-[#a01a5a] mt-8 mb-4">
        Contact Us
      </h2>
      <p>
        For questions, concerns, or requests related to your personal data or
        this privacy policy, please contact us via the details provided on our
        website or visit your nearest Olek Diagnostics branch.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
