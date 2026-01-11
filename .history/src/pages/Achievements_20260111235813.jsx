import React from "react";

const certs = {
  tech: [
    {
      title: "Databricks Generative AI Fundamentals",
      org: "Databricks",
      date: "2025",
      img: "/certs/Databricks Generative AI Fundamentals.jpg",
      link: "/certs/Databricks Generative AI.pdf",
    },
    {
      title: "Career Essentials in Generative AI",
      org: "Microsoft & LinkedIn",
      date: "Dec 2025",
      img: "/certs/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.png",
      link: "/certs/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf",
    },
    {
      title: "SQL (Basic)",
      org: "HackerRank",
      date: "Jan 2025",
      img: "/certs/sql_basic certificate.png",
      link: "/certs/sql_basic certificate.pdf",
    },
    {
      title: "SQL (Intermediate)",
      org: "HackerRank",
      date: "2025",
      img: "/certs/sql_intermediate certificate.png",
      link: "/certs/sql_intermediate certificate.pdf",
    },
    {
      title: "McKinsey Forward Program",
      org: "McKinsey",
      date: "Nov 2025",
      img: "/certs/mckinsey-org-forward-program.png",
      link: "/certs/McKinsey.orgForward20251210-31-v1k5te.pdf",
    },
    {
      title: "JLPT N5",
      org: "Japan Foundation",
      date: "Aug 2025",
      img: "/certs/Jlpt.png",
      link: "/certs/JLPT N5.pdf",
    },
    {
      title: "Reliance Foundation Scholarship Awardee",
      org: "Reliance Foundation",
      date: "Jun 2023",
      img: "/certs/Reliance Foundation.png",
      link: "/certs/RFSCH230100088391 (1).pdf",
    },
  ],
  other: [
    {
      title: "Adobe UI/UX Design Certification",
      org: "Ethnus",
      date: "Apr 2025",
      img: "/certs/Adobe.jpg",
      link: "/certs/Adobe UIUX certificate.pdf",
    },
    {
      title: "Figma UI/UX Complete Bootcamp",
      org: "Udemy",
      date: "Jan 2025",
      img: "/certs/Figma.png",
      link: "/certs/Figma.pdf",
    },
  ],
};

const Certifications = () => {
  return (
    <div className="p-6">
      {/* Tech Certificates Section */}
      <h2 className="text-2xl font-bold mb-4">Tech Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {certs.tech.map((cert, index) => (
          <CertCard key={index} cert={cert} />
        ))}
      </div>

      {/* Other Certificates Section */}
      <h2 className="text-2xl font-bold mb-4">Other Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.other.map((cert, index) => (
          <CertCard key={index} cert={cert} />
        ))}
      </div>
    </div>
  );
};

// Helper Component to render individual cards
const CertCard = ({ cert }) => (
  <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
    <img
      src={cert.img}
      alt={cert.title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-semibold">{cert.title}</h3>
    <p className="text-gray-600">
      {cert.org} • {cert.date}
    </p>
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-3 text-blue-600 hover:underline"
    >
      View Credential
    </a>
  </div>
);

export default Certifications;