import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
	return (
		<div className='experience'>
			<VerticalTimeline lineColor='#3e497a'>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2021 - 2023'
					iconStyle={{ background: '#3e497a', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className='vertical-timeline-element-title'>Suryadatta Institute of Buisness Management Technology</h3>
					<h4 className='vertical-timeline-element-subtitle'> Master's Degree </h4>
					<p> Computer Application</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2018 - 2021'
					iconStyle={{ background: '#3e497a', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className='vertical-timeline-element-title'>
						C. D. Jain College Of Commerce, Shrirampur|Savitribai Phule Pune University |
					</h3>

					<h4 className='vertical-timeline-element-subtitle'>Bachelor's Degree</h4>

					<p> Computer Application</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='2018 - 2020'
					iconStyle={{ background: '#e9d35b', color: '#fff' }}
					icon={<WorkIcon />}
				>
					<h3 className='vertical-timeline-element-title'>Staqwise Pvt.Ltd</h3>
          <h3 className='vertical-timeline-element-title'>Intern</h3>
					<h4 className='vertical-timeline-element-subtitle'>Pune,Bavdhan</h4>
					<p>
						•Collaborated with the development team to build a web application using React for a client project.
						•Developed reusable components and implemented responsive design to ensure cross-platform compatibility.
						•Utilized Redux for state management and integrated RESTful APIs to fetch and update data.
					</p>
				</VerticalTimelineElement>

				{/* <VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='2020 - present'
					iconStyle={{ background: '#e9d35b', color: '#fff' }}
					icon={<WorkIcon />}
				>
					<h3 className='vertical-timeline-element-title'>Full Stack Engineer - Twitch</h3>
					<h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
					<p>Helped the team launch 2 major features by working both in the front end and back end.</p>
				</VerticalTimelineElement> */}
			</VerticalTimeline>
		</div>
	);
}

export default Experience;
