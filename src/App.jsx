import { useState, useEffect } from 'react'
import './App.css'
import awsLogo from './assets/certifications/aws-logo.png'
import ciscoLogo from './assets/certifications/cisco-logo.png'
import kubernetesLogo from './assets/certifications/kubernetes-logo.png'
import project1Image from './assets/projects/project-1.png'
import project2Image from './assets/projects/project-2.png'
import eksImage from './assets/projects/eks.jpg'
import githubLogo from './assets/github-logo.svg'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('ja') // 'en' or 'ja'

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
      const sections = ['home', 'about', 'projects', 'resume', 'contact']
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

  const handleResumeDownload = (filename) => {
    // Map of available files
    const fileMap = {
      'resume.pdf': 'Resume.pdf', // English resume - now available
      'rirekisho.pdf': '履歴書.pdf', // Japanese format
      'shokureki.pdf': '職務経歴書.pdf' // Career history
    }
    
    const actualFilename = fileMap[filename]
    
    try {
      // Create the file path using the public folder for production builds
      const fileUrl = `/CV/${actualFilename}`
      
      // Create a temporary link element
      const link = document.createElement('a')
      link.href = fileUrl
      link.download = actualFilename
      link.target = '_blank'
      
      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading file:', error)
      // Fallback: Alert user that file is not available
      const message = language === 'en' 
        ? 'Resume file is currently being updated. Please contact me directly for the latest version.'
        : '履歴書ファイルは現在更新中です。最新版については直接お問い合わせください。'
      alert(message)
    }
  }

  const personalInfo = {
    name: "Than Tint Swe",
    title: {
      en: "Aspiring Cloud, DevOps & Infrastructure Engineer",
      ja: "クラウド・DevOps・インフラエンジニア志望"
    },
    subtitle: {
      en: "Always building, learning, and automating systems in the cloud and beyond.",
      ja: "よろしくお願いいたします。一緒に働ける機会を楽しみにしています。"
    },
    email: "swethantint@gmail.com",
    location: "Nagoya, Japan",
    linkedin: "linkedin.com/in/than-tint-swe",
    github: "github.com/tts1196"
  }

  const content = {
    nav: {
      home: { en: "Home", ja: "ホーム" },
      about: { en: "About Me", ja: "自己紹介" },
      projects: { en: "Projects", ja: "プロジェクト" },
      resume: { en: "Resume", ja: "履歴書" },
      contact: { en: "Contact", ja: "お問い合わせ" }
    },
    buttons: {
      viewWork: { en: "View My Work", ja: "作品を見る" },
      getInTouch: { en: "Get In Touch", ja: "お問い合わせ" }
    },
    about: {
      title: { en: "About Me", ja: "自己紹介" },
      description1: {
        en: "Hello! I'm Than Tint Swe, based in Nagoya, and currently working toward launching my career as an infrastructure or network engineer. I'm pursuing a BSc in Computing at The Open University (UK) and working at Meisei Co., Ltd.",
        ja: "はじめまして、名古屋在住のITエンジニア志望のタン ティン スェーです。現在はインフラエンジニアまたはネットワークエンジニアとしてのキャリアをスタートさせるために取り組んでいます。英国オープン大学でコンピューティングの学士号を取得中であり、明誠株式会社で勤務しています。"
      },
      description2: {
        en: "I have experience building highly available AWS architectures using Terraform, ALB, and EC2 Auto Scaling, as well as managing both Linux and Windows servers. I'm also familiar with Docker for containerization and have been studying the configuration and operation of Cisco routers and switches to deepen my understanding of network infrastructure.",
        ja: "AWS環境におけるTerraform、ALB、EC2オートスケーリングを用いた高可用性アーキテクチャの構築や、Linux/Windowsサーバーの管理、Dockerによるコンテナ化の経験があります。また、Ciscoルーターやスイッチの基本的な設定・操作にも取り組んでおり、ネットワークインフラの理解を深めています。"
      },
      description3: {
        en: "I'm actively working toward passing the JLPT N2 exam and hope to contribute to Japan's tech industry as a reliable infrastructure or network engineer. Please feel free to connect with me on LinkedIn!",
        ja: "JLPT N2の取得を目指しており、日本のIT業界でインフラ・ネットワーク分野に貢献できるエンジニアを目指しています。LinkedInでもお気軽にご連絡ください！"
      }
    },
    education: {
      title: { en: "Education", ja: "学歴" }
    },
    certifications: {
      title: { en: "Certifications", ja: "資格" },
      aws: {
        title: { 
          en: "AWS Solution Architect - Associate", 
          ja: "AWS 認定ソリューションアーキテクト - アソシエイト" 
        },
        date: { en: "March • 2025", ja: "2025年3月" }
      },
      ccna: {
        title: { 
          en: "CCNA", 
          ja: "CCNA認定（Cisco Certified Network Associate）" 
        },
        date: { en: "August • 2024", ja: "2024年8月" }
      },
      cka: {
        title: { 
          en: "Certified Kubernetes Administrator (CKA)", 
          ja: "認定Kubernetesアドミニストレーター (CKA)" 
        },
        date: { en: "January • 2026", ja: "2026年1月" }
      }
    },
    skills: {
      technical: { en: "Technical Skills", ja: "技術スキル" },
      tools: { en: "Tools & Technologies", ja: "ツール・テクノロジー" },
      languages: { en: "Language Proficiency", ja: "語学力" }
    },
    projects: {
      title: { en: "Featured Projects", ja: "主要なプロジェクト" },
      keyFeatures: { en: "Key Features:", ja: "主な機能:" }
    },
    contact: {
      title: { en: "Get In Touch", ja: "お問い合わせ" },
      subtitle: { en: "Let's work together", ja: "一緒に働きましょう" },
      description: {
        en: "I'm always interested in new opportunities and challenging projects. Feel free to reach out if you'd like to discuss potential collaborations.",
        ja: "新しい機会や挑戦的なプロジェクトにいつも興味を持っています。ご協力の可能性についてお話しいただければと思います。"
      }
    },
    resume: {
      title: { en: "Download Resume", ja: "履歴書ダウンロード" },
      description: {
        en: "Download my resume and CV in various formats:",
        ja: "各種形式で履歴書をダウンロードできます："
      },
      files: {
        resume: { en: "Resume (English)", ja: "レジュメ（英語版）" },
        rirekisho: { en: "履歴書", ja: "履歴書" },
        shokureki: { en: "職務経歴書", ja: "職務経歴書" }
      }
    }
  }

  const skills = {
    technical: [
      "AWS", "Azure", "Google Cloud","Kubernetes", "Python", "Docker","Security", "TCP/IP",
      "Linux : Ubuntu", "Windows Server: 2012,2016", "OSPF, EIGRP, STP, VLan, VPN, IPSec", "Cisco",
    ],
    tools: [
      "Git/GitHub", "Kubernetes", "Terraform", "Monitoring Tools",
      "CI/CD Pipelines", "Microservices", "Serverless Architecture"
    ],
    languages: [
      { en: "Burmese (Native)", ja: "ビルマ語（母国語）" },
      { en: "Japanese (Intermediate - N3)", ja: "日本語（中級 - N3レベル）" },
      { en: "English (Professional Working)", ja: "英語（ビジネス会話レベル）" }
    ]
  }

  const projects = [
    {
      title: "cloud-boutique-platform",
      description: {
        en: "A comprehensive cloud-native microservices application deployed on Amazon EKS using Infrastructure as Code. Features 11 microservices built with different technologies (Go, Python, Java, C#, Node.js) demonstrating modern containerized architecture patterns, service mesh communication, and auto-scaling capabilities.",
        ja: "Infrastructure as Codeを使用してAmazon EKSに展開された包括的なクラウドネイティブマイクロサービスアプリケーション。異なる技術（Go、Python、Java、C#、Node.js）で構築された11のマイクロサービスを特徴とし、現代的なコンテナ化アーキテクチャパターン、サービスメッシュ通信、オートスケーリング機能を実証。"
      },
      technologies: ["AWS EKS", "Kubernetes", "Terraform", "Docker", "Microservices"],
      keyFeatures: {
        en: [
          "11 Microservices Architecture",
          "Multi-language Service Implementation",
          "VPC with Private/Public Subnets",
          "Application Load Balancer Integration",
          "SSM-based Secure Access"
        ],
        ja: [
          "11のマイクロサービスアーキテクチャ",
          "多言語サービス実装",
          "プライベート/パブリックサブネット構成のVPC",
          "Application Load Balancer統合",
          "SSMベースのセキュアアクセス"
        ]
      },
      github: "https://github.com/tts1196/online-boutique-eks",
      image: eksImage
    },
    {
      title: "2-Tier Web Application with AWS",
      description: {
        en: "A highly available and secure web application infrastructure deployed on AWS. Features EC2 instances with Auto Scaling for dynamic capacity management, ACM for SSL/TLS certificates, and Route 53 for DNS routing. Comprehensive IAM policies ensure security governance across all services.",
        ja: "AWSに展開された高可用性でセキュアなWebアプリケーションインフラストラクチャ。EC2インスタンスのAuto Scaling機能による動的な容量管理、ACMによるSSL/TLS証明書管理、Route 53によるDNSルーティングを実装。包括的なIAMポリシーにより全サービスのセキュリティガバナンスを確保。"
      },
      technologies: ["AWS", "EC2", "ACM", "Route53", "Auto-Scaling", "IAM"],
      keyFeatures: {
        en: [
          "Auto Scaling Group Configuration",
          "SSL Certificate Management with ACM",
          "DNS Management with Route53",
          "IAM Security Policies",
          "High Availability Infrastructure"
        ],
        ja: [
          "Auto Scalingグループの設定",
          "ACMによるSSL証明書管理",
          "Route53によるDNS管理",
          "IAMセキュリティポリシー",
          "高可用性インフラストラクチャ"
        ]
      },
      github: "https://github.com/tts1196/2-tier-web-app",
      image: project2Image
    },
    {
      title: "Secure EC2 Instance with SSM by Terraforming",
      description: {
        en: "Infrastructure as Code solution for deploying secure EC2 instances with Systems Manager access using Terraform.",
        ja: "Terraformを使用してSystems Managerアクセスを持つセキュアなEC2インスタンスをデプロイするInfrastructure as Codeソリューションです。"
      },
      technologies: ["AWS", "Terraform Cloud", "IAM", "Role"],
      keyFeatures: {
        en: [
          "EC2 Provisioning via Terraform Cloud",
          "IAM Role-Based Access Control",
          "Secure Access with SSM",
          "Custom Security Group",
          "Modular and Scalable"
        ],
        ja: [
          "Terraform Cloudを使用したEC2プロビジョニング",
          "IAMロールベースのアクセス制御",
          "SSMを使用したセキュアアクセス",
          "カスタムセキュリティグループ",
          "モジュラーでスケーラブル"
        ]
      },
      github: "https://github.com/tts1196/Secure-EC2-Instance--SSM-with-Terraform",
      image: project1Image
    }
  ]

  return (
    <div className="App" data-lang={language}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-links-wrapper">
              <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                {[
                  { id: 'home', label: content.nav.home[language] },
                  { id: 'about', label: content.nav.about[language] },
                  { id: 'projects', label: content.nav.projects[language] },
                  { id: 'resume', label: content.nav.resume[language] },
                  { id: 'contact', label: content.nav.contact[language] }
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

            <div className="nav-controls">
              <button 
                className="language-toggle"
                onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
                aria-label="Toggle language"
              >
                {language === 'en' ? '日本語' : 'English'}
              </button>

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
              <h2 className="hero-subtitle">{personalInfo.title[language]}</h2>
              <p className="hero-description">{personalInfo.subtitle[language]}</p>
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                  {content.buttons.viewWork[language]}
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                  {content.buttons.getInTouch[language]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About, Education & Certifications Combined Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">{content.about.title[language]}</h2>
          <div className="about-education-layout">
            {/* Left Side - About Content (70%) */}
            <div className="about-content">
              <div className="about-text">
                <p className="about-description">
                  {content.about.description1[language]}
                </p>
                <p className="about-description">
                  {content.about.description2[language]}
                </p>
                <p className="about-description">
                  {content.about.description3[language]}
                </p>
              </div>
            </div>

            {/* Right Side - Education & Certifications (30%) */}
            <div className="right-sidebar">
              {/* Education Subsection */}
              <div id="education" className="education-section">
                <h3 className="subsection-title">{content.education.title[language]}</h3>
                <div className="education-item-compact">
                  <div className="education-icon">🎓</div>
                  <div className="education-details">
                    <h4 className="education-degree">BSc (Hons) in Computer Engineering</h4>
                    <p className="education-school">
                      <a href="https://www.open.ac.uk/" target="_blank" rel="noopener noreferrer" className="education-link">
                        The Open University - Milton Keynes, England
                      </a>
                    </p>
                    <p className="education-year">2024 - 2026</p>
                    <p className="education-description">
                      {language === 'en' ? (
                        <>
                          <li>The Computing and IT Project</li>
                          <li>Information Security</li>
                          <li>Networking and Systems Development</li>
                          <li>Web, Mobile, and Cloud Technologies</li>
                          <li>Data Management and Analysis</li>
                          <li>Software Engineering</li>
                        </>
                      ) : (
                        <>
                          <li>コンピューティングとITプロジェクト</li>
                          <li>情報セキュリティ</li>
                          <li>ネットワーキングとシステム開発</li>
                          <li>Web、モバイル、クラウド技術</li>
                          <li>データ管理と分析</li>
                          <li>ソフトウェアエンジニアリング</li>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section - Full Width Below */}
          <div className="skills-content">
            {/* Certifications Section - Full Width */}
            <div className="skills-category" id="certifications">
              <h3 className="skills-category-title">{content.certifications.title[language]}</h3>
              <div className="certifications-grid">
                <div className="certification-item-card">
                  <div className="cert-icon">
                    <img src={awsLogo} alt="AWS" className="cert-logo" />
                  </div>
                  <h4 className="cert-title">
                    <a href="https://www.credly.com/badges/4c00d632-a4ce-4b0f-8c66-32e84b95b066/public_url" target="_blank" rel="noopener noreferrer" className="cert-link">
                      {content.certifications.aws.title[language]}
                    </a>
                  </h4>
                  <p className="cert-details">{content.certifications.aws.date[language]}</p>
                </div>
                <div className="certification-item-card">
                  <div className="cert-icon">
                    <img src={ciscoLogo} alt="Cisco" className="cert-logo" />
                  </div>
                  <h4 className="cert-title">
                    <a href="https://www.credly.com/badges/3a99629f-eb49-40e7-a188-653ecde91df1/public_url" target="_blank" rel="noopener noreferrer" className="cert-link">
                      {content.certifications.ccna.title[language]}
                    </a>
                  </h4>
                  <p className="cert-details">{content.certifications.ccna.date[language]}</p>
                </div>
                <div className="certification-item-card">
                  <div className="cert-icon">
                    <img src={kubernetesLogo} alt="Kubernetes" className="cert-logo" />
                  </div>
                  <h4 className="cert-title">
                    <a href="https://www.credly.com/badges/252fb18a-b4ca-46e5-99dd-19f8ff83912f/public_url" target="_blank" rel="noopener noreferrer" className="cert-link">
                      {content.certifications.cka.title[language]}
                    </a>
                  </h4>
                  <p className="cert-details">
                    {content.certifications.cka.date[language]}
                  </p>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">{content.skills.technical[language]}</h3>
              <div className="skills-grid">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="skill-tag">{skill}</div>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3 className="skills-category-title">{content.skills.tools[language]}</h3>
              <div className="skills-grid">
                {skills.tools.map((tool, index) => (
                  <div key={index} className="skill-tag">{tool}</div>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3 className="skills-category-title">{content.skills.languages[language]}</h3>
              <div className="skills-grid">
                {skills.languages.map((lang, index) => (
                  <div key={index} className="skill-tag">{lang[language]}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">{content.projects.title[language]}</h2>
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
                    <p className="project-description">{project.description[language]}</p>
                    {project.keyFeatures && (
                      <div className="project-features">
                        <h4 className="features-title">{content.projects.keyFeatures[language]}</h4>
                        <ul className="features-list">
                          {project.keyFeatures[language].map((feature, featureIndex) => (
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

      {/* Resume Download Section */}
      <section id="resume" className="section">
        <div className="container">
          <h2 className="section-title">{content.resume.title[language]}</h2>
          <p className="section-description">{content.resume.description[language]}</p>
          <div className="resume-grid">
            <div className="resume-card">
              <div className="resume-icon">📄</div>
              <h3 className="resume-title">{content.resume.files.resume[language]}</h3>
              <button 
                className="btn btn-primary resume-download-btn"
                onClick={() => handleResumeDownload('resume.pdf')}
              >
                {language === 'en' ? 'Download PDF' : 'PDFダウンロード'}
              </button>
            </div>
            
            <div className="resume-card">
              <div className="resume-icon">📋</div>
              <h3 className="resume-title">{content.resume.files.rirekisho[language]}</h3>
              <button 
                className="btn btn-primary resume-download-btn"
                onClick={() => handleResumeDownload('rirekisho.pdf')}
              >
                {language === 'en' ? 'Download PDF' : 'PDFダウンロード'}
              </button>
            </div>
            
            <div className="resume-card">
              <div className="resume-icon">📊</div>
              <h3 className="resume-title">{content.resume.files.shokureki[language]}</h3>
              <button 
                className="btn btn-primary resume-download-btn"
                onClick={() => handleResumeDownload('shokureki.pdf')}
              >
                {language === 'en' ? 'Download PDF' : 'PDFダウンロード'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">{content.contact.title[language]}</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-subtitle">{content.contact.subtitle[language]}</h3>
              <p className="contact-description">
                {content.contact.description[language]}
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📩</span>
                  <span className="contact-text">{personalInfo.email}</span>
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
