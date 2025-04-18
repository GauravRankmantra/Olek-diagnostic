import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <div className="w-full px-4 my-10 py-12 bg-gray-200">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 grid-cols-1">
        {/* Contact Info */}
        <div className="p-8 flex flex-col font-ralewayM text-[#005b4c] justify-center bg-gradient-to-br from-[#dff391] to-[#f1ffb7] ">
          <h2 className="text-2xl font-bold mb-4 ">Get In Touch</h2>
          <p className="mb-6 text-sm">
            We're always here to help! Reach out to us through the following
            contact details.
          </p>

          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-8 h-10 mt-1" />
            <div>
              <p className="font-bold">Our Office</p>
              <p className="text-sm">
                Shimla Enclave, GMS Rd, near St Jude's Chowk, Sewla Kalan,
                Majra, Dehradun, Shewala Kala, Uttarakhand 248171
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <Phone className="w-5 h-5 mt-1" />
            <div>
              <p className="font-bold">Phone</p>
              <p className="text-sm font-sans">09368548552</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 mt-1" />
            <div>
              <p className="font-bold">Email</p>
              <p className="text-sm">olekdiagnosticsandhealth@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-96 md:h-auto">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9901021454566!2d77.9981482!3d30.294343399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b92a800d613%3A0x9ab6c58f499af140!2sOlek%20Diagnostics!5e0!3m2!1sen!2sin!4v1744961477144!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
