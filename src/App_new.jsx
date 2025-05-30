import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Smooth scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'certifications', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Than Tint Swe</span>
          </div>
          <ul className="nav-menu">
            {['home', 'about', 'education', 'certifications', 'projects', 'contact'].map((section) => (
              <li key={section} className="nav-item">
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section === 'certifications' ? 'Certs' : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Than Tint Swe</span>
            </h1>
            <h2 className="hero-subtitle">Cloud Solutions Architect & Network Engineer</h2>
            <p className="hero-description">
              Certified AWS Solutions Architect and CCNA professional with expertise in cloud infrastructure, 
              network design, and enterprise solutions. Passionate about building scalable, secure, and 
              high-performance systems.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">TTS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a dedicated Cloud Solutions Architect and Network Engineer with a passion for designing 
                and implementing robust cloud infrastructure solutions. With hands-on experience in AWS 
                services and network technologies, I specialize in creating scalable, secure, and 
                cost-effective cloud architectures.
              </p>
              <p>
                My expertise spans across cloud migration strategies, infrastructure automation, network 
                security, and performance optimization. I believe in continuous learning and staying 
                updated with the latest cloud technologies and best practices.
              </p>
              <div className="about-highlights">
                <div className="highlight">
                  <h4>🎯 Specialization</h4>
                  <p>Cloud Architecture & Network Infrastructure</p>
                </div>
                <div className="highlight">
                  <h4>☁️ Cloud Platforms</h4>
                  <p>Amazon Web Services (AWS)</p>
                </div>
                <div className="highlight">
                  <h4>🔧 Core Skills</h4>
                  <p>Infrastructure as Code, Network Design, Security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-year">2018 - 2022</div>
              <div className="education-content">
                <h3>Bachelor of Science in Computer Science</h3>
                <h4>University of Technology</h4>
                <p>
                  Focused on software engineering, network fundamentals, and cloud computing principles. 
                  Graduated with honors and completed senior capstone project on cloud migration strategies.
                </p>
                <div className="education-achievements">
                  <span>Dean's List</span>
                  <span>Magna Cum Laude</span>
                  <span>Cloud Computing Certificate</span>
                </div>
              </div>
            </div>
            <div className="education-item">
              <div className="education-year">2017 - 2018</div>
              <div className="education-content">
                <h3>Network Infrastructure Diploma</h3>
                <h4>Technical Institute</h4>
                <p>
                  Comprehensive program covering network protocols, routing and switching, 
                  network security, and enterprise infrastructure design.
                </p>
                <div className="education-achievements">
                  <span>Top 5% Graduate</span>
                  <span>Network Security Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">Professional Certifications</h2>
          <div className="certifications-grid">
            <div className="certification-card">
              <div className="cert-logo aws-logo">
                <div className="logo-placeholder">AWS</div>
              </div>
              <div className="cert-content">
                <h3>AWS Solutions Architect Associate</h3>
                <p className="cert-code">SAA-C03</p>
                <p className="cert-description">
                  Validates expertise in designing distributed systems and architectures on AWS. 
                  Demonstrates ability to design cost-effective, fault-tolerant systems.
                </p>
                <div className="cert-skills">
                  <span>EC2</span>
                  <span>S3</span>
                  <span>VPC</span>
                  <span>RDS</span>
                  <span>IAM</span>
                  <span>CloudFormation</span>
                </div>
                <div className="cert-date">Earned: March 2024</div>
              </div>
            </div>

            <div className="certification-card">
              <div className="cert-logo cisco-logo">
                <div className="logo-placeholder">CISCO</div>
              </div>
              <div className="cert-content">
                <h3>Cisco Certified Network Associate</h3>
                <p className="cert-code">CCNA</p>
                <p className="cert-description">
                  Demonstrates foundational knowledge of networking fundamentals, network access, 
                  IP connectivity, IP services, security fundamentals, and automation.
                </p>
                <div className="cert-skills">
                  <span>Routing</span>
                  <span>Switching</span>
                  <span>VLANs</span>
                  <span>OSPF</span>
                  <span>BGP</span>
                  <span>Network Security</span>
                </div>
                <div className="cert-date">Earned: January 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Project</h2>
          <div className="featured-project">
            <div className="project-image-large">
              <div className="project-placeholder-large">Cloud Migration Platform</div>
            </div>
            <div className="project-details">
              <h3>Enterprise Cloud Migration Platform</h3>
              <p className="project-subtitle">AWS • Terraform • Docker • CI/CD</p>
              <p className="project-description">
                Designed and implemented a comprehensive cloud migration platform for a Fortune 500 company, 
                migrating 150+ applications from on-premises infrastructure to AWS. The solution achieved 
                40% cost reduction and 99.9% uptime while maintaining security compliance.
              </p>
              
              <div className="project-highlights">
                <div className="highlight-item">
                  <h4>Architecture</h4>
                  <p>Multi-AZ deployment with auto-scaling, load balancing, and disaster recovery</p>
                </div>
                <div className="highlight-item">
                  <h4>Security</h4>
                  <p>End-to-end encryption, IAM policies, VPC isolation, and compliance monitoring</p>
                </div>
                <div className="highlight-item">
                  <h4>Automation</h4>
                  <p>Infrastructure as Code using Terraform, automated CI/CD pipelines</p>
                </div>
              </div>

              <div className="project-tech-stack">
                <h4>Technologies Used:</h4>
                <div className="tech-grid">
                  <span>AWS EC2</span>
                  <span>AWS S3</span>
                  <span>AWS RDS</span>
                  <span>AWS VPC</span>
                  <span>Terraform</span>
                  <span>Docker</span>
                  <span>Jenkins</span>
                  <span>CloudWatch</span>
                </div>
              </div>

              <div className="project-results">
                <div className="result-stat">
                  <h4>40%</h4>
                  <p>Cost Reduction</p>
                </div>
                <div className="result-stat">
                  <h4>99.9%</h4>
                  <p>Uptime Achieved</p>
                </div>
                <div className="result-stat">
                  <h4>150+</h4>
                  <p>Apps Migrated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to discuss your next cloud project?</h3>
              <p>
                I'm always interested in discussing cloud architecture challenges, migration strategies, 
                and innovative infrastructure solutions. Whether you need consultation or want to 
                collaborate, I'd love to hear from you.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>than@thantintswe.me</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">💼</span>
                  <div>
                    <h4>LinkedIn</h4>
                    <p>linkedin.com/in/thantintswe</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">🌐</span>
                  <div>
                    <h4>Location</h4>
                    <p>Available for Remote & On-site</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Company/Organization" />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Project Type</option>
                  <option value="consultation">Cloud Consultation</option>
                  <option value="migration">Cloud Migration</option>
                  <option value="architecture">Architecture Design</option>
                  <option value="optimization">Infrastructure Optimization</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell me about your project or requirements" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Than Tint Swe. All rights reserved.</p>
            <div className="footer-certifications">
              <span>AWS SAA Certified</span>
              <span>CCNA Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
