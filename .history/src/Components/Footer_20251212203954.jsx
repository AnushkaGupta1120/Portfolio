export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        background: "transparent",
        padding: "2rem 1rem",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "var(--muted)",
          fontSize: "0.95rem",
          lineHeight: "1.6",
        }}
      >
        © {new Date().getFullYear()}{" "}
        <span
          style={{
            background: "var(--teal-grad)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: 700,
          }}
        >
          Anushka Gupta
        </span>{" "}
        | Built with ❤️ using{" "}
        <span style={{ color: "var(--teal-1)", fontWeight: 600 }}>React</span> &{" "}
      </p>
    </footer>
  );
}
