export default function GalleryPage() 
{
  return (
    <section className="gallery-section">
      <h1 className="gallery-heading">Gallery</h1>
      <p className="gallery-description">
        Snapshots that capture my growth, interests, and inspirations, from everyday experiences to special milestones.
      </p>

      <div className="gallery-layout">
        <div className="gallery-item"><img src="/images/gallery1.jpg" alt="Gallery 1" /></div>
        <div className="gallery-item"><img src="/images/gallery2.jpg" alt="Gallery 2" /></div>
        <div className="gallery-item gallery-center"><img src="/images/gallery-center.jpg" alt="Center Highlight" /></div>
        <div className="gallery-item"><img src="/images/gallery3.jpg" alt="Gallery 3" /></div>
        <div className="gallery-item"><img src="/images/gallery4.jpg" alt="Gallery 4" /></div>
      </div>
    </section>
  )
}
