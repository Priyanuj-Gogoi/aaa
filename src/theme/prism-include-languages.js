import siteConfig from '@generated/docusaurus.config';
import bdscript from "../bdscript/syntax";

export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism;

  PrismObject.languages.bdscript = bdscript;
  PrismObject.languages.bds = bdscript;

  globalThis.Prism = PrismObject;

  additionalLanguages.forEach((lang) => {
    require(`prismjs/components/prism-${lang}`);
  });

  delete globalThis.Prism;
}
