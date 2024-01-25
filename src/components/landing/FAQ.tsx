import { ReactNode, useState } from "react";

interface ItemProps {
  title: string;
  children: ReactNode;
}

const Item = ({ title, children }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="space-y-4">
          <Item title=" What types of cloud services does Skyward Solutions offer?">
            Skyward Solutions provides a comprehensive range of cloud services,
            including cloud storage, cloud computing, cloud security, and
            cloud-based application hosting. Our solutions are tailored to meet
            the diverse needs of businesses, ensuring scalability, reliability,
            and performance.
          </Item>
          <Item title="How does cloud integration with Skyward Solutions improve my business operations?">
            Integrating cloud services with Skyward Solutions enhances
            operational efficiency, reduces IT overhead, and provides flexible
            scalability. Our cloud solutions facilitate remote work, improve
            data accessibility, and ensure business continuity, enabling your
            team to work more effectively and focus on growth.
          </Item>
          <Item title=" Is my data secure with Skyward Solutions' cloud services?">
            Absolutely. At Skyward Solutions, we prioritize the security of your
            data. Our cloud services are equipped with advanced encryption,
            secure data centers, and comprehensive compliance with
            industry-standard security protocols. We continuously update our
            security measures to safeguard your information against evolving
            threats.
          </Item>
          <Item title="Can Skyward Solutions help with cloud migration and support?">
            Yes, we offer full support for cloud migration. Our team of experts
            will guide you through the migration process, ensuring a smooth
            transition with minimal disruption to your business. We provide
            ongoing support and maintenance, helping you to maximize the
            benefits of cloud technology and address any challenges swiftly.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
