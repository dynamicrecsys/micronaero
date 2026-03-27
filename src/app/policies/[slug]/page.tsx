import type { Metadata } from "next";
import { notFound } from "next/navigation";

/* -------------------------------------------------------------------------- */
/*  Policy content                                                             */
/* -------------------------------------------------------------------------- */

type PolicyData = {
  title: string;
  metaDescription: string;
  lastUpdated: string;
  sections: { heading: string; content: string[] }[];
};

const POLICIES: Record<string, PolicyData> = {
  "privacy-policy": {
    title: "Privacy Policy",
    metaDescription:
      "Privacy policy for Micron Aerosols (Deepak Industries). Learn how we collect, use, and protect your personal information.",
    lastUpdated: "2026-03-01",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Micron Aerosols, a brand of Deepak Industries (\"we\", \"us\", \"our\"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website micronaero.com, use our services, or interact with us in any way.",
          "By accessing or using our website and services, you consent to the data practices described in this policy. This policy complies with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 of India.",
        ],
      },
      {
        heading: "Information We Collect",
        content: [
          "Personal Information: When you fill out a contact form, request a quote, apply to become a dealer, or place an order, we collect information such as your name, email address, phone number, company name, city, and business requirements.",
          "Usage Data: We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages visited, time spent on pages, and other diagnostic data.",
          "Cookies and Tracking: We use cookies and similar tracking technologies (Google Analytics, Meta Pixel) to monitor activity on our website, improve user experience, and measure advertising effectiveness. You can control cookie preferences through your browser settings.",
        ],
      },
      {
        heading: "How We Use Your Information",
        content: [
          "We use the information we collect for the following purposes: to respond to your inquiries and provide customer support; to process and fulfill orders; to send you product information, quotes, and business communications you have requested; to improve our website, products, and services; to analyze website usage patterns and optimize user experience; to comply with legal obligations and enforce our terms of service.",
          "We do not sell, trade, or rent your personal information to third parties for their marketing purposes. We may share your information with trusted service providers (such as payment processors and shipping partners) who assist us in operating our business, provided they agree to keep this information confidential.",
        ],
      },
      {
        heading: "Data Security",
        content: [
          "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include SSL encryption for data in transit, secure server infrastructure, and access controls for our team members.",
          "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.",
        ],
      },
      {
        heading: "Your Rights",
        content: [
          "You have the right to access, correct, or delete your personal information held by us. You may request a copy of your data, ask us to update inaccurate information, or request deletion of your data (subject to legal retention requirements). To exercise these rights, contact us at info@micronaero.com.",
          "You may opt out of marketing communications at any time by clicking the unsubscribe link in our emails or by contacting us directly.",
        ],
      },
      {
        heading: "Third-Party Services",
        content: [
          "Our website may contain links to third-party websites and services (such as social media platforms). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.",
          "We use Google Analytics and Meta Pixel for website analytics and advertising. These services may collect information about your online activities across different websites. You can opt out of Google Analytics using the Google Analytics Opt-out Browser Add-on.",
        ],
      },
      {
        heading: "Changes to This Policy",
        content: [
          "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
        ],
      },
      {
        heading: "Contact Us",
        content: [
          "If you have questions about this Privacy Policy or our data practices, please contact us at: Micron Aerosols (Deepak Industries), 54, Industrial Estate, Sangamner, Maharashtra 422605, India. Email: info@micronaero.com.",
        ],
      },
    ],
  },
  "refund-policy": {
    title: "Refund & Return Policy",
    metaDescription:
      "Refund and return policy for Micron Aerosols products. 7-day return window for unopened products in original condition.",
    lastUpdated: "2026-03-01",
    sections: [
      {
        heading: "Overview",
        content: [
          "At Micron Aerosols (Deepak Industries), we stand behind the quality of our products. If you are not satisfied with your purchase, we offer a straightforward return and refund process. This policy applies to all products purchased directly through our website micronaero.com or through our authorized sales channels.",
        ],
      },
      {
        heading: "Return Eligibility",
        content: [
          "You may return products within 7 days of delivery, provided the following conditions are met: the product is unused and unopened, in its original packaging with all labels and seals intact; the product has not been tampered with, damaged by misuse, or exposed to conditions outside its specified storage requirements; you have a valid proof of purchase (order confirmation, invoice, or receipt).",
          "Due to the chemical nature of our products, opened or partially used aerosol cans cannot be accepted for return for safety and quality reasons. Customized or OEM products manufactured to your specifications are non-returnable.",
        ],
      },
      {
        heading: "How to Initiate a Return",
        content: [
          "To initiate a return, contact our team at info@micronaero.com or call +91 98220 36498 within 7 days of receiving your order. Please include your order number, the product(s) you wish to return, and the reason for return. Our team will provide you with return shipping instructions and a return authorization number.",
          "Products must be shipped back to our facility in Sangamner, Maharashtra in secure packaging to prevent damage during transit. Return shipping costs are borne by the customer unless the return is due to a defective product or an error on our part.",
        ],
      },
      {
        heading: "Refund Process",
        content: [
          "Once we receive and inspect the returned product, we will notify you of the approval or rejection of your refund. Approved refunds will be processed within 7-10 business days and credited to your original payment method.",
          "For orders paid by bank transfer or cheque, refunds will be issued via NEFT/RTGS to your bank account. Please allow additional time for your bank to process the credit.",
        ],
      },
      {
        heading: "Defective or Damaged Products",
        content: [
          "If you receive a defective or damaged product, please contact us immediately with photographs of the damage and your order details. We will arrange a replacement or full refund at no additional cost to you, including return shipping charges.",
          "Product performance issues should be reported to our technical team, who can provide application guidance and determine if the product is functioning as specified.",
        ],
      },
      {
        heading: "Cancellations",
        content: [
          "Orders may be cancelled free of charge before they are dispatched from our facility. Once an order has been shipped, it cannot be cancelled and must follow the return process described above.",
        ],
      },
      {
        heading: "Contact",
        content: [
          "For any questions regarding returns or refunds, please contact us at: Email: info@micronaero.com, Phone: +91 98220 36498. Our customer service team is available Monday to Saturday, 9:00 AM to 6:00 PM IST.",
        ],
      },
    ],
  },
  "shipping-policy": {
    title: "Shipping Policy",
    metaDescription:
      "Shipping policy for Micron Aerosols. Pan-India delivery within 5-7 business days. Hazardous goods compliant shipping for aerosol products.",
    lastUpdated: "2026-03-01",
    sections: [
      {
        heading: "Shipping Coverage",
        content: [
          "Micron Aerosols ships to all major cities and towns across India. Our products are dispatched from our manufacturing facility in Sangamner, Maharashtra (Pin: 422605). We currently serve the entire Indian market through our logistics network.",
          "For international orders and bulk export shipments, please contact our sales team directly at info@micronaero.com for shipping arrangements and pricing.",
        ],
      },
      {
        heading: "Delivery Timelines",
        content: [
          "Standard delivery: 5-7 business days from the date of dispatch for most locations across India. Metro cities (Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad) typically receive orders within 3-5 business days.",
          "Remote and rural areas may require an additional 2-3 business days beyond the standard timeline. Delivery timelines are estimates and may be affected by weather conditions, transportation disruptions, or public holidays.",
          "Order processing takes 1-2 business days from the time of order confirmation and payment verification. You will receive a dispatch confirmation with tracking details via email and SMS once your order ships.",
        ],
      },
      {
        heading: "Shipping Charges",
        content: [
          "Shipping charges are calculated based on order weight, dimensions, and delivery location. The exact shipping cost will be displayed at checkout before you complete your order.",
          "Free shipping may be available for orders above a certain value — check the current offer on our website or contact our sales team for bulk order shipping rates.",
        ],
      },
      {
        heading: "Aerosol Shipping Compliance",
        content: [
          "Aerosol products are classified as pressurized containers and must be shipped in compliance with PESO (Petroleum and Explosives Safety Organisation) regulations and IATA Dangerous Goods Regulations for air transport. All our shipments comply with applicable hazardous goods transportation requirements.",
          "Due to these regulations, aerosol products may only be shipped via ground transport within India. Air shipment of aerosol products requires special documentation and is available only for B2B orders with prior arrangement.",
        ],
      },
      {
        heading: "Order Tracking",
        content: [
          "Once your order is dispatched, you will receive a tracking number via email and SMS. You can track your shipment status using the courier partner's website or by contacting our customer service team.",
        ],
      },
      {
        heading: "Packaging",
        content: [
          "All products are securely packaged to prevent damage during transit. Aerosol cans are individually wrapped and placed in corrugated cartons with appropriate cushioning material. Bulk orders are palletized for safe handling.",
        ],
      },
      {
        heading: "Delivery Issues",
        content: [
          "If your order arrives damaged, is missing items, or is not delivered within the expected timeframe, please contact us within 48 hours at info@micronaero.com or call +91 98220 36498. We will work with our logistics partner to resolve the issue promptly.",
          "In case of non-delivery or lost shipments, we will arrange a re-shipment or full refund after investigation with the courier partner.",
        ],
      },
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    metaDescription:
      "Terms of service for Micron Aerosols (Deepak Industries). Terms governing the use of our website and purchase of our products.",
    lastUpdated: "2026-03-01",
    sections: [
      {
        heading: "Acceptance of Terms",
        content: [
          "By accessing and using the website micronaero.com (the \"Site\") operated by Micron Aerosols, a brand of Deepak Industries (\"we\", \"us\", \"our\"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our Site or services.",
          "We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the Site after any changes constitutes acceptance of the revised terms.",
        ],
      },
      {
        heading: "Products and Services",
        content: [
          "We manufacture and sell industrial aerosol products including mould release agents, conformal coatings, anti-spatter sprays, cleaners, lubricants, and specialty chemicals. Product descriptions, specifications, and images on our Site are provided for informational purposes and may not reflect the exact appearance of the physical product.",
          "We reserve the right to modify, discontinue, or update our product range at any time without prior notice. Product availability is subject to stock levels and manufacturing schedules.",
        ],
      },
      {
        heading: "Orders and Payment",
        content: [
          "All orders placed through our Site or sales channels are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, pricing errors, or suspected fraudulent activity.",
          "Prices listed on our Site are in Indian Rupees (INR) and are exclusive of applicable taxes (GST) and shipping charges unless otherwise stated. We reserve the right to change prices at any time. The price applicable to your order is the price displayed at the time of order placement.",
          "Payment terms for B2B orders are as agreed upon in writing between the parties. For online orders, payment must be completed at the time of order placement through the available payment methods.",
        ],
      },
      {
        heading: "Product Use and Safety",
        content: [
          "Our products are industrial chemicals and aerosols intended for professional and industrial use. Users must read and follow all safety instructions, Material Safety Data Sheets (MSDS), and Technical Data Sheets (TDS) provided with each product.",
          "We are not liable for any damage, injury, or loss resulting from improper use, storage, or handling of our products contrary to the provided instructions and safety guidelines. Users are responsible for ensuring that our products are suitable for their intended application.",
        ],
      },
      {
        heading: "Intellectual Property",
        content: [
          "All content on this Site, including but not limited to text, graphics, logos, images, product descriptions, and software, is the property of Micron Aerosols / Deepak Industries and is protected by Indian and international intellectual property laws.",
          "The Micron Aerosols name, logo, and all related product names and trademarks are trademarks of Deepak Industries. You may not use our trademarks without prior written consent.",
        ],
      },
      {
        heading: "Limitation of Liability",
        content: [
          "To the maximum extent permitted by applicable law, Micron Aerosols and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Site or products.",
          "Our total liability for any claim arising from or related to these terms or our products shall not exceed the amount paid by you for the specific product(s) giving rise to the claim.",
        ],
      },
      {
        heading: "Governing Law and Jurisdiction",
        content: [
          "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of our Site shall be subject to the exclusive jurisdiction of the courts in Ahmednagar, Maharashtra, India.",
        ],
      },
      {
        heading: "Contact",
        content: [
          "For questions about these Terms of Service, please contact us at: Micron Aerosols (Deepak Industries), 54, Industrial Estate, Sangamner, Maharashtra 422605, India. Email: info@micronaero.com.",
        ],
      },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*  Metadata & static params                                                   */
/* -------------------------------------------------------------------------- */

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const policy = POLICIES[slug];
  if (!policy) return { title: "Policy Not Found" };
  return { title: policy.title, description: policy.metaDescription };
}

export function generateStaticParams() {
  return Object.keys(POLICIES).map((slug) => ({ slug }));
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default async function PolicyPage({ params }: Props) {
  const { slug } = await params;
  const policy = POLICIES[slug];
  if (!policy) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-dark-bg px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold uppercase tracking-wider md:text-4xl">
            {policy.title}
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            Last updated:{" "}
            {new Date(policy.lastUpdated).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <div className="space-y-10">
          {policy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-bold uppercase tracking-wider text-heading">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-3">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-[#4d4d4d]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
