/**
 * Determines whether or not the given size is considered `compact` or not.
 * This can be used to synchronize component rendering with responsive changes
 * to the ApplicationLayout.
 */
const isSizeCompact = size => size === 'tiny' || size === 'small';

/**
 * Seeds the given path template with values from the given params object.
 */
const pathWithParameters = (path, params) => (
  Object.keys(params).reduce((updatedString, paramId) => (
    updatedString.replace(new RegExp(`:${paramId}`), params[paramId])
  ), path)
);

export default {
  isSizeCompact,
  pathWithParameters,
};

export {
  isSizeCompact,
  pathWithParameters,
};
