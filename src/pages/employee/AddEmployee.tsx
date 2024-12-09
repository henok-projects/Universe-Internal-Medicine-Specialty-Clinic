import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { z } from "zod";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { FormLabel } from "react-bootstrap";
import { Input } from "@/components/ui/input";

function AddEmployee() {
    const formSchema = z.object({
        firstName: z.string().min(2, {
            message: "First name should be atleast 2 characters",
        }),
        lastName: z.string().min(2, {
            message: "First name should be atleast 2 characters",
        }),
        email: z.string().email({
            message: "Enter a valid email",
        }),
        phoneNumber: z.string().min(9, {
            message: "Enter valid phone number",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(onSubmit, "submit");
    };
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="default">
                    <Plus /> Employee
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Employee</DialogTitle>
                    <DialogDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="py-8 flex flex-col gap-y-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Firstname *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is employee display name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Lastname *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="example@gmail.com" {...field} type="email"/>
                                            </FormControl>
                                            
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Firstname *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="0977889966" {...field} />
                                            </FormControl>
                                            
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button>
                                    Submit
                                </Button>
                            </form>
                        </Form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default AddEmployee;
