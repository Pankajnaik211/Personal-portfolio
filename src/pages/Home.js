import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';

function Home() {
	return (
		<div className='home'>
			<div className='about'>
				<h2> Hi, My Name is Pankaj</h2>
				<div className='prompt'>
					<p>A software developer with a passion for learning and creating.</p>
					<LinkedInIcon />
					<EmailIcon />
					<GithubIcon />
				</div>
			</div>
			<div className='skills'>
				<h1> Skills:</h1>
				<ol className='list'>
					<li className='item'>
						<h2> Frameworks and Libraries:</h2>
						<span>React, Redux</span>
					</li>
					<li className='item'>
						<h2>Version Control:</h2>
						<span>Git, GitLab</span>
					</li>
					<li className='item'>
						<h2>Programming Languages:</h2>
						<span>JavaScript, HTML, CSS, Material-UI, Core Java, Basic Python,Bootstrap</span>
					</li>
          <li className='item'>
						<h2>Web Technologies:</h2>
						<span>RESTful APIs, JSON</span>
					</li>
          <li className='item'>
						<h2>Software Development Tools:</h2>
						<span>Visual Studio Code, npm, Yarn</span>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default Home;
