import Paragraph from '../../atoms/paragraph/Paragraph';
import Title from '../../atoms/title/Title';
import { ExperienceProps } from './ExperienceProps'

const ExperienceSection: React.FC<ExperienceProps> = () => {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <Title text='QA Automation' fontSize="text-5xl" />
                    <Paragraph text='QA Automation Engineer with experience designing and implementing automated testing solutions for web, mobile and backend services. I work with Playwright, Selenium, Java and Python, applying best practices, test architecture patterns and CI integration.' className='mt-6' fontSize='text-lg/8' fontWeight='lighter' />
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-gray-900">UI Testing</dt>
                            <dd className="mt-2 text-base/7 font-light">
                                Automated UI validation for web applications using Playwright and Selenium.
                                Implementation of Page Object Model (POM), Screenplay pattern, reusable
                                components and stable selectors focused on maintainability and scalability
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-gray-900">API Testing</dt>
                            <dd className="mt-2 text-base/7 font-light ">
                                REST API testing using automated frameworks. Validation of response schemas,
                                status codes and business rules. Experience working with JSON payloads,
                                contract validation, and test data management for backend services.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-gray-900">Test Automation</dt>
                            <dd className="mt-2 text-base/7 font-light">
                                Design of scalable automation frameworks using Java, Python and TypeScript.
                                Integration with CI pipelines, test reporting, tagging strategies, and
                                execution by environments. Focus on reliability and fast feedback.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-gray-900">QA Process</dt>
                            <dd className="mt-2 text-base/7 font-light">
                                Experience across the full QA lifecycle including test planning, test case
                                design, defect tracking and regression strategy. Use of Jira, Xray and
                                Agile methodologies. Strong understanding of bug lifecycle and quality metrics.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
