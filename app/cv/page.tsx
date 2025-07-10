import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';

interface MarkdownRendererProps {
  markdownText: string;
}

function MarkdownRenderer({ markdownText }: { markdownText: string }) {
  return (
    <div className="markdown-body !bg-black">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
}

const sampleMarkdown = `
# Fabio Tavernini

Als motivierter und lernbegeisterter Informatiker mit Erfahrung in verschiedenen Programmiersprachen und Technologien wie PHP, SQL, Javascript und mehr, suche ich stets nach kreativen Lösungen für technische Herausforderungen. Derzeit arbeite ich als Application Manager bei ITSH Schaffhausen, wo ich mich kontinuierlich weiterentwickle und neue Technologien wie GIT, CI/CD und Kubernetes anwende. Ich bin stets auf der Suche nach neuen Möglichkeiten, mich weiterzubilden und meine Fähigkeiten weiter auszubauen.

## Arbeitserfahrung

### ITSH Schaffhausen - Application Manager

#### _Juni  2022 bis heute_

* Programmierung & Scripting: PHP, SQL, JavaScript / NodeJS, PowerShell
* Erstellen, verwalten, debugging & monitoring von Schnittstellen (VB.NET :no_mouth:, MSSQL, SSRS, SSIS)
* Automation & CI/CD: Implementierung von CI/CD-Pipelines, GIT (Gitea, GitLab), Automatisierung von Deployments
* Web-Technologien: Wartung und Weiterentwicklung interner Webportale, Migration von PHP-Versionen, Entwicklung & Debugging von Schnittstellen
* System- und Anwendungsmanagement: Betrieb und Pflege von Anwendungen, Legacy-Codeverwaltung (PHP, VB), Fehlerbehebung im 1st und 2nd Level Support
* Prozessoptimierung & Projektmanagement: Aufbau und Optimierung interner Prozesse, Mitarbeit und Leitung von Projekten, abteilungsübergreifende Know-how-Konsolidierung
* Dokumentation & Support: Erstellung und Pflege von Betriebs- und Benutzerhandbüchern, Onsitesupport, Schnittstellenmanagement

**Skills & gesammelte Erfahrung:**
* Scripting & Entwickeln von Schnittstellen
* Automation mit REST & SOAP API's
* Weberfahrung, Front & Back-End
* Kubernetes / DevOps & GitOps
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

export default function App() {
  return <MarkdownRenderer markdownText={sampleMarkdown} />;
}
