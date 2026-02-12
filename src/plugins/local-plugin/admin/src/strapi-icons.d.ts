/**
 * Ensures @strapi/icons exports are recognized when the package is resolved
 * from the monorepo root (e.g. via symlink). Re-exports from the actual package.
 */
declare module '@strapi/icons' {
  export { PuzzlePiece, Magic } from '../../../../../../../node_modules/@strapi/icons/dist/index';
}
