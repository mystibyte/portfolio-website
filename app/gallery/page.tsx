export default function GalleryPage() 
{
  return (
    <section className="gallery-section">
      <h1 className="gallery-heading">Gallery</h1>
      <p className="gallery-description">
        Some snapshots of my hobbies and interests.
      </p>

      <div className="gallery-layout">
        <div className="gallery-item"><img src="/images/gallery1.jpg" alt="Gallery 1" /></div>
        <div className="gallery-item"><img src="/images/gallery2.jpg" alt="Gallery 2" /></div>
        <div className="gallery-item"><img src="/images/gallery3.jpg" alt="Gallery 3" /></div>
        <div className="gallery-item"><img src="/images/gallery4.jpg" alt="Gallery 4" /></div>
        <div className="gallery-item"><img src="/images/gallery5.jpg" alt="Gallery 5" /></div>
        <div className="gallery-item"><img src="/images/gallery6.jpg" alt="Gallery 6" /></div>
      </div>
    </section>
  )
}
