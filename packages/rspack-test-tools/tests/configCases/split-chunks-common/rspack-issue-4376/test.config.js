/** @type {import("../../../..").TConfigCaseConfig} */
module.exports = {
	findBundle: function (i, options) {
		return [`./${options.name}-main.js`];
	}
};
