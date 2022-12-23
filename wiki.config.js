const {
  ORG, REPO, BRANCH
} = process.env;

module.exports = {
  title: 'BDFD Wiki',
  description: 'Soon...Rewriting',
  user: ORG || 'priyanuj-gogoi',
  repo: REPO || 'aaa',
  branch: BRANCH || 'main'
};