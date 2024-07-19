"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UPDATE_TRANSACTION } from "@/graphql/mutations/transaction.mutation";
import { GET_TRANSACTION } from "@/graphql/queries/transaction.query";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";

type Props = {
  id: string;
};

const formSchema = z.object({
  amount: z
    .string({ required_error: "Please input the amount." })
    .refine((val) => !isNaN(parseFloat(val)), {
      message: "Amount must be a number.",
    })
    .transform((val) => parseFloat(val)),
  location: z.string().min(2).max(50),
  description: z
    .string()
    .min(1, {
      message: "Description must be at least 10 characters.",
    })
    .max(200, {
      message: "Description must not be longer than 200 letters.",
    }),
  category: z.string(),
  date: z
    .date({
      required_error: "A date of transaction is required.",
    })
    .default(new Date()),
});

const TransactionUpdateForm = ({ id }: Props) => {
  const [updateTransaction, { loading }] = useMutation(UPDATE_TRANSACTION, {
    refetchQueries: ["GetTransactions", "GetTransactionStatistics"],
  });

  const {
    data,
    loading: getTransactionLoading,
    error,
  } = useQuery(GET_TRANSACTION, {
    variables: { id: id },
  });
  console.log("data1111111", data);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      location: "",
      description: "",
      category: "",
      date: new Date(),
    },
  });

  // Update the form values when the data is available
  useEffect(() => {
    if (data) {
      form.reset({
        amount: data.transaction.amount.toString(), // Ensure amount is a string
        location: data.transaction.location,
        description: data.transaction.description,
        category: data.transaction.category,
        // date: new Date(data.transaction.date), // Ensure the date is a Date object
      });
    }
  }, [data, form]);

  // If the query is loading, return a loading state
  if (getTransactionLoading) {
    return <div>Loading...</div>;
  }

  // If there's an error, return an error state
  if (error) {
    return <div>Error loading transaction.</div>;
  }

  // If no data is returned, return a no data state
  if (!data) {
    return <div>No data found</div>;
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    try {
      await updateTransaction({
        variables: { input: { ...values, transactionId: id } },
      });

      form.reset();
      console.log("Transaction updated successfully");
    } catch (error) {
      console.log("Updated Transaction error");
    }
  };
  return (
    <div className="p-3 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input placeholder="300" {...field} />
                </FormControl>
                <FormDescription>
                  This is your transaction amount.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Melbourne Central" {...field} />
                </FormControl>
                <FormDescription>
                  This is your transction happend place.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write down description about the transaction"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can edit and manage it later.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category of transaction" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="saving">Saving</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  This is your transaction types
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of transaction happend
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex">
            <Button
              type="submit"
              className="flex justify-start h-[44px] w-[150px] text-sm bg-themePrimary hover:bg-themePrimary/80"
            >
              <Send className="mr-2 w-5 h-5" />
              <div className="pl-2">Confirm</div>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TransactionUpdateForm;
