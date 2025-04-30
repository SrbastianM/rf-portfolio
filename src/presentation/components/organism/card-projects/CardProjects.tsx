import React from 'react';
import CardInfo from '../../molecules/card-info/CardInfo';
import { useGithubRepos } from '../../../hooks/useGithubRepos';
import { Repo } from '../../../../domain/models/Repo';
import { useCardAnimation } from '../../../hooks/useCardAnimation';

const CardProjects: React.FC = () => {
  const { repos, loading, error } = useGithubRepos();

  useCardAnimation(!loading && repos.length > 0);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  const groupedRepos = repos.reduce((groups: Record<string, Repo[]>, repo) => {
    const lang = repo.language ?? 'Others';
    if (!groups[lang]) groups[lang] = [];
    groups[lang].push(repo);
    return groups;
  }, {});

  return (
    <div className="flex flex-col gap-6">
      {Object.entries(groupedRepos).map(([language, repoList]) => (
        <div className="lang-title mt-10" key={language}>
          <h2 className="text-3xl font-bold mb-2">{language}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {repoList.map(repo => (
              <div
                key={repo.id}
                className="cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => window.open(repo.html_url, '_blank')}
              >
                <CardInfo
                  key={repo.id}
                  className="card-info m-3 w-full"
                  paragraph={{ text: '', fontWeight: 'lighter' }}
                  title={{ text: repo.name, className: 'p-2.5' }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProjects;
