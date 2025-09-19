import React from 'react';
import styles from './ItSphereTable.module.scss';

interface ItSphereItem {
  sphere: string;
  products: string;
}

interface ItSphereTableProps {
  className?: string;
}

const data: ItSphereItem[] = [
  {
    sphere: "Cybersecurity Tech (Access Control Systems, Network Security, Application Security, Remote Access Security)",
    products: "Приложение кибербезопасности (Remote Desktop Protocol)"
  },
  {
    sphere: "EdTech / Cybersecurity Education (Application Security Training)",
    products: "Образовательная платформа по курсам безопасности"
  },
  {
    sphere: "ConTech / PropTech (Enterprise SaaS, Project Management)",
    products: "Портал строительной компании"
  },
  {
    sphere: "IIoT / Industry 4.0 (Embedded Systems, Industrial Automation)",
    products: "Терминалы сбора данных промышленных предприятий"
  },
  {
    sphere: "Logistics Tech, E-commerce (Supply Chain, WMS, Tracking Systems, Cross-border)",
    products: "Система международных операторов доставки грузов"
  },
  {
    sphere: "PropTech / IoT (Smart Home, SaaS)",
    products: "Система для управляющих компаний ЖКХ со встроенным умным домом"
  },
  {
    sphere: "AI Tech (Computer Vision, Video Analytics, Machine Learning)",
    products: "Система видеонаблюдения с искусственным интеллектом"
  },
  // {
  //   sphere: "E-commerce (Marketplace, Cross-border)",
  //   products: "Сервисы заказа товаров из Китая"
  // },
  {
    sphere: "Travel Tech (Transportation, Airport Management Systems)",
    products: "Система учёта пассажиров для аэропортов"
  },
  {
    sphere: "MarTech / Web Dev (SaaS Marketing, CRO, Landing Pages)",
    products: "Лендинги IT-продуктов"
  },
  {
    sphere: "Media Tech / Web Dev (CMS, Web Portals, Content Management)",
    products: "Информационные сайты и порталы"
  }
];

export const ItSphereTable: React.FC<ItSphereTableProps> = ({ className }) => {
  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}>Сфера</th>
            <th className={styles.headerCell}>IT-Продукты</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={styles.row}>
              <td className={styles.cell}>
                <div className={styles.sphereContent}>
                  <span className={styles.mainSphere}>
                    {item.sphere.split('(')[0].trim()}
                  </span>
                  {item.sphere.includes('(') && (
                    <span className={styles.keywords}>
                      {item.sphere.match(/\(([^)]+)\)/)?.[1]}
                    </span>
                  )}
                </div>
              </td>
              <td className={styles.cell}>{item.products}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
