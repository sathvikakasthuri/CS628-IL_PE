import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>sathvikakasthuri</h1>
        <p>
          5321 156th DR NE | (206) 537-3935 | kasthurisathvika@cityuniversity.edu</p>
      </header>
      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle | oct 2023</p>

          <h3>Bachelor's of computer Science</h3>
          <p> SV College of Engineering  | Aug 2018-2022</p>
          <p>GPA: 7.0/10</p>
        </div>
      </section>
	  <section className="section">  //Technical skills section
        <h2>Technical Skills</h2>
        <div className="technical-skills">
            <p>Cloud Platforms: AWS, AZURE</p>
            <p>Container Engine and Orchestration: DockerS</p>
            <p>Operating Systems: AmazonLinux,Windows servers</p>
            <p> technical: Python, HTML, C, CSS, JAVA</p>
			<p>Database Management: MySQL, MongoDB</p>
            
        </div>
      </section>
	  <section className="section">  // work experience section 
        <h2>Work Experience</h2>
        <div className="experience">
          <h3>software Engineer 1</h3>
          <p>CTS | Jul 2022 - Aug 2023</p>
          <p>Managed deployments and configuration changes using Docker.</p>
          <p>Assisted in resolving a critical defect, contributing to a feature pass rate increase from 90% to 97%, and helped
          improve system stability.</p>
        </div>
      </section>
      <section className="section">  //projects section
        <h2>Projects</h2>
        <div className="projects">
        <h3>Application Deployment</h3>
        <p>CI/CD project for automating software builds and deployments using Git, Terraform, Docker, Kubernetes and AWS</p>
		    <p>
      Git Link:{" "}
      <a
        href="https://github.com/sathvikakasthuri/Assignment.git"  //added git link
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/sathvikakasthuri/Assignment.git
      </a>
    </p>
  </div>
</section>
</div>
  );
};
export default Resume;
