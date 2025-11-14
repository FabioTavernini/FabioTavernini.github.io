
"use client"


import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-dark.css';

function MarkdownRenderer({ markdownText }: { markdownText: string }) {
  return (
    <div className="markdown-body !bg-black p-4">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
}

// German CV
const cvMarkdownDE = `
# Fabio Tavernini

Als motivierter und lernbegeisterter Informatiker mit Erfahrung in verschiedenen Programmiersprachen und Technologien wie PHP, SQL, Javascript und mehr, suche ich stets nach kreativen Lösungen für technische Herausforderungen. Derzeit arbeite ich als Application Manager bei ITSH Schaffhausen, wo ich mich kontinuierlich weiterentwickle und neue Technologien wie GIT, CI/CD und Kubernetes anwende. Ich bin stets auf der Suche nach neuen Möglichkeiten, mich weiterzubilden und meine Fähigkeiten weiter auszubauen.

## Arbeitserfahrung

### ITSH Schaffhausen - Application Manager

#### _Juni  2022 bis heute_

* Programmierung & Scripting: PHP, SQL, JavaScript / NodeJS, PowerShell
* Erstellen, verwalten, debugging & monitoring von Schnittstellen (VB.NET &#128566;, MSSQL, SSRS, SSIS)
* Aufbauen und weiterentwickeln von Legacy Applikationen (besipielsweise Anfügen einer NodeJS API an eine alte PHP Webapp)
* Automation & CI/CD: Implementierung von CI/CD-Pipelines, GIT (Gitea, GitLab), Automatisierung von Deployments
* Web-Technologien: Wartung und Weiterentwicklung interner Webportale, Migration von PHP-Versionen, Entwicklung & Debugging von Schnittstellen
* System- und Anwendungsmanagement: Betrieb und Pflege von Anwendungen, Legacy-Codeverwaltung (PHP, VB), Fehlerbehebung im 1st und 2nd Level Support
* Prozessoptimierung & Projektmanagement: Aufbau und Optimierung interner Prozesse, Mitarbeit und Leitung von Projekten, abteilungsübergreifende Know-how-Konsolidierung
* Dokumentation & Support: Erstellung und Pflege von Betriebs- und Benutzerhandbüchern, Onsitesupport, Schnittstellenmanagement

**Skills & gesammelte Erfahrung:**
* Scripting & Entwickeln von Schnittstellen
* Automation mit REST & SOAP API&apos;s
* Weberfahrung, Front & Back-End
* Kubernetes / DevOps & GitOps
  * Gitlab pipelines
  * ArgoCD
  * Harbor registry
  * Python
  * VMware / Broadcom Tanzu
* Windows, Linux & Container-Technologien
* PHP & SQL
* CI/CD Implementierung
* Codeverwaltung, versionierung mit GIT (Gitea, GitLab, Github)
* Erstellen von Dokumentationen & leisten von Support

**Menschliches:**
* Positive Einstellung & Arbeitsmoral
* Immer bereit neues zu lernen
* Teamfähig
* Can-do-Mentalität
* Offene Haltung

---

### KSD Schaffhausen - Lehre zum Betriebsinformatiker

#### _Aug 2018 bis Aug 2022_

Lehrgang zum Betriebsinformatiker EFZ
* Verwaltung interner Webformulare
* Einführung der Festplattenverschlüsselung

## Bildung

### Berufsschule BBZ Schaffhausen

#### _Aug 2018 bis Aug 2022_
Lehrgang zum Betriebsinformatiker EFZ

### Sekundarschule Thayngen

#### _Aug 2015 bis Aug 2018_

---

## Referenzen

- **Patrik Decurtins**  
  **Position:** Teamleiter Customer Solutions  
  **Unternehmen:** ITSH Schaffhausen  
  **E-Mail:** [patrik.decurtins@itsh.ch](mailto:patrik.decurtins@itsh.ch)  
  **Telefon:** +41 79 571 27 18  

- **Marco Schirru**  
  **Position:** Abteilungsleiter & Mitglied der Geschäftsleitung  
  **Unternehmen:** ITSH Schaffhausen  
  **E-Mail:** [marco.schirru@itsh.ch](mailto:marco.schirru@itsh.ch)  
  **Telefon:** +41 52 632 70 52

- **Dominik Uehlinger**  
  **Position:** ICT-Koordinator  
  **Unternehmen:** Georg Fischer AG  
  **E-Mail:** [dominik.uehlinger@georgfischer.com](mailto:dominik.uehlinger@georgfischer.com)  
  **Telefon:** +41 79 839 52 75 
`;

// English CV
const cvMarkdownEN = `
# Fabio Tavernini

As a motivated and eager-to-learn computer scientist with experience in various programming languages and technologies such as PHP, SQL, JavaScript, and more, I am always seeking creative solutions to technical challenges. I am currently working as an Application Manager at ITSH Schaffhausen, where I continuously develop myself and apply new technologies such as GIT, CI/CD, and Kubernetes. I am always looking for new opportunities to expand my skills and knowledge.

## Work Experience

### ITSH Schaffhausen - Application Manager

#### _June 2022 - Present_

* Programming & Scripting: PHP, SQL, JavaScript / NodeJS, PowerShell
* Creating, managing, debugging & monitoring interfaces (VB.NET &#128566;, MSSQL, SSRS, SSIS)
* Automation & CI/CD: Implementation of CI/CD pipelines, GIT (Gitea, GitLab), deployment automation
* Building and further developing legacy applications (e.g., adding a NodeJS API to an old PHP web app)
* Web Technologies: Maintenance and further development of internal web portals, PHP version migration, interface development & debugging
* System & Application Management: Operation and maintenance of applications, legacy code management (PHP, VB), troubleshooting in 1st and 2nd level support
* Process Optimization & Project Management: Establishing and optimizing internal processes, participation and leadership in projects, cross-departmental knowledge consolidation
* Documentation & Support: Creation and maintenance of operations and user manuals, onsite support, interface management

**Skills & Experience:**
* Scripting & developing interfaces
* Automation with REST & SOAP APIs
* Web experience, Front & Back-End
* Kubernetes / DevOps & GitOps
  * GitLab pipelines
  * ArgoCD
  * Harbor registry
  * Python
  * VMware / Broadcom Tanzu
* Windows, Linux & container technologies
* PHP & SQL
* CI/CD implementation
* Code management, versioning with GIT (Gitea, GitLab, GitHub)
* Creating documentation & providing support

**Personal Traits:**
* Positive attitude & strong work ethic
* Always eager to learn
* Team player
* Can-do mentality
* Open-minded

---

### KSD Schaffhausen - Apprenticeship as IT Specialist

#### _Aug 2018 - Aug 2022_

Apprenticeship as IT Specialist EFZ
* Management of internal web forms
* Introduction of disk encryption

## Education

### Vocational School BBZ Schaffhausen

#### _Aug 2018 - Aug 2022_
Apprenticeship as IT Specialist EFZ

### Secondary School Thayngen

#### _Aug 2015 - Aug 2018_

---

## References

- **Patrik Decurtins**  
  **Position:** Team Leader Customer Solutions  
  **Company:** ITSH Schaffhausen  
  **Email:** [patrik.decurtins@itsh.ch](mailto:patrik.decurtins@itsh.ch)  
  **Phone:** +41 79 571 27 18  

- **Marco Schirru**  
  **Position:** Department Head & Member of Management  
  **Company:** ITSH Schaffhausen  
  **Email:** [marco.schirru@itsh.ch](mailto:marco.schirru@itsh.ch)  
  **Phone:** +41 52 632 70 52

- **Dominik Uehlinger**  
  **Position:** ICT Coordinator  
  **Company:** Georg Fischer AG  
  **Email:** [dominik.uehlinger@georgfischer.com](mailto:dominik.uehlinger@georgfischer.com)  
  **Phone:** +41 79 839 52 75
`;

export default function App() {
  const [language, setLanguage] = useState<'DE' | 'EN'>('DE');

  return (
    <div className="flex flex-col items-center p-4">
      
      {/* Language toggle */}
      <div className="flex items-center mb-6">
        <span className={`mr-2 ${language === 'DE' ? 'font-bold' : ''}`}>DE</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={language === 'EN'}
            onChange={() => setLanguage(language === 'DE' ? 'EN' : 'DE')}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-gray-700 transition-all"></div>
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
        </label>
        <span className={`ml-2 ${language === 'EN' ? 'font-bold' : ''}`}>EN</span>
      </div>

      {/* CV renderer */}
      <MarkdownRenderer markdownText={language === 'DE' ? cvMarkdownDE : cvMarkdownEN} />
    </div>
  );
}
