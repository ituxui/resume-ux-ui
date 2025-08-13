// CompetitorTable.tsx
import React from 'react';
import classNames from 'classnames';
import styles from './CompetitorTable.module.scss';
import { ExternalLink } from '@shared/ui/components/links/ExternalLink';

export interface CompetitorFeature {
  name: string;
  has: boolean | 'exclamationMark';
  advantages?: string;
  disadvantages?: string;
}

export interface CompetitorAnalysis {
  name: string;
  url: string;
  features: CompetitorFeature[];
}


export const CompetitorTable: React.FC<{ competitorData: CompetitorAnalysis[] }> = ({ competitorData }) => {
  const features = competitorData[0]?.features.map((feature) => feature.name) || [];

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={classNames(styles.header, styles.stickyColumn)}>Конкурент</th>
            {features.map((feature, index) => (
              <th key={index} className={styles.header}>
                {feature}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {competitorData.map((competitor, index) => (
            <tr key={index}>
              <td className={classNames(styles.cell, styles.stickyColumn)}>
                <ExternalLink href={competitor.url}>{competitor.name}</ExternalLink>
              </td>
              {features.map((featureName, featureIndex) => {
                const feature = competitor.features.find((f) => f.name === featureName);
                return (
                  <td key={featureIndex} className={styles.cell}>
                    {feature ? (
                      <>
                        <span className={styles.status}>
                          {feature.has === true
                            ? '✅'
                            : feature.has === 'exclamationMark'
                              ? '⚠️'
                              : '❌'}
                        </span>
                        {feature.advantages && <div className={styles.advantages}>{feature.advantages}</div>}
                        {feature.disadvantages && <div className={styles.disadvantages}>{feature.disadvantages}</div>}
                      </>
                    ) : (
                      '—'
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
