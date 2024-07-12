"use client";

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import WaterfallImages from "@/components/WaterfallImage";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "@/graphql/mutations/user.mutation";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});

const SignUp = () => {
  const [signup, { loading }] = useMutation(SIGN_UP, {
    refetchQueries: ["GetAuthenticatedUser"],
  });
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await signup({
        variables: {
          input: values,
        },
      });
      router.push("/sign-in", { scroll: false });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <aside className="w-[600px] rounded-lg flex flex-col items-center ">
        <div className="text-2xl font-bold tracking-wide">Get Started</div>
        <div className="text-sm mb-8">
          Tracking expense easily starting from now!
        </div>
        <div className="w-[300px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your user name"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="******" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="sidebarOutline"
                className="w-full"
                disabled={loading}
              >
                Create Account
              </Button>
            </form>
          </Form>
        </div>
        <div className="text-sm mt-2">
          {`Already have an account? `}
          <Link href="/sign-in" className="hover:underline">
            Login Here
          </Link>
        </div>
      </aside>
      <div>
        <WaterfallImages />
      </div>
    </div>
  );
};

export default SignUp;
