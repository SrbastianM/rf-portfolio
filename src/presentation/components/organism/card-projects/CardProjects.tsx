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
        <div className="mt-3" key={language}>
          <h2 className="text-lg font-bold mb-2">{language}</h2>
          <div className="flex justify-center flex-wrap gap-3">
            {repoList.map(repo => (
              <CardInfo
                key={repo.id}
                className="align-middle m-3 w-40 h-12"
                paragraph={{ text: '', fontWeight: 'lighter' }}
                title={{ text: repo.name, className: 'card-info p-2.5' }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProjects;
