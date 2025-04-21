// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'GoTeacher',
		text: 'GoTeacher.'
	},
	navItems: [
		{ name: 'Inicio', link: '/' },
		{ name: 'Quienes somos', link: '/nosotros' },
		{
			name: 'Nuestros servicios',
			link: '#',
			submenu: [
				{ name: 'Escolar', link: '/servicio/escolar' },
				{ name: 'Bachillerato', link: '/servicio/bachillerato' },
				{ name: 'Universitario', link: '/servicio/universitario' }
			]
		}
		/*,{ name: 'Contactanos', link: '/contact' }*/
	]
	//,navActions: [{ name: 'Try it now', link: '/', style: 'primary', size: 'lg' }]
}
