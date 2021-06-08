const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "config.scss";`,
	},
	images: {
		domains: ['courses-top.ru']
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: ['@svgr/webpack'],
		});
		return config;
	}
};
