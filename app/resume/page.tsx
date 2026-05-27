export default function Resume() 
{
  return (
    <div className="resume-page">

      <h1 className="resume-main-title">Resume / CV</h1>

      <div className="resume-header">
        <h2>Nicole J. Reyes</h2>

        <p className="resume-subtitle">
          Beginner Developer
        </p>

        <p className="resume-contact">
          Email: nixolereyes28@email.com | Phone: 09XXXXXXXXX
        </p>
      </div>

      <div className="resume-card">
        <h2>Objective</h2>

        <p>
          Passionate BSIT student fueled by gaming and anime obsession. Currently mastering web development 
          and full-stack technologies to create innovative, visually stunning digital experiences. 
          Dedicated to turning my technical skills and creative vision into reality.
        </p>
      </div>

      <div className="resume-card">
        <h2>Education</h2>

        <div className="resume-item">
          <h3>College</h3>
          <p>BSIT 2nd Year — Currently studying at Pamantasan ng Lungsod ng San Pablo</p>
        </div>

        <div className="resume-item">
          <h3>Senior High School</h3>
          <p>Crecencia Drucila Lopez Senior High School (2023)</p>
        </div>

        <div className="resume-item">
          <h3>High School</h3>
          <p>Alaminos Integrated High School (2022)</p>
        </div>

        <div className="resume-item">
          <h3>Elementary</h3>
          <p>San Pablo Central School (2018)</p>
        </div>
      </div>

      <div className="resume-card">
        <h2>Skills</h2>

        <ul>
          <li>Database Design & SQL Scripting</li>
          <li>Python Programming</li>
          <li>Beginner Web Development</li>
        </ul>
      </div>
      <div className="resume-card">
        <h2>Interests</h2>

        <ul>
            <li>Anime (Iruma-kun, Tokyo Ghoul, One Piece)</li>
            <li>Online Gaming</li>
            <li>Reading</li>
            <li>Journaling</li>
        </ul>
        </div>
    </div>
  );
}