// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Grupo de estudio Goteacher a tu Nivel',
	siteDescription: 'Somos un grupo de egresados de la Universidad Nacional de Ingeniería que nos dedicamos a la enseñanza de las matemáticas buscando el desarrollo personal y profesional, brindamos conocimientos básicos y avanzados, dirigidos a estudiantes Escolares y Universitarios.',
	ogImage: '/og.png',
	logo: {
		src: '/logo.svg',
		alt: 'GoTeacher. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
