module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		jest: true,
	},
	extends: ["eslint:recommended", "eslint-config-prettier"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		indent: ["off", "tab"],
		quotes: ["error", "double"],
		semi: "off",
		"no-unused-vars": "off",
	},
}
