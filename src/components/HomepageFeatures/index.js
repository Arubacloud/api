import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate,{translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
const FeatureList = [
  {
    title: 'Aruba Managed Kubernetes',
    Svg: require('@site/static/img/Kubernetes.svg').default,
    description: (
      <>
       <Translate description="managed_kubernetes">Effortlessly create and manage Kubernetes clusters with Aruba's developer-friendly platform. With an intuitive control panel, you can deploy containerized applications quickly and at scale, while ensuring robust security every step of the way.</Translate>
      </>
    ),
    link: '/docs/documents/container/aruba-container-api',
  },
  {
    title: 'Block Storage',
    Svg: require('@site/static/img/BlockStorage.svg').default,
    description: (
      <>
        <Translate description="block_storage">Efficiently store and manage data with our highly scalable Block Storage system. Designed for speed, secure access, and fast recovery, it ensures your data is always protected and available when you need it.</Translate>
      </>
    ),
    link: '/docs/documents/storage/aruba-storageprovider-api',
  },
  {
    title: 'Cloud Server',
    Svg: require('@site/static/img/CloudServer.svg').default,
    description: (
      <>
         <Translate description="cloud_server">Tailor your Cloud Server to your needs with flexible hourly, monthly, or yearly plans. Connect seamlessly with other Cloud Servers using Virtual Switches, and enjoy the reliability of redundant hardware. Customize components to fit your workload, and choose from multiple Hypervisor technologies to optimize your performance</Translate>
      </>
    ),
    link: '/docs/documents/compute/aruba-cmpservice-computing-api',
  },
  {
    title: 'Networking',
    Svg: require('@site/static/img/ip.svg').default,
    description: (
      <>
        <Translate description="networking">Manage your cloud infrastructure with flexible networking options. Purchase dynamic IP addresses and assign them across multiple resources to ensure secure, seamless connectivity. Create isolated Virtual Private Cloud (VPC) networks to organize your cloud resources, and use custom subnets and security groups to control traffic flow and enhance network security.</Translate>
      </>
    ),
    link: '/docs/documents/network/aruba-network-api',
  }
];

function Feature({Svg, title, description,link}) {
  const linki18n =  useBaseUrl(link);
  return (
    
    <div className={clsx('col col--3')}>
       <a href={linki18n} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />        
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
      <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
