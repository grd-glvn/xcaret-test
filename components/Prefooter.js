import { useSelector } from "react-redux";

function Prefooter() {
  const content = useSelector((state) => state.ui.content);

  return (
    <div className="py-5  sm:px-[10%]  bg-neutral-700 text-white">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div>
          <div className="contact-title">
            <p className="text-xs font-medium">
              {content.prefooter.contactCenter.title}
            </p>
            <p className="text-xs">{content.prefooter.contactCenter.email}</p>
          </div>
          <div className="mt-5 flex flex-right gap-12 sm:gap-10 uppercase">
            {content.prefooter.numbers
              .filter((number, index) => number.main)
              .map((number) => {
                return (
                  <div key={number.name + number.number}>
                    <p key={number.name} className="text-xs">{number.name}</p>
                    <p key={number.number} className="text-xs">{number.number}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex flex-row flex-wrap mb-6 sm:mb-0 order-first sm:order-last">
          <a href={content.prefooter.social.facebookUrl}>
            <svg
              className="h-5 m-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 333333 333333"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path
                d="M197917 62502h52080V0h-52080c-40201 0-72909 32709-72909 72909v31250H83337v62507h41659v166667h62506V166666h52080l10415-62506h-62496V72910c0-5648 4768-10415 10415-10415v6z"
                fill="#FFFFFF"
              />
            </svg>
          </a>
          <a href={content.prefooter.social.twitterUrl}>
            <svg
              className="h-5 m-1"
              w-5xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 640 640"
            >
              <path
                d="M640.012 121.513c-23.528 10.524-48.875 17.516-75.343 20.634 27.118-16.24 47.858-41.977 57.756-72.615-25.347 14.988-53.516 25.985-83.363 31.866-24-25.5-58.087-41.35-95.848-41.35-72.508 0-131.21 58.736-131.21 131.198 0 10.228 1.134 20.232 3.355 29.882-109.1-5.528-205.821-57.757-270.57-137.222a131.423 131.423 0 0 0-17.764 66c0 45.497 23.102 85.738 58.347 109.207-21.508-.638-41.74-6.638-59.505-16.359v1.642c0 63.627 45.225 116.718 105.32 128.718-11.008 2.988-22.63 4.642-34.606 4.642-8.48 0-16.654-.874-24.78-2.35 16.783 52.11 65.233 90.095 122.612 91.205-44.989 35.245-101.493 56.233-163.09 56.233-10.63 0-20.988-.65-31.334-1.89 58.229 37.359 127.206 58.997 201.31 58.997 241.42 0 373.552-200.069 373.552-373.54 0-5.764-.13-11.35-.366-16.996 25.642-18.343 47.87-41.493 65.469-67.844l.059-.059z"
                fill="#FFFFFF"
              />
            </svg>
          </a>
          <a href={content.prefooter.social.instagramUrl}>
            <svg
              className="h-5 m-1"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 122.88"
            >
              <title>instagram-logo-black-and-white</title>
              <path
                d="M61.45,0C44.76,0,42.66.07,36.11.37A45.08,45.08,0,0,0,21.2,3.23a29.86,29.86,0,0,0-10.88,7.08,30.26,30.26,0,0,0-7.1,10.88A44.92,44.92,0,0,0,.37,36.11C.08,42.66,0,44.75,0,61.44S.07,80.21.37,86.77a45.08,45.08,0,0,0,2.86,14.91,30.12,30.12,0,0,0,7.08,10.88,30.13,30.13,0,0,0,10.88,7.1,45.17,45.17,0,0,0,14.92,2.85c6.55.3,8.64.37,25.33.37s18.77-.07,25.33-.37a45.17,45.17,0,0,0,14.92-2.85,31.54,31.54,0,0,0,18-18,45.6,45.6,0,0,0,2.86-14.91c.29-6.55.37-8.64.37-25.33s-.08-18.78-.37-25.33a45.66,45.66,0,0,0-2.86-14.92,30.1,30.1,0,0,0-7.09-10.88,29.77,29.77,0,0,0-10.88-7.08A45.14,45.14,0,0,0,86.76.37C80.2.07,78.12,0,61.43,0ZM55.93,11.07h5.52c16.4,0,18.34.06,24.82.36a34,34,0,0,1,11.41,2.11,19,19,0,0,1,7.06,4.6,19.16,19.16,0,0,1,4.6,7.06,34,34,0,0,1,2.11,11.41c.3,6.47.36,8.42.36,24.82s-.06,18.34-.36,24.82a33.89,33.89,0,0,1-2.11,11.4A20.35,20.35,0,0,1,97.68,109.3a33.64,33.64,0,0,1-11.41,2.12c-6.47.3-8.42.36-24.82.36s-18.35-.06-24.83-.36a34,34,0,0,1-11.41-2.12,19,19,0,0,1-7.07-4.59,19,19,0,0,1-4.59-7.06,34,34,0,0,1-2.12-11.41c-.29-6.48-.35-8.42-.35-24.83s.06-18.34.35-24.82a33.7,33.7,0,0,1,2.12-11.41,19,19,0,0,1,4.59-7.06,19.12,19.12,0,0,1,7.07-4.6A34.22,34.22,0,0,1,36.62,11.4c5.67-.25,7.86-.33,19.31-.34Zm38.31,10.2a7.38,7.38,0,1,0,7.38,7.37,7.37,7.37,0,0,0-7.38-7.37ZM61.45,29.89A31.55,31.55,0,1,0,93,61.44,31.56,31.56,0,0,0,61.45,29.89Zm0,11.07A20.48,20.48,0,1,1,41,61.44,20.48,20.48,0,0,1,61.45,41Z"
                fill="#FFFFFF"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Prefooter;
