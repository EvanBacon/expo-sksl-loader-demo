const upstreamTransformer = require("metro-react-native-babel-transformer");

module.exports.transform = async (props) => {
  return upstreamTransformer.transform(await skslTransform(props));
};

const escape = (src) => src.replace(/`/g, "\\`");

const skslTransform = async (props) => {
  if (props.filename.endsWith(".sksl")) {
    props.src = toShaderModule(props.src);
  }
  return props;
};

const toShaderModule = (src) => {
  return `export default require('@shopify/react-native-skia').Skia.RuntimeEffect.Make(String.raw\`${escape(
    src
  )}\`)`;
};

const toStringModule = (src) => {
  return `export default String.raw\`${escape(src)}\``;
};
