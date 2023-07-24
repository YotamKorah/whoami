export interface GithubProject {
	id: number;
	name: string;
	full_name: string;
	html_url: string;
	description: string;
}

export interface Project {
	name: string;
	url: string;
	description: string;
	display: boolean;
}

export interface PageData {
    projects: Project[];
}