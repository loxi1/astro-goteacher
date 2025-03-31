// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'GoTeacher',
		aboutText:
			'Somos un grupo de estudio academico que nos dedicamos a la enseñanza de las matemáticas buscando el desarrollo personal de nuestros estudiantes, brindamos conocimientos básicos y avanzados, dirigidos a estudiantes escolares y universitarios.',
		logo: {
			src: '/logo.svg',
			alt: 'The tailwind astro theme',
			text: 'GoTeacher.'
		}
	},
	footerColumns: [
		{
			category: 'Servicios',
			subCategories: [
				{
					subCategory: 'Escolar',
					subCategoryLink: '/servicio/escolar'
				},
				{
					subCategory: 'Universitario',
					subCategoryLink: '/servicio/universitario'
				},
				{
					subCategory: 'Bachillerato',
					subCategoryLink: '/sevicio/bachillerato'
				}
			]
		},
		{
			category: 'Quienes somos',
			subCategories: [
				{
					subCategory: 'Nosotros',
					subCategoryLink: '/'
				}
			]
		}
		/*,{
			category: 'Contacto',
			subCategories: [
				{
					subCategory: 'Contactanos',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Support',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Join us',
					subCategoryLink: '/contact'
				}
			]
		}*/
	],
	subFooter: {
		copywriteText: '© GoTeacher 2025.'
	}
}
