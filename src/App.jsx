import { useState, useEffect } from 'react'
import './App.css'
import awsLogo from './assets/certifications/aws-logo.png'
import ciscoLogo from './assets/certifications/cisco-logo.png'
import kubernetesLogo from './assets/certifications/kubernetes-logo.png'
import terraformLogo from './assets/certifications/terraform-logo.png'
import project1Image from './assets/projects/project-1.png'
import project2Image from './assets/projects/project-2.png'
import githubLogo from './assets/github-logo.svg'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const personalInfo = {
    name: "Than Tint Swe",
    title: "Aspiring Cloud, DevOps & Infrastructure Engineer",
    titleJa: "クラウド・DevOps・インフラエンジニア志望",
    subtitle: "Always building, learning, and automating systems in the cloud and beyond.",
    subtitleJa: "よろしくお願いいたします。一緒に働ける機会を楽しみにしています。",
    email: "swethantint@gmail.com",
    phone: "+81 70-9193-0365",
    location: "Nagoya, Japan",
    linkedin: "linkedin.com/in/than-tint-swe",
    github: "github.com/tts1196"
  }

  const skills = {
    technical: [
      "AWS", "Azure", "Google Cloud", "Python", "Docker","Security", "TCP/IP",
      "Linux", "Microsoft Windows", "Routing", "Swtiching"
    ],
    tools: [
      "Git/GitHub", "Kubernetes", "Terraform", "Monitoring Tools",
      "CI/CD Pipelines", "Microservices", "Serverless Architecture"
    ]
  }

  const projects = [
    {
      title: "2-Tier Web Application with AWS",
      description: "Scalable web application deployed on AWS using a 2-tier architecture with EC2, RDS, and Load Balancer for high availability.",
      descriptionJa: "EC2、RDS、ロードバランサーを使用した2層アーキテクチャでAWSにデプロイされた高可用性のスケーラブルなWebアプリケーションです。",
      technologies: ["AWS", "EC2", "RDS", "ALB", "VPC"],
      keyFeatures: [
        "Auto Scaling Group Configuration",
        "Application Load Balancer Setup",
        "RDS Database Integration",
        "VPC with Public/Private Subnets",
        "Security Groups and NACLs"
      ],
      github: "https://github.com/tts1196/2-tier-web-app",
      image: project2Image
    },
    {
      title: "Secure EC2 Instance with SSM by Terraforming",
      description: "Infrastructure as Code solution for deploying secure EC2 instances with Systems Manager access using Terraform.",
      descriptionJa: "Terraformを使用してSystems Managerアクセスを持つセキュアなEC2インスタンスをデプロイするInfrastructure as Codeソリューションです。",
      technologies: ["AWS", "Terraform Cloud", "IAM", "Role"],
      keyFeatures: [
        "EC2 Provisioning via Terraform Cloud",
        "IAM Role-Based Access Control",
        "Secure Access with SSM",
        "Custom Security Group",
        "Modular and Scalable"
      ],
      github: "https://github.com/tts1196/Secure-EC2-Instance--SSM-with-Terraform",
      image: project1Image
    }    
    // Add more projects as needed
  ]

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-links-wrapper">
              <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About Me' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <li key={item.id} className="nav-item">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <h2 className="hero-subtitle">{personalInfo.title}</h2>
              <h3 className="hero-subtitle-ja">{personalInfo.titleJa}</h3>
              <p className="hero-description">{personalInfo.subtitle}</p>
              <p className="hero-description-ja">{personalInfo.subtitleJa}</p>
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                  View My Work
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About, Education & Certifications Combined Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-education-layout">
            {/* Left Side - About Content (70%) */}
            <div className="about-content">
              <div className="about-text">
                <p className="about-description">
                  Hi, I'm Than Tint Swe, an aspiring IT engineer based in Nagoya, Japan, with a passion for building, automating, and securing systems across both cloud and traditional infrastructure environments. 
                  I'm currently pursuing a BSc (Hons) in Computing from The Open University UK (graduating in September 2026) while working at Meisei Co.,Ltd.
                </p>
                <p className="about-description">
                  My technical interests include cloud infrastructure, DevOps, networking, and system administration. 
                  I enjoy working with tools like AWS, Terraform, Linux, Git, and Docker, 
                  and I regularly build hands-on projects to apply real-world architecture and automation practices. 
                  I'm also planning to take the JLPT N2 exam in December 2025 as part of my ongoing language learning.
                </p>
                <p className="about-description">
                  I'm currently seeking entry-level roles in Cloud, DevOps, Infrastructure, or IT engineering, 
                  with the goal of transitioning into a full-time technical role by September 2025. I'm motivated, detail-oriented, and always eager to learn and grow within a collaborative engineering team.
                </p>
                <p className="about-description">
                  Thanks for stopping by my portfolio — 
                  feel free to connect if you're working on something exciting or looking for a motivated junior engineer!
                </p>
                <p className="about-description-ja">
                  ポートフォリオをご覧いただき、ありがとうございます。エントリーレベルのポジションで成長し、貢献できる機会を探しています。ご連絡をお待ちしております！
                </p>
                
              </div>
            </div>

            {/* Right Side - Education & Certifications (30%) */}
            <div className="right-sidebar">
              {/* Education Subsection */}
              <div id="education" className="education-section">
                <h3 className="subsection-title">Education</h3>
                <div className="education-item-compact">
                  <div className="education-icon">🎓</div>
                  <div className="education-details">
                    <h4 className="education-degree">BSc (Hons) in Computer Engineering</h4>
                    <p className="education-school">The Open University - Milton Keynes, England</p>
                    <p className="education-year">2023 - 2026</p>
                    <p className="education-description">
                      <li>
                         The Computing and IT Project
                      </li>
                      <li>
                        Information Security
                      </li>
                      <li>
                        Networking and Systems Development
                      </li>
                      <li>
                        Web, Mobile, and Cloud Technologies
                      </li>
                      <li>
                        Data Management and Analysis
                      </li>
                      <li>
                        Software Engineering
                      </li>
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications Subsection */}
              <div id="certifications" className="certifications-section">
                <h3 className="subsection-title">Certifications</h3>
                <div className="certifications-compact">
                  <div className="certification-item">
                    <div className="cert-icon">
                      <img src={awsLogo} alt="AWS" className="cert-logo" />
                    </div>
                    <div className="cert-info">
                      <h4 className="cert-title">
                        <a href="https://www.credly.com/badges/4c00d632-a4ce-4b0f-8c66-32e84b95b066/public_url" target="_blank" rel="noopener noreferrer" className="cert-link">
                          AWS Solution Architect - Associate
                        </a>
                      </h4>
                      <p className="cert-details">March • 2025</p>
                    </div>
                  </div>
                  <div className="certification-item">
                    <div className="cert-icon">
                      <img src={ciscoLogo} alt="Cisco" className="cert-logo" />
                    </div>
                    <div className="cert-info">
                      <h4 className="cert-title">
                        <a href="https://www.credly.com/badges/3a99629f-eb49-40e7-a188-653ecde91df1/public_url" target="_blank" rel="noopener noreferrer" className="cert-link">
                          CCNA
                        </a>
                      </h4>
                      <p className="cert-details">August • 2023</p>
                    </div>
                  </div>
                  {/* <div className="certification-item">
                    <div className="cert-icon">
                      <img src={kubernetesLogo} alt="Kubernetes" className="cert-logo" />
                    </div>
                    <div className="cert-info">
                      <h4 className="cert-title">Certified Kubernetes Administrator</h4>
                      <p className="cert-details">June • 2025</p>
                    </div>
                  </div>
                  <div className="certification-item">
                    <div className="cert-icon">
                      <img src={terraformLogo} alt="Terraform" className="cert-logo" />
                    </div>
                    <div className="cert-info">
                      <h4 className="cert-title">Terraform Associate</h4>
                      <p className="cert-details">June • 2025</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section - Full Width Below */}
          <div className="skills-content">
            <div className="skills-category">
              <h3 className="skills-category-title">Technical Skills</h3>
              <div className="skills-grid">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="skill-tag">{skill}</div>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3 className="skills-category-title">Tools & Technologies</h3>
              <div className="skills-grid">
                {skills.tools.map((tool, index) => (
                  <div key={index} className="skill-tag">{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle-ja">主要なプロジェクト</p>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card-fullwidth">
                {/* Project Title - Full Width at Top */}
                <div className="project-title-header">
                  <h3 className="project-title-main">{project.title}</h3>
                </div>
                
                <div className="project-layout-horizontal">
                  {/* Project Diagram/Image - Left Side (70%) */}
                  <div className="project-diagram-right">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={`${project.title} Architecture`}
                        className="project-image"
                      />
                    ) : (
                      <div className="diagram-placeholder">
                        <span className="diagram-icon">🏗️</span>
                        <p>Project Architecture</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Content - Right Side (30%) */}
                  <div className="project-content-left">
                    <p className="project-description">{project.description}</p>
                    <p className="project-description-ja">{project.descriptionJa}</p>
                    {project.keyFeatures && (
                      <div className="project-features">
                        <h4 className="features-title">Key Features:</h4>
                        <ul className="features-list">
                          {project.keyFeatures.map((feature, featureIndex) => (
                            <li key={featureIndex} className="feature-item">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="GitHub" className="github-icon" />
                        <span className="link-text">Link</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-subtitle">Let's work together</h3>
              <p className="contact-description">
                I'm always interested in new opportunities and challenging projects. 
                Feel free to reach out if you'd like to discuss potential collaborations.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📩</span>
                  <span className="contact-text">{personalInfo.email}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span className="contact-text">{personalInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🏠︎</span>
                  <span className="contact-text">{personalInfo.location}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌐</span>
                  <a href={`https://${personalInfo.linkedin}`} className="contact-link" target="_blank" rel="noopener noreferrer">
                    {personalInfo.linkedin}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌐</span>
                  <a href={`https://${personalInfo.github}`} className="contact-link" target="_blank" rel="noopener noreferrer">
                    {personalInfo.github}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 {personalInfo.name}. All rights reserved.</p>
            <p>Built with React & Vite</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
