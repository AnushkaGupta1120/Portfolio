import certs from "public/certs";

const Achievements = () => {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>Achievements</h1>

      <h2>Technical Certifications</h2>
      <div>
        {certs.tech.map((cert) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: "1.5rem" }}
          >
            <img
              src={cert.img}
              alt={cert.title}
              width={200}
              style={{ display: "block", marginBottom: "0.5rem" }}
            />

            <p><strong>{cert.title}</strong></p>
            <p>{cert.org} · {cert.date}</p>

            <a href={cert.link} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>

      <h2 style={{ marginTop: "2rem" }}>Other Certifications</h2>
      <div>
        {certs.other.map((cert) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: "1.5rem" }}
          >
            <img
              src={cert.img}
              alt={cert.title}
              width={200}
              style={{ display: "block", marginBottom: "0.5rem" }}
            />

            <p><strong>{cert.title}</strong></p>
            <p>{cert.org} · {cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
