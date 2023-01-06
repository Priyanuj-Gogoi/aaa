import siteConfig from '@generated/docusaurus.config';

export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism;

  const bdscript = require('./BDScript');

  PrismObject.languages.bdscript = bdscript;
  PrismObject.languages.bds = bdscript;

  globalThis.Prism = PrismObject;

  additionalLanguages.forEach((lang) => {
    require(`prismjs/components/prism-${lang}`);
  });

  delete globalThis.Prism;
}
