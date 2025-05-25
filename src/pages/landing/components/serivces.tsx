import {
  FaChartLine,
  FaComments,
  FaUserTie,
  FaClipboardList
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ServiceProps {
  title: string;
  description: string;
  icon: IconType;
}

const serviceList: ServiceProps[] = [
  {
    title: 'Resume Ranking & Matching',
    description: 'AI-based resume screening and job-fit analysis',
    icon: FaChartLine
  },
  {
    title: 'Mock Interviews & AI Feedback',
    description: 'Real-time AI coaching to help candidates improve.',
    icon: FaComments
  },
  {
    title: 'Human-Led Expert Interviews',
    description:
      'Live technical assessments conducted by industry professionals.',
    icon: FaUserTie
  },
  {
    title: 'Performance Reports & Insights',
    description:
      'Detailed evaluations covering technical, behavioral, and communication skills.',
    icon: FaClipboardList
  }
];

const Service = () => {
  return (
    <section className="dark:bg-dark pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-indigo-500">
                Our Services
              </span>
              <h2 className="text-dark mb-3 text-3xl font-bold leading-[1.2] dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-body-color dark:text-dark-6 text-base">
                We leverage AI and human expertise to streamline hiring and
                improve candidate readiness.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {serviceList.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: IconType;
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <section id="services" className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="shadow-2 dark:bg-dark-2 mb-9 rounded-[20px] bg-white p-10 hover:shadow-lg md:px-7 xl:px-10">
        <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-indigo-500 text-2xl text-white">
          <Icon />
        </div>
        <h4 className="text-dark mb-[14px] text-2xl font-semibold dark:text-white">
          {title}
        </h4>
        <p className="text-body-color dark:text-dark-6">{description}</p>
      </div>
    </section>
  );
};
