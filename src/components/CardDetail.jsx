import React from "react";
import { X } from "lucide-react";

const CardDetail = ({ type, bookNow, onClose, data }) => {
  if (!data) return null;
  const handelBookNow = () => {
    onClose();
    setTimeout(() => {
      bookNow();
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 ">
      <div className="bg-white md:mt-0 mt-10 rounded-2xl shadow-xl max-w-4xl w-full overflow-hidden relative animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute cursor-pointer top-3 right-3 text-gray-600 hover:text-red-500 z-10"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-4 bg-[rgba(255,164,208,0.2)]">
          {/* Image */}
          <div className="w-full h-36 sm:h-64 md:h-auto overflow-hidden">
            <img
              src={data.img}
              alt={data.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Details */}
          <div className="p-6 space-y-1.5  overflow-y-auto max-h-[80vh] font-ralewayR text-start">
            <h2 className="text-2xl md:text-3xl font-ralewayB text-[#a01a5a] mb-2">
              {data.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4 ">{data.description}</p>

            {type == "services" && (
              <div className="mb-4">
                <h3 className="font-ralewayB text-lg text-gray-700 mb-1">
                  Components:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  {data.components?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {type == "services" && (
              <div className="space-y-6 text-sm text-gray-700">
                <div>
                  <strong className="font-ralewayB text-lg">Importance:</strong>
                  <p>{data.importance}</p>
                </div>
                <div>
                  <strong className="font-ralewayB text-lg">
                    Recommended When:
                  </strong>
                  <p>{data.recommendedWhen}</p>
                </div>
                <div>
                  <strong className="font-ralewayB text-lg">
                    Patient Preparation:
                  </strong>
                  <p>{data.patientPreparation}</p>
                </div>
                <div>
                  <strong className="font-ralewayB text-lg">
                    Interpretation:
                  </strong>
                  <pre className="whitespace-pre-wrap">
                    {data.interpretation}
                  </pre>
                </div>
              </div>
            )}
            {type === "packages" && data.tests && (
              <div className="mb-4">
                <h3 className="font-ralewayB text-lg text-gray-700 mb-1">
                  Tests:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  {data.tests.split(",").map((item, index) => (
                    <li key={index}>{item.trim()}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price & Book Button */}
            <div className="mt-6 flex items-center justify-between">
              {type === "services" && (
                <span className="text-lg font-sans font-semibold text-[#a01a5a]">
                  ₹{data.price}
                </span>
              )}

              {type === "packages" && (
                <span className="text-lg flex flex-col font-sans font-semibold text-[#a01a5a]">
                  Actual Price <span>₹ {data.ActualPrice}</span>
                </span>
              )}
              {type === "packages" && (
                <span className="text-lg flex flex-col font-sans font-semibold text-[#a01a5a]">
                  Offer Price{" "}
                  <span className="text-green-700">₹ {data.OfferPrice}</span>
                </span>
              )}

              <button
                onClick={handelBookNow}
                className="bg-[#a01a5a] text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-[#482235] transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
