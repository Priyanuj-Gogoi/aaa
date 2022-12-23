const {
  ORGANIZATION_NAME, PROJECT_NAME, DEPLOYMENT_BRANCH, PROJECT_BRANCH
} = process.env;

module.exports = {
  title: 'BDFD Docs',
  description: 'Soon...Rewriting',
  user: ORGANIZATION_NAME || 'priyanuj-gogoi',
  repo: PROJECT_NAME || 'aaa',
  deployBranch: DEPLOYMENT_BRANCH || 'gh-pages',
  branch: PROJECT_BRANCH || 'main'
};
