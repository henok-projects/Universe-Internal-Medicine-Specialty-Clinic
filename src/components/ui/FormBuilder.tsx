import React, { PropsWithChildren } from 'react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface inputProps {
    label: string,
    placeholder?: string,
    description?: string,
    type:string, 
    name?: string
}
interface Props {
    form: any,
    onSubmit: (values: any) => void,
    inputData: inputProps[],
};


const FormBuilder: React.FC<PropsWithChildren<Props>> = ({ form, onSubmit, inputData, children }) => {
    console.log(form.watch(), "form")
    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 sm:min-w-[450px] py-6">
                {inputData.map((item, index) => {
                    return (
                        <FormField
                            key={index}
                            control={form.control}
                            name={item.name}
                            render={({ field }) => (
                                
                                <>
                                    <FormItem>
                                        <FormLabel>{item.label}</FormLabel>
                                        <FormControl>
                                            <Input type={item.type}  placeholder={item.placeholder} {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            {item.description}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                </>
                            )}
                        />
                    )
                })}
                <div className='w-full'>
                    {children}
                </div>
            </form>
        </Form>


    )
}

export default FormBuilder