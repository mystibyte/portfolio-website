export default function AchievementsPage() 
{
  return (
    <section className="achievements-container">
      <h1 className="achievements-title">Achievements & Awards</h1>
      <div className="achievements-grid">
        <div className="achievement-card">
          <h2>Academic Outputs</h2>
          <p>Produced video presentation scripts, evaluation matrices, and portfolio projects.</p>
        </div>
        <div className="achievement-card">
          <h2>Technical Skills</h2>
          <p>Database design, FastAPI backend setup, and Next.js portfolio site.</p>
        </div>
        <div className="achievement-card">
          <h2>Personal Growth</h2>
          <p>Consistent group participation and reflective academic outputs.</p>
        </div>
        <div className="achievement-card">
          <h2>Creative Works</h2>
          <p>Developed lexicons, fantasy names, and moodboards.</p>
        </div>
      </div>
    </section>
  )
}
