import React from 'react';
import Paragraph from '../../atoms/paragraph/Paragraph';
import Title from '../../atoms/title/Title';
import Button from '../button/Button';

const TextGroup: React.FC = () => {
  const testingTest =
    'Hello to everyone my name is Sebastian a software developer who enjoys the open source and constantly learn about the internet and how is transforming around the time ';
  const title = 'Sebastian Rodriguez Murillo';

  return (
    <div className="max-w-lg ml-10">
      <Title className="text-left mb-14" text={title} fontType="font-bold" fontSize="text-5xl" />
      <Paragraph fontWeight={'lighter'} text={testingTest} fontSize={'text-lg'} />
      <div className="flex left-0 mt-4">
        <Button className="px-14 py-6 mt-6" size="sm" text="Contact" color="black" />
      </div>
    </div>
  );
};

export default TextGroup;
