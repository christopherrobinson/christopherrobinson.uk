import { useState } from 'react';
import { convertToRem, getInputValue } from '@/helpers';

interface PXtoREMConverterProps {
  baseFontSize: number;
}

const PXtoREMConverter = ({
  baseFontSize = 16,
}: PXtoREMConverterProps) => {
  const [rootFontSize, setRootFontSize] = useState(baseFontSize);
  const [rootFontSizeEditable, setRootFontSizeEditable] = useState(false);
  const [px, setPx] = useState(baseFontSize);
  const [rem, setRem] = useState(convertToRem(baseFontSize, px));

  return (
    <>
      <div className="leading-7  max-w-none  py-8  sm:py-12  lg:leading-8  lg:text-lg">
        <p className="flex  items-center  space-x-1">
          <span>Calculation based on a root font-size of</span>
          {rootFontSizeEditable && (
            <input
              className="block  border-zinc-200  mx-1  px-1  py-0  rounded  shadow-sm  text-center  w-8  focus:border-blue-400  focus:ring-blue-400  [appearance:textfield]  [&::-webkit-outer-spin-button]:appearance-none  [&::-webkit-inner-spin-button]:appearance-none"
              defaultValue={rootFontSize}
              id="px"
              max={99}
              min={1}
              onChange={(e) => {
                const value = parseInt(getInputValue(e)) || baseFontSize;

                setRootFontSize(value);
                setRem(convertToRem(value, px));
              }}
              pattern="[0-9]*"
              placeholder={rootFontSize.toString()}
              type="number"
            />
          ) || (
            <span>{rootFontSize}</span>
          )}
          <button className="flex  items-center" onClick={() => setRootFontSizeEditable(!rootFontSizeEditable)}>
            <svg
              className="size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M395.8 39.6c9.4-9.4 24.6-9.4 33.9 0l42.6 42.6c9.4 9.4 9.4 24.6 0 33.9L417.6 171 341 94.4l54.8-54.8zM318.4 117L395 193.6l-219 219V400c0-8.8-7.2-16-16-16H128V352c0-8.8-7.2-16-16-16H99.4l219-219zM66.9 379.5c1.2-4 2.7-7.9 4.7-11.5H96v32c0 8.8 7.2 16 16 16h32v24.4c-3.7 1.9-7.5 3.5-11.6 4.7L39.6 472.4l27.3-92.8zM452.4 17c-21.9-21.9-57.3-21.9-79.2 0L60.4 329.7c-11.4 11.4-19.7 25.4-24.2 40.8L.7 491.5c-1.7 5.6-.1 11.7 4 15.8s10.2 5.7 15.8 4l121-35.6c15.4-4.5 29.4-12.9 40.8-24.2L495 138.8c21.9-21.9 21.9-57.3 0-79.2L452.4 17zM331.3 202.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128z"
                fill="currentColor"
              />
            </svg>
          </button>
          <span>pixels.</span>
        </p>
      </div>
      <div className="pb-8  sm:pb-12">
        <div className="lg:flex  gap-8">
          <div className="bg-zinc-100  border  border-zinc-200  grow  p-4  rounded">
            <div className="flex  flex-col  gap-4">
              <div className="flex  items-center">
                <label className="block  font-light  w-20" htmlFor="px">PX</label>
                <input
                  className="block  border-zinc-200  px-3  py-2  rounded  shadow-sm  w-full  focus:border-blue-400  focus:ring-blue-400"
                  defaultValue={px}
                  id="px"
                  min={1}
                  onChange={(e) => {
                    const value = parseInt(getInputValue(e)) || baseFontSize;

                    setPx(value);
                    setRem(convertToRem(rootFontSize, value));
                  }}
                  pattern="[0-9]*"
                  placeholder={px.toString()}
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="flex  items-center  justify-center  py-6">
            <svg
              className="size-5"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 144H16v48H40 408h24V144H408 40zm0 176H16v48H40 408h24V320H408 40z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="bg-zinc-100  border  border-zinc-200  grow  p-4  rounded">
            <div className="flex  flex-col  gap-4">
              <div className="flex  items-center">
                <label className="block  font-light  w-20" htmlFor="rem">REM</label>
                <input
                  className="block  border-zinc-200  px-3  py-2  rounded  shadow-sm  w-full  focus:border-zinc-200  focus:ring-zinc-200"
                  defaultValue={rem}
                  id="rem"
                  onChange={(e) => {
                    const value = parseInt(getInputValue(e)) || 1;
                  }}
                  pattern="[0-9]*"
                  placeholder={rem.toString()}
                  readOnly
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PXtoREMConverter;
