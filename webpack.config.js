const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 9000,
		hot: isDev,
	},
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
	plugins: [
		new ESLintPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new HTMLWebpackPlugin({
			template: "./src/index.html",
			minify: !isDev,
			collapseWhitespace: !isDev,
		}),
	],
	target: "web",
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					"css-loader",
				],
			},
			{
				test: /\.(sass)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpe?g|gif|webp)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "./",
							useRelativePath: true,
						},
					},
				],
			},
		],
	},
};
