import React from "react";

const Footer = () => {
  return (
    <div className="w-[93vw] h-[13vh] my-6 mx-auto bg-zinc-100 border-y-4 flex items-center overflow-hidden border-zinc-500">
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          {/* Scrolling text block with duplicate text for seamless looping */}
          <p className="text-3xl text-red-500 font-semibold inline-block">
            हमारा जनहित मिशन-निरबल की लड़ाई बलवान से इरादे मेरे हमेशा साफ होते हैं,इसलिए लोग अक्सर मेरे खिलाफ होते हैं.&nbsp; • &nbsp;
          </p>
          <p className="text-3xl text-red-500 font-semibold inline-block">
            सच्चा इंसान ना तो नास्तिक होता है और ना ही आस्तिक.वह तो हमेशा वास्तविक होता है. &nbsp; • &nbsp;
          </p>
          <p className="text-3xl text-red-500 font-semibold inline-block">
            जिन्दगी तो अपने दम पर ही जी जाती है-दूसरों के कंधों पर तो जनाजे उठा करते हैं. &nbsp; • &nbsp;
          </p>

          {/* Duplicate the same text to make the scroll seamless */}
          <p className="text-3xl text-red-500 font-semibold inline-block">
            हमारा जनहित मिशन-निरबल की लड़ाई बलवान से इरादे मेरे हमेशा साफ होते हैं,इसलिए लोग अक्सर मेरे खिलाफ होते हैं.&nbsp; • &nbsp;
          </p>
          <p className="text-3xl text-red-500 font-semibold inline-block">
            सच्चा इंसान ना तो नास्तिक होता है और ना ही आस्तिक.वह तो हमेशा वास्तविक होता है. &nbsp; • &nbsp;
          </p>
          <p className="text-3xl text-red-500 font-semibold inline-block">
            जिन्दगी तो अपने दम पर ही जी जाती है-दूसरों के कंधों पर तो जनाजे उठा करते हैं. &nbsp; • &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
