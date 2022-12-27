import siteConfig from '@generated/docusaurus.config';
import bdscript from '../bdscript/definition';

export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism;

  globalThis.Prism = PrismObject;

  additionalLanguages.forEach((lang) => {
    require(`prismjs/components/prism-${lang}`);
  });

  PrismObject.languages.bds = bdscript;
  PrismObject.languages.bdscript = bdscript;

  delete globalThis.Prism;
}