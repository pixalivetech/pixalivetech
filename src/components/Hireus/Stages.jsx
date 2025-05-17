import React from 'react';
import planIcon from './../../assets/imgs/Hireus/plan.png';
import designIcon from './../../assets/imgs/Hireus/design.png';
import launchIcon from './../../assets/imgs/Hireus/launch.png';
import developIcon from './../../assets/imgs/Hireus/develop.png';
import testIcon from './../../assets/imgs/Hireus/test.png';
import deployIcon from './../../assets/imgs/Hireus/deploy.png';
import reviewIcon from './../../assets/imgs/Hireus/review.png';
import segmentImage from './../../assets/imgs/Hireus/Ellipse 2083.png';

const phases = [
  { label: 'Plan', icon: planIcon, top: '80%', left: '30%', rotate: '150deg', position: 'bottom' },
  { label: 'Design', icon: designIcon, top: '79%', left: '70%', rotate: '100deg', position: 'bottom' },
  { label: 'Launch', icon: launchIcon, top: '50%', left: '92%', rotate: '50deg', position: 'right' },
  { label: 'Develop', icon: developIcon, top: '13%', left: '83%', rotate: '1deg', position: 'right' },
  { label: 'Test', icon: testIcon, top: '-3%', left: '48%', rotate: '306deg', position: 'top' },
  { label: 'Deploy', icon: deployIcon, top: '14%', left: '13%', rotate: '255deg', position: 'left' },
  { label: 'Review', icon: reviewIcon, top: '52%', left: '7%', rotate: '205deg', position: 'left' },
];

const getLabelStyle = (position) => {
  switch (position) {
    case 'top':
      return 'bottom-[120%] left-1/2 -translate-x-1/2';
    case 'bottom':
      return 'top-[100%] left-1/2 -translate-x-1/2';
    case 'left':
      return 'right-[110%] top-1/2 -translate-y-1/2 text-right';
    case 'right':
      return 'left-[110%] top-1/2 -translate-y-1/2 text-left';
    default:
      return '';
  }
};

const AgileCycle = () => {
  return (
    <div className="flex justify-center items-center md:min-h-280 min-h-screen  p-4 overflow-hidden">
      {/* Responsive wrapper with scale on small devices */}
      <div className="relative w-[600px] h-[600px] scale-[0.6] md:scale-100 origin-top">
        {/* Center Text */}
        <div className="absolute inset-0 flex justify-center mb-28 items-center text-center  text-lg md:text-3xl">
          Agile<br />Methodology
        </div>

        {phases.map((phase, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{
              top: phase.top,
              left: phase.left,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Ellipse */}
            <div
              className="relative w-[70px] h-[70px] md:w-[240px] md:h-[240px]"
              style={{ transform: `rotate(${phase.rotate})` }}
            >
              <img
                src={segmentImage}
                alt=""
                className="absolute inset-0 w-full h-full"
                loading='lazy'
              />
              <div
                className="absolute inset-0 flex justify-center items-center"
                style={{ transform: `rotate(-${phase.rotate})` }}
              >
                <img
                  src={phase.icon}
                  alt={phase.label}
                  className="w-6 h-6 md:w-12 md:h-12"
                />
              </div>
            </div>

            {/* Label */}
            <span
              className={`absolute text-[10px] md:text-xl font-medium text-[#000000] whitespace-nowrap ${getLabelStyle(
                phase.position
              )}`}
            >
              {phase.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgileCycle;
