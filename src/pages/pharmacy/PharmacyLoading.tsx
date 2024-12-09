import Skeleton from '@/components/ui/skeleton';
import React from 'react';


const PharmacyLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 p-4">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="overflow-hidden rounded-xl border border-gray-200">
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <div className="text-sm font-medium leading-6 flex flex-col text-gray-900">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px] mt-2" />
            </div>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500"><Skeleton className="h-4 w-[100px]" /></dt>
              <dd className="text-gray-700"><Skeleton className="h-4 w-[150px]" /></dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500"><Skeleton className="h-4 w-[100px]" /></dt>
              <dd className="flex items-start gap-x-2"><Skeleton className="h-4 w-[150px]" /></dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
};

export default PharmacyLoading;

