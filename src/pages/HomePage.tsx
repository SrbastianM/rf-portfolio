import HomeTemplate from '../presentation/components/templates/home-page/HomeTemplate';

const HomePage = () => {
  return (
    <HomeTemplate>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Front, Back and Mobile development
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              I have experience creating Web, mobile and backend apps using Kotlin, React, Golang
              and Java. Also I create cross-platform apps using flutter
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">Mobile</dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  I create more than 10 Apps mobile where I practice patterns like MVVM, MVM and
                  MVC. UI dessing, consume apis using dio and manipulate the state of the apps
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">Web</dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  I understand how the apps are maded using React, the SEO and DOM. I consume
                  RESTful apis using Axios, create UI using tailwindcss and create animations with
                  AnimeJS.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">Backend</dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  I have been read "Let's go further" where I understand how to create API's focus
                  on productive instances also using spring boot and java. Now I focus to create and
                  use ExpressJS
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">QA</dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  I been worked since 2 years and 7 months as a QA. In this enterprise I know the
                  lifecycle of an aplications, bug lifecycle, use JIRA, X-RAY, automation with Java
                  + Selenium using POM and screen play
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
};

export default HomePage;
