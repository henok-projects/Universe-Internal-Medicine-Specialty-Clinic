import Progress from '@/components/ui/panel_progress';
import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormBuilder from '../../../components/ui/FormBuilder';
import { formOneData, formTwoData } from './StepTabs';
import { formOneSchema, formTwoSchema } from './RegistrationSchema';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const RegisterProvider = () => {
  const { toast } = useToast();
  const formOne = useForm<z.infer<typeof formOneSchema>>({
    resolver: zodResolver(formOneSchema),
    defaultValues: {
      providerEmail: '',
      providerPhoneNumber: '',
      providerName: '',
    },
  });

  const formTwo = useForm<z.infer<typeof formTwoSchema>>({
    resolver: zodResolver(formTwoSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
  });

  function onSubmit(values: z.infer<typeof formOneSchema>) {
    console.log('VALUES', values);
  }

  const formOneButon = (
    <div className="w-full flex items-end justify-end">
      <Button variant="outline" size="sm" type="submit">
        Next
      </Button>
    </div>
  );

  const formTwoButton = (
    <div className="flex items-center gap-x-2 justify-between">
      <Button variant="outline" size="sm">
        Prev
      </Button>
      <Button variant="outline" size="sm">
        Next
      </Button>
    </div>
  );

  const [stepperData, setStepperData] = useState([
    {
      id: 0,
      name: 'General',
      form: (
        <FormBuilder key={1} inputData={formOneData} form={formOne} onSubmit={onSubmit}>
          {formOneButon}
        </FormBuilder>
      ),
      status: 'current',
      complete: false,
    },
    {
      id: 1,
      name: 'Account',
      form: (
        <FormBuilder key={2} inputData={formTwoData} form={formTwo} onSubmit={onSubmit}>
          {formTwoButton}
        </FormBuilder>
      ),
      status: '',
      complete: false,
    },
  ]);

  return (
    <div className="flex flex-col gap-4 h-lvh py-10">
      <div>
        <div className="min-w-0 flex items-center sm:items-start md:pl-32">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Universe Internal Medicine Specialty Clinic
          </h2>
        </div>

        <div className="min-w-0 flex items-center sm:items-start md:pl-32">
          <h2 className="text-lg font-medium  text-primary sm:truncate sm:text-xl sm:tracking-tight">Let's get you started</h2>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {' '}
        <Progress steps={stepperData} setStep={setStepperData} />
      </div>
      <div className="flex items-center justify-center">
        {stepperData.map((item, idx) => {
          return <div key={idx}>{item.status === 'current' && item.form}</div>;
        })}
      </div>
    </div>
  );
};

export default RegisterProvider;
