const deviceSizes = {
	mobileMax: '480px',
	tabMin: '481px',
	tabMax: '768px',
	laptopMin: '769px',
	laptopMax: '1024px',
	desktopMin: '1025px',
	desktopMax: '1440px',
	monitorMin: '1441px',
}

const devices = {
	mobile: `(max-width: ${deviceSizes.mobileMax})`,
	tab: `(min-width: ${deviceSizes.tabMin}) and (max-width: ${deviceSizes.tabMax})`,
	laptop: `(min-width: ${deviceSizes.laptopMin}) and (max-width: ${deviceSizes.laptopMax})`,
	desktop: `(min-width: ${deviceSizes.desktopMin}) and (max-width: ${deviceSizes.desktopMax})`,
	monitor: `(min-width: ${deviceSizes.monitorMin})`,
}

export default devices
