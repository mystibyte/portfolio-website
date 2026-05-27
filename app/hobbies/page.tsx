export default function HobbiesPage() 
{
  return (
    <section className="hobbies-container">
      <h1 className="hobbies-title">Hobbies</h1>
      <div className="hobbies-grid">
        <div className="hobby-card">
          <h2>Watching Anime</h2>
          <p>Enjoying series like Welcome to Demon School Iruma-kun, Tokyo Ghoul, and One Piece.</p>
        </div>
        <div className="hobby-card">
          <h2>Gaming</h2>
          <p>Playing online games with friends for fun and teamwork.</p>
        </div>
        <div className="hobby-card">
          <h2>Reading</h2>
          <p>Exploring imaginative stories and expanding my perspective through novels and short stories.</p>
        </div>
        <div className="hobby-card">
          <h2>Journaling</h2>
          <p>Documenting thoughts, experiences, and creative ideas in a personal journal.</p>
        </div>
      </div>
    </section>
  )
}
