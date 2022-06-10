import { rest } from 'msw';

import { GITHUB_API_ENDPOINT, GITHUB_README_ENDPOINT } from '../constants';

export const handlers = [
  // getRepos
  rest.get(`${GITHUB_API_ENDPOINT}/orgs/:org/repos`, (req, res, ctx) => {
    const { org } = req.params;

    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          full_name: `${org}/repo1`,
          name: 'repo1',
          html_url: '',
          description: 'repo description',
          updated_at: '2022-05-30T05:22:41Z',
          language: 'JavaScript',
          stargazers_count: 100,
          default_branch: 'main',
          topics: [],
        },
        {
          id: 2,
          full_name: `${org}/repo2`,
          name: 'repo2',
          html_url: '',
          description: '',
          updated_at: '2021-01-30T05:22:41Z',
          language: 'JavaScript',
          stargazers_count: 50,
          default_branch: 'main',
          topics: [],
        },
      ])
    );
  }),
  // getRepo
  rest.get(`${GITHUB_API_ENDPOINT}/repos/:org/:repoName`, (req, res, ctx) => {
    const { org, repoName } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        full_name: `${org}/${repoName}`,
        name: repoName,
        html_url: '',
        description: '',
        updated_at: '',
        language: 'JavaScript',
        stargazers_count: 100,
        default_branch: 'main',
        topics: [],
      })
    );
  }),
  // getRecommendSimpleOrganization
  rest.get(`${GITHUB_API_ENDPOINT}/search/users`, (req, res, ctx) => {
    const q = req.url.searchParams.get('q');
    const nameList =
      q?.replace('type:org in:login in:name ', '').split(' OR ') || [];

    const data = Array.isArray(nameList)
      ? nameList.map((name) => ({
          id: name,
          login: name,
          avatar_url: '',
        }))
      : [];

    return res(ctx.status(200), ctx.json({ items: data }));
  }),
  // getOrganization
  rest.get(`${GITHUB_API_ENDPOINT}/orgs/:org`, (req, res, ctx) => {
    const { org: orgName } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        login: orgName,
        name: orgName,
        avatar_url: '',
        html_url: '',
        description: '',
        blog: null,
        location: null,
        email: null,
        twitter_username: null,
      })
    );
  }),
  // getReadme
  rest.get(
    `${GITHUB_README_ENDPOINT}/:org/:repoName/:defaultBarnch/README.md`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.text('mocked getReadme'));
    }
  ),
];
