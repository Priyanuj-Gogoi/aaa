import bdscript from './BDScript.js';

export default function prismIncludeLanguages(Prism) {
  Prism.languages.bdscript = bdscript;
  Prism.languages.bds = bdscript;
};