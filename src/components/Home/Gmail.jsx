import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

const Gmail = () => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <div>
        <div
          className="font-lufga font-semibold text-2xl sm:text-4xl md:text-6xl justify-center text-center leading-[130%] tracking-normal decoration-solid decoration-0 sm:p-8 md:p-10 md:min-h-[250px] mb-5 sm:mb-0"
        >
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pixalivetech@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative cursor-pointer inline-block transition-transform duration-300 ease-in-out transform hover:scale-99"
              >
                pixalivetech@gmail.com
              </a>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="bottom"
                sideOffset={8}
                className="bg-white text-black px-3 py-1 rounded text-sm shadow-md z-40"
              >
                Click me!
                <Tooltip.Arrow className="fill-black" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </div>
    </Tooltip.Provider>
  );
};

export default Gmail;
