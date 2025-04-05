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
      <div className="leading-7  max-w-none  py-8  sm:pt-16  lg:leading-8  lg:text-lg">
        <p className="flex  items-center  space-x-1">
          <span>Calculation based on a root font-size of</span>
          {rootFontSizeEditable && (
            <input
              className="block  border-zinc-200  mx-1  px-1  py-0  rounded-sm  shadow-xs  text-center  w-8  focus:border-blue-400  focus:ring-blue-400  [appearance:textfield]  [&::-webkit-outer-spin-button]:appearance-none  [&::-webkit-inner-spin-button]:appearance-none"
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
              className="size-3.5  text-zinc-600"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.4 360.9L13.4 439 1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1L73 498.6l78.1-23c10.4-3 20.1-8 28.6-14.5l.3 .2 .5-.8c1.4-1.1 2.7-2.2 4-3.3c1.4-1.2 2.7-2.5 4-3.8L492.7 149.3c21.9-21.9 24.6-55.6 8.2-80.5c-2.3-3.5-5.1-6.9-8.2-10L453.3 19.3c-25-25-65.5-25-90.5 0L58.6 323.5c-2.5 2.5-4.9 5.2-7.1 8l-.8 .5 .2 .3c-6.5 8.5-11.4 18.2-14.5 28.6zM383 191L197.4 376.6l-49.6-12.4-12.4-49.6L321 129 383 191zM97 358.9l7.7 31c2.1 8.6 8.9 15.3 17.5 17.5l31 7.7-7.4 11.2c-2.6 1.4-5.3 2.6-8.1 3.4l-23.4 6.9L59.4 452.6l16.1-54.8 6.9-23.4c.8-2.8 2-5.6 3.4-8.1L97 358.9zM315.3 218.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96z"
                fill="currentColor"
              />
            </svg>
          </button>
          <span>pixels.</span>
        </p>
      </div>
      <div className="pb-8  sm:pb-16">
        <div className="lg:flex  lg:gap-8">
          <div className="bg-zinc-100  border  border-zinc-200  grow  p-4  rounded">
            <div className="flex  flex-col  gap-4">
              <div className="flex  items-center">
                <label className="block  w-20" htmlFor="px">PX</label>
                <input
                  className="block  border-zinc-200  px-3  py-2  rounded-sm  shadow-xs  w-full  focus:border-blue-400  focus:ring-blue-400"
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
                d="M40 144c-13.3 0-24 10.7-24 24s10.7 24 24 24H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H40zm0 176c-13.3 0-24 10.7-24 24s10.7 24 24 24H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H40z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="bg-zinc-100  border  border-zinc-200  grow  p-4  rounded">
            <div className="flex  flex-col  gap-4">
              <div className="flex  items-center">
                <label className="block  w-20" htmlFor="rem">REM</label>
                <input
                  className="block  border-zinc-200  px-3  py-2  rounded-sm  shadow-xs  w-full  focus:border-zinc-200  focus:ring-zinc-200"
                  defaultValue={rem}
                  id="rem"
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
