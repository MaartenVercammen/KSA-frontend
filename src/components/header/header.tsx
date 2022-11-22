import React from 'react';

import styles from './header.module.css';

import logo from '../../images/logo.webp';

import backgroundAspect11w360 from '../../images/groepsfoto_ar_1_1_w_360.webp';
import backgroundAspect11w659 from '../../images/groepsfoto_ar_1_1_w_659.webp';
import backgroundAspect11w883 from '../../images/groepsfoto_ar_1_1_w_883.webp';
import backgroundAspect11w1101 from '../../images/groepsfoto_ar_1_1_w_1101.webp';
import backgroundAspect11w1341 from '../../images/groepsfoto_ar_1_1_w_1341.webp';
import backgroundAspect11w1501 from '../../images/groepsfoto_ar_1_1_w_1501.webp';
import backgroundAspect11w1534 from '../../images/groepsfoto_ar_1_1_w_1534.webp';

import backgroundAspect43w538 from '../../images/groepsfoto_ar_4_3_w_538.webp';
import backgroundAspect43w849 from '../../images/groepsfoto_ar_4_3_w_849.webp';
import backgroundAspect43w1078 from '../../images/groepsfoto_ar_4_3_w_1078.webp';
import backgroundAspect43w1303 from '../../images/groepsfoto_ar_4_3_w_1303.webp';
import backgroundAspect43w1388 from '../../images/groepsfoto_ar_4_3_w_1388.webp';

import backgroundAspect169w596 from '../../images/groepsfoto_ar_16_9_w_596.webp';
import backgroundAspect169w883 from '../../images/groepsfoto_ar_16_9_w_883.webp';
import backgroundAspect169w1153 from '../../images/groepsfoto_ar_16_9_w_1153.webp';
import backgroundAspect169w1425 from '../../images/groepsfoto_ar_16_9_w_1425.webp';
import backgroundAspect169w1440 from '../../images/groepsfoto_ar_16_9_w_1440.webp';

import backgroundScaled480 from '../../images/groepsfoto_w_480.webp';
import backgroundScaled748 from '../../images/groepsfoto_w_748.webp';
import backgroundScaled1059 from '../../images/groepsfoto_w_1059.webp';
import backgroundScaled1224 from '../../images/groepsfoto_w_1224.webp';
import backgroundScaled1447 from '../../images/groepsfoto_w_1447.webp';
import backgroundScaled1754 from '../../images/groepsfoto_w_1754.webp';
import backgroundScaled2105 from '../../images/groepsfoto_w_2105.webp';
import backgroundScaled1989 from '../../images/groepsfoto_w_1989.webp';
import backgroundScaled2570 from '../../images/groepsfoto_w_2570.webp';
import backgroundScaled2669 from '../../images/groepsfoto_w_2669.webp';
import backgroundScaled2715 from '../../images/groepsfoto_w_2715.webp';
import backgroundScaled2863 from '../../images/groepsfoto_w_2863.webp';
import backgroundScaled2992 from '../../images/groepsfoto_w_2992.webp';
import backgroundScaled2999 from '../../images/groepsfoto_w_2999.webp';

function Header() {
  return (
    <header>
      <picture className={styles.background}>
        <source
          media="(max-width: 767px)"
          sizes="(max-width: 1534px) 100vw, 1534px"
          srcSet={`
            ${backgroundAspect11w360} 360w,
            ${backgroundAspect11w659} 659w,
            ${backgroundAspect11w883} 883w,
            ${backgroundAspect11w1101} 1101w,
            ${backgroundAspect11w1341} 1341w,
            ${backgroundAspect11w1501} 1501w,
            ${backgroundAspect11w1534} 1534w
          `}
        />
        <source
          media="(min-width: 768px) and (max-width: 991px)"
          sizes="(max-width: 1983px) 70vw, 1388px"
          srcSet={`
            ${backgroundAspect43w538} 538w,
            ${backgroundAspect43w849} 849w,
            ${backgroundAspect43w1078} 1078w,
            ${backgroundAspect43w1303} 1303w,
            ${backgroundAspect43w1388} 1388w
          `}
        />
        <source
          media="(min-width: 992px) and (max-width: 1199px)"
          sizes="(max-width: 2400px) 60vw, 1440px"
          srcSet={`
            ${backgroundAspect169w596} 596w,
            ${backgroundAspect169w883} 883w,
            ${backgroundAspect169w1153} 1153w,
            ${backgroundAspect169w1425} 1425w,
            ${backgroundAspect169w1440} 1440w
          `}
        />
        <img
          sizes="(max-width: 7498px) 40vw, 2999px"
          srcSet={`
            ${backgroundScaled480} 480w,
            ${backgroundScaled748} 748w,
            ${backgroundScaled1059} 1059w,
            ${backgroundScaled1224} 1224w,
            ${backgroundScaled1447} 1447w,
            ${backgroundScaled1754} 1754w,
            ${backgroundScaled2105} 2105w,
            ${backgroundScaled1989} 1989w,
            ${backgroundScaled2570} 2570w,
            ${backgroundScaled2669} 2669w,
            ${backgroundScaled2715} 2715w,
            ${backgroundScaled2863} 2863w,
            ${backgroundScaled2992} 2992w,
            ${backgroundScaled2999} 2999w
          `}
          src={backgroundScaled2999}
          alt=""
          role="presentation"
        />
      </picture>
      <img src={logo} className={styles.logo} alt="" role="presentation" />
    </header>
  );
}

export default Header;
