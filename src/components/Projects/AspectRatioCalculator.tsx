interface AspectRatioCalculatorProps {
  height?: number;
  width?: number;
}

const AspectRatioCalculator = ({
  width: defaultWidth = 2,
  height: defaultHeight = 1,
}: AspectRatioCalculatorProps) => {
	const [width      , setWidth      ] = useState(defaultWidth);
	const [height     , setHeight     ] = useState(defaultHeight);
	const [newWidth   , setNewWidth   ] = useState<number | string>('');
	const [newHeight  , setNewHeight  ] = useState<number | string>('');
	const [aspectRatio, setAspectRatio] = useState(getAspectRatio(width, height));

	return (
    <div className="lg:flex  lg:gap-8">
      <div className="bg-zinc-100  border  border-zinc-200  grow  p-4  rounded">
        <h3 className="font-medium  mb-4  text-2xl">Original Width/Height</h3>
        <div className="flex  flex-col  gap-4">
          <div className="flex  items-center">
            <label className="block  w-20" htmlFor="width">Width</label>
            <input
              className="block  border-zinc-200  px-3  py-2  rounded-sm  shadow-xs  w-full  focus:border-blue-400  focus:ring-blue-400"
              defaultValue={width}
              id="width"
              onChange={(e) => {
                const value = parseInt(getInputValue(e)) || 1;

                setWidth(value);

                setAspectRatio(getAspectRatio(value, height));

                if (newWidth) {
                  setNewWidth('');
                  setNewHeight('');
                }
              }}
              pattern="[0-9]*"
              placeholder={width.toString()}
              type="number"
            />
          </div>
          <div className="flex  items-center">
            <label className="block  w-20" htmlFor="height">Height</label>
            <input
              className="block  border-zinc-200  px-3  py-2  rounded-sm  shadow-xs  w-full  focus:border-blue-400  focus:ring-blue-400"
              defaultValue={height}
              id="height"
              onChange={(e) => {
                const value = parseInt(getInputValue(e)) || 1;

                setHeight(value);

                setAspectRatio(getAspectRatio(width, value));

                if (newWidth !== '') {
                  setNewWidth('');
                  setNewHeight('');
                }
              }}
              pattern="[0-9]*"
              placeholder={height.toString()}
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="flex  items-center  justify-center  py-6">
        <span className="block  font-medium  text-5xl">{aspectRatio}</span>
      </div>
      <div className="bg-zinc-100  border  border-zinc-200  grow  p-4  rounded">
        <h3 className="font-medium  mb-4  text-2xl">New Width/Height</h3>
        <div className="flex  flex-col  gap-4">
          <div className="flex  items-center">
            <label className="block  w-20" htmlFor="newWidth">Width</label>
            <input
              className="block  border-zinc-200  px-3  py-2  rounded-sm  shadow-xs  w-full  focus:border-blue-400  focus:ring-blue-400"
              id="newWidth"
              onChange={(e) => {
                const value = parseInt(getInputValue(e)) || 0;

                setNewWidth(value > 0 ? value : '');
                setNewHeight(value > 0 ? Math.ceil((height / width) * value) : '');
              }}
              pattern="[0-9]*"
              placeholder="0"
              type="number"
              value={newWidth}
            />
          </div>
          <div className="flex  items-center">
            <label className="block  w-20" htmlFor="newHeight">Height</label>
            <input
              className="block  border-zinc-200  px-3  py-2  rounded-sm  shadow-xs  w-full  focus:border-blue-400  focus:ring-blue-400"
              id="newHeight"
              onChange={(e) => {
                const value = parseInt(getInputValue(e)) || 0;

                setNewHeight(value > 0 ? value : '');
                setNewWidth(value > 0 ? Math.ceil((width / height) * value) : '');
              }}
              pattern="[0-9]*"
              placeholder="0"
              type="number"
              value={newHeight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AspectRatioCalculator;
