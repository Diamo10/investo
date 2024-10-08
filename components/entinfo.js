

const Entinfo = () => {
  return (
    <div className={"grid grid-cols-3 gap-3 mb-2"}>
                  <dl className="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                    <dt className="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">
                      12
                    </dt>
                    <dd className="text-orange-600 dark:text-orange-300 text-sm font-medium text-center">
                      No of Idea uploaded
                    </dd>
                  </dl>
                  <dl className="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                    <dt className="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">
                      23
                    </dt>
                    <dd className="text-teal-600 dark:text-teal-300 text-sm font-medium text-center">
                      No of profile Viewed
                    </dd>
                  </dl>
                  <dl className="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                    <dt className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">
                      64
                    </dt>
                    <dd className="text-blue-600 dark:text-blue-300 text-sm font-medium text-center">
                      Total Number of Investors interacted
                    </dd>
                  </dl>
                </div>
  )
}

export default Entinfo