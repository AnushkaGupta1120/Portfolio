// keep your existing About.jsx but ensure the top <section> uses className="section"
<section id="about" className="section">
  <div className="container-max">
    <div style={{textAlign:'center', marginBottom:24}}>
      <h2 style={{background:'var(--teal-grad)', WebkitBackgroundClip:'text', color:'transparent', fontSize:36}}>About Me</h2>
      <div className="divider" />
    </div>

    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:28, alignItems:'center'}}>
      <div>
        {/* text content (same as your content) */}
      </div>

      <div>
        {/* image + stats: wrap with .card to get glass look */}
        <div className="card">
          {/* profile and stats */}
        </div>
      </div>
    </div>
  </div>
</section>
