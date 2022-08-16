import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Condensed Data',
    Svg: require('@site/static/img/db.svg').default,
    description: (
      <>
        Studio Ghibli Catalog (SGC) was created by filtering key data into an easy to use API.
      </>
    ),
  },
  {
    title: 'Built with Prisma',
    Svg: require('@site/static/img/prisma-2.svg').default,
    description: (
      <>
        The query builds of SGC are intuitive to read and easy to customize, providing you a malleable tool creating a database of your favorite studio!
      </>
    ),
  },
  {
    title: 'Tested routes',
    Svg: require('@site/static/img/test.svg').default,
    description: (
      <>
        The Studio Ghibli Catalog API had tests running to verify its stability and the expected responses to the users.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
