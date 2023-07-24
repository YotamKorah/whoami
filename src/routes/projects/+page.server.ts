import axios from 'axios';
import { GITHUB } from '$env/static/private';
import type { PageServerLoad } from './$types';
import type { GithubProject, Project } from './types';

export const load = (async () => {
	const { data } = await axios.get(`https://api.github.com/users/${GITHUB}/repos?sort=updated`);
	const projects = await Promise.all(
		data.map(async (project: GithubProject) => {
			let shouldDisplay = true;
			let description = '';
			try {
				const { data } = await axios.get(
					`https://api.github.com/repos/${GITHUB}/${project.name}/contents/.desc.txt`
				);
				description = Buffer.from(data.content, 'base64').toString();
			} catch (e) {
				shouldDisplay = false;
			}
			return {
				name: project.full_name,
				url: project.html_url,
				description: description,
				display: shouldDisplay
			};
		})
	);
	return {
		projects: projects.filter((project: Project) => project.display)
	};
}) satisfies PageServerLoad;
