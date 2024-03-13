module.exports = {
	
	module: {
	    rules: [
			{
				test: /\.(svg|png|jpe?g|gif)$/,
				type: 'asset/resource',
				use: {
					loader: "file-loader",
				}
			},
			{
				test: /\.html$/i,
				use: 'html-loader'
			},
		]
	},
};