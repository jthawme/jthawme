const React = require("react")
const Layout = require("./src/components/Common/Layout/Layout.js").default

// Apply persisted layout
exports.wrapPageElement = ({ element, props }) => <Layout {...props}>{ element }</Layout>;
