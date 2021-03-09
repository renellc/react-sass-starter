const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        open: true,
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshPlugin(),
    ],
});
