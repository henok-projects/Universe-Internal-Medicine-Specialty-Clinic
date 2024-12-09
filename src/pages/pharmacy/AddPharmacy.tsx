import Modal from '@/components/ui/modal'
import { Hospital, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { createPharmacy } from '@/store/slices/pharmacySlice';

function AddPharmacy() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>()

  const toggleModal = () => {
    setOpen(prev => !prev)
  }

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    dispatch(createPharmacy(data))
  }

  const formSchema = z.object({
    pharmacyName: z.string().min(1,{
      message: "Pharmacy name must be atleast 1 character"
    }),
    pharmacyAddress:  z.string().min(1,{
      message: "Pharmacy Address must be atleast 1 character"
    })
  })

  const pharmacyForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pharmacyName: "",
      pharmacyAddress: ""
    },
  })

  return (
    <div className='h-full'>
      <Modal open={open} setOpen={setOpen} title="Add Pharmacy" icon={<Hospital className='text-destructive' />}>
        <Form {...pharmacyForm}>
          <form onSubmit={pharmacyForm.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={pharmacyForm.control}
              name="pharmacyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pharmacy Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="eg. Test Pharmacy" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display pharmacy name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={pharmacyForm.control}
              name="pharmacyAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pharmacy address *</FormLabel>
                  <FormControl>
                    <Input placeholder="Addis Ababa, Ayat" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display pharmacy address.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Modal>
      <button
        onClick={toggleModal}
        type="button"
        className="relative h-full block w-full rounded-lg border border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <div className="flex justify-center">
          <Plus />
        </div>
        <span className="mt-2 block text-sm font-semibold text-gray-900">
          Create a new pharmacy
        </span>
      </button>
    </div>
  )
}

export default AddPharmacy