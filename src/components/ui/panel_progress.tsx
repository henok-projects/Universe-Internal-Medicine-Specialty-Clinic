import React, { PropsWithChildren } from "react"
import { Check } from "lucide-react";

interface stepTypes {
  name: string,
  id: number,
  status: string,
  complete: boolean
}

interface Props {
  steps: stepTypes[],
  setStep: any
}

const Progress: React.FC<PropsWithChildren<Props>> = ({ steps, setStep }) => {

  const updateStepperData = (stepId) => {

  
    return steps.map((step) => {
      if (step.status === "current" && stepId != step.id) {
        return { ...step, status: "" };
      }

      if (step.id == stepId) {
        return { ...step, status: "current" }
      }

      return step;
    });

  };

  const handleStepChange = (e, stepId:number) => {
    e.preventDefault();
    const prev = stepId - 1;
    if(stepId > 0 && !steps[prev].complete) return;
    setStep(updateStepperData(stepId));
  };

  return (
    <nav aria-label="Progress" className="sm:min-w-[470px]">
      <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1" onClick={(e) => handleStepChange(e, step.id)}>
            {step.complete ? (
              <a href={""} className="group flex w-full items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary group-hover:bg-indigo-800">
                    <Check className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-primary">{step.name}</span>
                </span>
              </a>
            ) : step.status === 'current' ? (
              <a href={""} className="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary">
                  <span className="text-primary">{step.id + 1}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-primary">{step.name}</span>
              </a>
            ) : (
              <a href={""} className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">{step.id + 1}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>

                <div className="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Progress;
