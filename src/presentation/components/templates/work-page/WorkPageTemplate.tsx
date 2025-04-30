import { FC } from 'react';
import { WorkPageTemplateProps } from './WorkPageTemplateProps';
import Title from '../../atoms/title/Title';
import CardProjects from '../../organism/card-projects/CardProjects';
import Paragraph from '../../atoms/paragraph/Paragraph';

const WorkPageTemplate: FC<WorkPageTemplateProps> = ({ text }) => {
  const paragraph =
    'In this five years, since I started I have created around 60 apps using technologies like Go, React, Kotlin, Flutter. In the next section you can saw a brief cards with the projects: ';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-8 py-12">
      <Title className="mb-10" text="Work Experience" fontSize="text-4xl" />

      <div className="w-full max-w-4xl">
        <ul role="list" className="divide-y divide-gray-300 bg-white rounded-lg shadow-md p-8">
          <div className="mb-4">
            <p className="text-lg font-bold text-gray-900 mb-4">Q-vision Technologies</p>
          </div>
          <li className="flex justify-between py-4">
            <div className="flex flex-col justify-start">
              <p className="text-gray-900 flex justify-start">QA</p>
              <p className="text-gray-500 text-sm">2 years 7 months</p>
            </div>
          </li>
          <li className="flex justify-between py-4">
            <div className="flex flex-col">
              <p className="text-gray-900">Full Stack Developer</p>
              <p className="text-gray-500 text-sm flex justify-start">4 Months</p>
            </div>
          </li>

          <div className="mt-8 mb-4">
            <p className="text-lg font-bold text-gray-900 mb-4">CTK Devs</p>
          </div>
          <li className="flex justify-between py-4">
            <div className="flex flex-col">
              <p className="text-gray-900">Contributor</p>
              <p className="text-gray-500 text-sm flex justify- mt-1">2 years</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full max-w-4xl mt-12">
        <Paragraph fontWeight="lighter" text={paragraph} />
      </div>

      <div className="w-full max-w-5xl mt-12">
        <CardProjects />
      </div>
    </div>
  );
};

export default WorkPageTemplate;
