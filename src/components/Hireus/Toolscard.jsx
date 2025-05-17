import bitbucket from '../../assets/imgs/Hireus/bitbucket.png'; 
import gitlab from '../../assets/imgs/Hireus/gitlab.png';
import sonarqube from '../../assets/imgs/Hireus/sonarqube.png';
import github from '../../assets/imgs/Hireus/github.png';
import blazemeter from '../../assets/imgs/Hireus/blazemeter.png';
import azure from '../../assets/imgs/Hireus/azure.png';
import ant from '../../assets/imgs/Hireus/ant.png';
import gradle from '../../assets/imgs/Hireus/gradle.png';
import ecs from '../../assets/imgs/Hireus/ecs.png';
import docker from '../../assets/imgs/Hireus/docker.png';
import kubernetes from '../../assets/imgs/Hireus/kubernetes.png';
import splunk from '../../assets/imgs/Hireus/splunk.png';
import jmeter from '../../assets/imgs/Hireus/jmeter.png';
import selenium from '../../assets/imgs/Hireus/selenium.png';
import tsung from '../../assets/imgs/Hireus/tsung.png';
import maven from '../../assets/imgs/Hireus/maven.png';
import xcode from '../../assets/imgs/Hireus/xcode.png';
import nmap from '../../assets/imgs/Hireus/nmap.png';
import wireshark from '../../assets/imgs/Hireus/wireshark.png';
import googlecloud from '../../assets/imgs/Hireus/googlecloud.png';
import openstack from '../../assets/imgs/Hireus/openstack.png';

const apps = [
  {
    name: 'Bitbucket',
    description: 'Bitbucket is a Git-based tool for version control, team collaboration, and CI/CD integration with Jira',
    icon: bitbucket,
    link: 'https://bitbucket.org/',
  },
  {
    name: 'GitLab',
    description: 'A DevOps platform that streamlines version control, CI/CD, issue tracking, and deployment.',
    icon: gitlab,
    link: 'https://gitlab.com/',
  },
  {
    name: 'SonarQube',
    description: 'A tool that analyzes code for bugs, vulnerabilities, and quality issues to maintain secure, clean code.',
    icon: sonarqube,
    link: 'https://www.sonarqube.org/',
  },
  {
    name: 'GitHub',
    description: 'GitHub is a platform for hosting code, enabling collaboration, code review, and project management.',
    icon: github,
    link: 'https://github.com/',
  },
  {
    name: 'BlazeMeter',
    description: 'A performance testing tool for running scalable load tests to ensure web and mobile apps handle real-world traffic',
    icon: blazemeter,
    link: 'https://www.blazemeter.com/',
  },
  {
    name: 'Azure Repos',
    description: 'Part of Microsoft Azure DevOps, Azure Repos provides cloud-hosted Git repositories for source control...',
    icon: azure,
    link: 'https://azure.microsoft.com/en-us/services/devops/repos/',
  },
  {
    name: 'Apache Ant',
    description: 'A Java-based build tool used to automate software build processes...',
    icon: ant,
    link: 'https://ant.apache.org/',
  },
  {
    name: 'Gradle',
    description: 'A powerful build automation tool used for Java, Android, and other languages.',
    icon: gradle,
    link: 'https://gradle.org/',
  },
  {
    name: 'Amazon ECS',
    description: 'A fully managed container orchestration service that makes it easy to run Docker containers on AWS',
    icon: ecs,
    link: 'https://aws.amazon.com/ecs/',
  },
  {
    name: 'Docker',
    description: 'An open-source platform that automates the deployment, scaling, and management of applications inside containers.',
    icon: docker,
    link: 'https://www.docker.com/',
  },
  {
    name: 'Kubernetes',
    description: 'An open-source container orchestration platform used to automate the deployment, scaling, and management of containerized applications.',
    icon: kubernetes,
    link: 'https://kubernetes.io/',
  },
  {
    name: 'Splunk',
    description: 'A platform for searching, monitoring, and analyzing machine-generated big data.',
    icon: splunk,
    link: 'https://www.splunk.com/',
  },
  {
    name: 'JMeter',
    description: 'An open-source software designed for performance testing and load testing of web applications.',
    icon: jmeter,
    link: 'https://jmeter.apache.org/',
  },
  {
    name: 'Selenium',
    description: 'Selenium is an open-source framework used for automating web browser interactions.',
    icon: selenium,
    link: 'https://www.selenium.dev/',
  },
  {
    name: 'Tsung',
    description: 'An open-source multi-protocol distributed load testing tool.',
    icon: tsung,
    link: 'http://tsung.erlang-projects.org/',
  },
  {
    name: 'Maven',
    description: 'A project management and build automation tool for Java.',
    icon: maven,
    link: 'https://maven.apache.org/',
  },
  {
    name: 'Xcode',
    description: 'Apple’s integrated development environment (IDE) used to develop apps for iOS, macOS, watchOS, and tvOS.',
    icon: xcode,
    link: 'https://developer.apple.com/xcode/',
  },
  {
    name: 'NMAP',
    description: 'An open-source tool used for network discovery and security auditing.',
    icon: nmap,
    link: 'https://nmap.org/',
  },
  {
    name: 'Wireshark',
    description: 'A widely-used network protocol analyzer that captures and inspects data traffic in real-time.',
    icon: wireshark,
    link: 'https://www.wireshark.org/',
  },
  {
    name: 'Google Cloud',
    description: 'Google Cloud provides a suite of cloud computing services that run on the same infrastructure Google uses internally.',
    icon: googlecloud,
    link: 'https://cloud.google.com/',
  },
  {
    name: 'OpenStack',
    description: 'An open-source cloud computing platform used for building and managing public and private clouds.',
    icon: openstack,
    link: 'https://www.openstack.org/',
  },
];

export default function ToolsTechSection() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 md:mt-14 mt-0">
      <div className="max-w-6xl  mx-auto">
      <div className="flex flex-col md:flex-row justify-between md:mt-23 mt-0 items-start md:items-center">
        <h2 className="text-md font-normal md:mb-23 mb-0  text-[#000000]">Tools & Tech Supported</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-5 md:mt-0 font-lufga  max-w-2xl leading-[150%] md:leading-[140%] text-left">
        We partner with industry leaders to co-create value, scale innovation, and deliver impactful solutions.
        </h1>
      </div>
        

        <div className="md:mt-40 mt-14 overflow-x-auto md:overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
          <div className="flex gap-6 min-w-max max-w-full">
            {apps.map((app, index) => (
              <a
                key={index}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                loader="lazy"
                className="min-w-[300px] w-50 h-53 flex-shrink-0 p-4 transition duration-300 flex flex-col gap-3 items-center justify-between"
              >
                <img src={app.icon} alt={app.name} loading='lazy' className="w-19 h-16 mx-auto loading-lazy" />
                <h3 className="text-center text-xl font-lugha underline text-gray-800">{app.name}</h3>
                <p className="text-center text-sm line-clamp-3 leading-snug text-gray-600">{app.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
