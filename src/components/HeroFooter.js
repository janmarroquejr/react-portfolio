import React, {useState} from "react";
import {Hero, Tabs} from "react-bulma-components"


const HeroFooter = (props) => {
	const [about, setAbout] = useState(false);
	const [contact, setContact] = useState(false);
	const [projects, setProjects] = useState(false);
	const [component, setComponent] = useState(props.components[3])


	const clickEventAbout = () => {
		if(about === false){
			setAbout(true);
			setContact(false);
			setProjects(false);
		}
		setComponent(props.components[0])
	}

	const clickEventContact = () => {
		if(contact === false){
			setContact(true);
			setAbout(false);
			setProjects(false);
		}
		setComponent(props.components[1])
	}

	const clickEventProjects = () => {
		if(projects === false){
			setProjects(true);
			setAbout(false);
			setContact(false);
		}
		setComponent(props.components[2])
	}
	
	return(
		<Hero.Footer>
			
			<Tabs fullwidth="true" type="boxed">
				<Tabs.Tab onClick={clickEventAbout} active={about}>
					About
				</Tabs.Tab>
				
				<Tabs.Tab onClick={clickEventContact} active={contact}>
					Contact
				</Tabs.Tab>
					
				<Tabs.Tab onClick={clickEventProjects} active={projects}>
					Projects
				</Tabs.Tab>
			</Tabs>
			
		</Hero.Footer>
	)
}

export default HeroFooter;