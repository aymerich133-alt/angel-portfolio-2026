
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-top">
          {/* Fish inside the cream circle */}
            <img
              src="/images/Fish_01.png"
              alt="Blue illustrated fish"
              className="hero-fish"
            />

          {/* Portfolio title */}
          <div className="hero-title">
            <h1 className="title-port">PORT</h1>
            <h1 className="title-folio">FOLIO</h1>
            <p className="hero-year">2026</p>
          </div>

          {/* Decorative images */}
          <img
            src="/images/coin.png"
            alt=""
            className="hero-coin"
          />

          <img
            src="/images/crab_hand.png"
            alt=""
            className="hero-crab"
          />
        </div>

        {/* Name and job titles */}
        <div className="hero-caption">
          <p>[Angel Aymerich Quezada]</p>
          <p>[Motion Designer] &nbsp; [Graphic Designer]</p>
        </div>
      </section>

      
      <section className="about">
        <div className="about-intro">
          <h2>Hi, I’m Angel</h2>
          <p>I love creating cool visuals</p>
        </div>

        <div className="about-content">
          <div className="about-portrait">
            <video autoPlay loop muted playsInline>
              <source
                src="/videos/MainBrainsplit_v05.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          
            <div className="about-details">
              <p className="about-description">
                I’m a designer, 3D artist, and animator. I enjoy
                exploring visual worlds, experimenting with new tools,
                and finding creative ways to combine art and technology.
                I love movies, science fiction, and creating things that
                look awesome.
              </p>

              <div className="about-info">
                <div className="about-column">
                  <div>
                    <h3>Education</h3>
                    <p>
                      2022–2025<br />
                      <strong>Universidad Panamericana</strong><br />
                      Ing. Animación y Videojuegos
                    </p>
                    <p>
                      2025–2026<br />
                      <strong>Universidad Panamericana</strong><br />
                      Especialidad en Efectos Visuales
                    </p>
                  </div>

                  <div>
                    <h3>Languages</h3>
                    <p>Inglés — <strong>Avanzado</strong></p>
                  </div>
                </div>

                <div className="about-column">
                  
                    <div>
                      <h3>Programs</h3>

                      <div className="program-icons">
                        <img src="/images/photoshop_icon.png" alt="Photoshop" />
                        <img src="/images/aftereffects_icon.png" alt="After Effects" />
                        <img src="/images/premiere_icon.png" alt="Premiere Pro" />
                        <img src="/images/Illustrator_icon.png" alt="Illustrator" />
                        <img src="/images/Blender_icon.png" alt="Blender" />
                        <img src="/images/figma_icon.png" alt="Figma" />
                      </div>
                    </div>


                  
                      <div>
                        <h3>Contact</h3>

                        <div className="contact-item">
                          <img src="/images/whatsapp_icon.png" alt="WhatsApp" />
                          <a href="https://wa.me/528331209048" target="_blank" rel="noreferrer">
                            +52 833 120 9048
                          </a>
                        </div>

                        <div className="contact-item">
                          <img src="/images/Mail_icon.png" alt="Email" />
                          <a href="mailto:aymerich133@gmail.com">
                            aymerich133@gmail.com
                          </a>
                        </div>
                      </div>

                </div>
              </div>
            </div>

        </div>
      </section>

      
      <section className="demo-section">
        <h2 className="demo-title">DEMO REEL</h2>

        <div className="demo-video">
          <iframe
            src="https://www.youtube.com/embed/vqaLpUqftrU"
            title="Angel Aymerich Demo Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

          <nav className="project-nav" aria-label="Project categories">
            <a href="#design">Design</a>
            <a href="#motion">Motion</a>
            <a href="#short-film">Film</a>
          </nav>
      </section>

            
      <section className="personal-design" id="design">
        <h2 className="project-heading">Design</h2>  

        <div className="poster-feature">
          <img
            src="/images/Poster_mockup_01.jpg"
            alt="Personal poster design collection"
          />
          <p className="image-caption">Artist posters</p>
          <p className="image-description">
            Adobe Photoshop — Composition, texture application, blending modes, 
            photo retouching, image effects, color treatment.
          </p>
        </div>

        <div className="poster-grid">
          <div className="poster-item">
            <img
              src="/images/Poster_mockup_02.jpg"
              alt="Album poster displayed on a city advertising column"
            />
            <p className="image-caption">Album Poster</p>
            <p className="image-description">
            Adobe Photoshop — Photomontage, composition, texture aplication.
          </p>
          </div>

          <div className="poster-item">
            <img
              src="/images/Poster_mockup_03.jpg"
              alt="Artist poster design"
            />
            <p className="image-caption">Artist Poster</p>
            <p className="image-description">
            Adobe Photoshop, Adobe Illustrator, Procreate — Photomontage, typography, 
            color grading, hand-drawn graphics. 
            
          </p>
          </div>

          <div className="poster-item">
            <img
              src="/images/Poster_mockup_04.jpg"
              alt="Album poster displayed on a fence"
            />
            <p className="image-caption">Album Poster</p>
            <p className="image-description">
            Adobe Photoshop — Photomontage, composition, typography, and color grading.
          </p>
          </div>
        </div>
      </section>

      
      <section className="bp-design" id="bp-design">
        <div className="bp-design-collage">
          <h2 className="bp-design-heading">BP Design</h2>

          <img
            className="bp-phone"
            src="/images/Phone_mockup.png"
            alt="BP social media designs displayed on a smartphone"
          />

          <img
            className="bp-campaign"
            src="/images/BP_02.jpg"
            alt="BP La carga del año promotional campaign"
          />

          <p className="bp-design-copy">
            Corporate Graphic Design:
            <br />
            Social Media
            <br />
            Video Editing
            <br />
            Concept Creation
            <br />
            Internal Communication 
          </p>

          <img
            className="bp-billboard"
            src="/images/BP_03.jpg"
            alt="BP promotional billboard mockup"
          />

          <img
            className="bp-promo"
            src="/images/BP_01.png"
            alt="BP one year of free gasoline promotional design"
          />
        </div>
      </section> 

      <section className="motion-section" id="motion">
        <div className="motion-inner">
          <h2 className="motion-title">Motion Design</h2>
          <h3 className="motion-subtitle">BP Motion</h3>

          <p className="motion-intro">
            Promotional social media and internal communications videos.
          </p>

          <div className="motion-gallery">
            <div className="motion-left">
              <video
                className="motion-clip motion-clip-wide"
                src="/videos/BP_motion_01.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
                aria-label="BP Motion promotional clip"
              />

              <video
                className="motion-clip motion-clip-square"
                src="/videos/BP_motion_02.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
                aria-label="BP Motion campaign clip"
              />
            </div>

            <video
              className="motion-clip motion-clip-vertical"
              src="/videos/BP_motion_03.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
              aria-label="BP Días promotional video"
            />
          </div>
        </div>
      </section>
      
      <section className="lyric-videos-section" id="lyric-videos">
        <div className="lyric-videos-inner">
          <h2 className="lyric-videos-title">Lyric Videos</h2>

          <p className="lyric-videos-description">
            Music-driven visuals exploring typography, compositing, and motion.
          </p>

          <div className="lyric-video-grid">
            <video
              className="lyric-video"
              src="/videos/Motion_01.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
              aria-label="Lyric video project one"
            />

            <video
              className="lyric-video"
              src="/videos/Motion_02.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
              aria-label="Lyric video project two"
            />
          </div>
        </div>
      </section>

      <section className="motion-projects-section" id="motion-projects">
        <div className="motion-projects-inner">
          <h2 className="motion-projects-title">Motion Design</h2>

          <p className="motion-projects-description">
            Motion studies exploring form, color, lighting, and procedural visuals.
          </p>

          <div className="motion-projects-grid">
            <video
              className="motion-project motion-project-portrait"
              src="/videos/Motion_03.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Abstract blue circular motion study"
            />

            <video
              className="motion-project motion-project-portrait"
              src="/videos/Motion_04.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Colorful abstract 3D motion study"
            />

            <video
              className="motion-project motion-project-portrait"
              src="/videos/Motion_05.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Blue atmospheric visual study"
            />

            <video
              className="motion-project motion-project-wide"
              src="/videos/Motion_06.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Abstract illuminated grid animation"
            />

            <video
              className="motion-project motion-project-portrait"
              src="/videos/Motion_07.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Procedural Lego animation"
            />
          </div>
        </div>
      </section>
      
      <section className="short-film-section" id="short-film">
        <div className="short-film-inner">
          <h2 className="short-film-title">Short Film</h2>

          <div className="el-patio-stills">
            <img
              src="/images/El_Patio_Still_01.jpg"
              alt="El Patio — atmospheric hallway"
            />
            <img
              src="/images/El_Patio_Still_02.jpg"
              alt="El Patio — character exploring the hallway"
            />
            <img
              src="/images/El_Patio_Still_03.jpg"
              alt="El Patio — encounter in the dark"
            />
            <img
              src="/images/El_Patio_Still_04.jpg"
              alt="El Patio — character expressing emotion"
            />
            <img
              src="/images/El_Patio_Still_05.jpg"
              alt="El Patio — characters in the forest"
            />
            <img
              src="/images/El_Patio_Still_06.jpg"
              alt="El Patio — a moment in the forest"
            />
          </div>

          <div className="el-patio-info">
            <div className="el-patio-about">
              <img
                className="el-patio-logo"
                src="/images/El_Patio_titulo.png"
                alt="El Patio"
              />

              <h3>Animated short film</h3>

              <p>
                A story about imagination, childhood, and memories.
              </p>
              <a
                className="film-watch-link"
                href="https://www.youtube.com/watch?v=d62myFZUAmQ&t=19s"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶ Watch El Patio ↗
              </a>
            </div>

            <div className="el-patio-credits">
              <p className="el-patio-main-credit">
                Group production · Team management
              </p>

              <ul>
                <li>Screenwriter</li>
                <li>Producer</li>
                <li>Modeler</li>
                <li>Editor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <div className="footer-meta">
            <p>Portfolio - 2026</p>
            <p>Angel Aymerich Quezada - Motion Designer</p>
          </div>

          <h2 className="footer-thanks">THANK YOU</h2>

          <div className="footer-bottom">
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/angelitros.jpg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram: @angelitros.jpg ↗
              </a>

              <a
                href="https://www.linkedin.com/in/angel-aymerich-quezada-91103b201/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn: Angel Aymerich Quezada ↗
              </a>
            </div>

            <div className="footer-contact">
              <p>Available for work</p>
              <a href="mailto:aymerich133@gmail.com">
                Contact: aymerich133@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
} 
