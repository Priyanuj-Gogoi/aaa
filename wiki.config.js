const {
  USER, REPO, BRANCH
} = process.env;

module.exports = {
  title: 'BDFD Wiki',
  description: 'Soon...Rewriting',
  user: USER || 'priyanuj-gogoi',
  repo: REPO || 'aaa',
  branch: BRANCH || 'main'
};