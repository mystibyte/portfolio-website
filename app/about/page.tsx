export default function AboutPage() {
  return (
    <section className="about-container">
      {/* Text content on the left */}
      <div className="about-text">
        <h1 className="about-title">About Me</h1>
        <p>
          Curious by nature, I dive into gaming and anime for fun, while experimenting with coding and web development to fuel my growth. I may not be a full developer yet, but I'm dedicated to improving and embracing every challenge in tech.
        </p>
        <p>
          Outside academics, you'll find me watching anime, playing online games with friends, 
          and reading a bunch of fictional books.
        </p>
      </div>

      <div className="about-photo">
        <img 
          src="/profile.jpg" 
          alt="Nicole Portrait" 
          className="about-image" 
        />
      </div>
    </section>
  )
}


