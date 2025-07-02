import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Righticon from "@/assets/icons/right-icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { useGetSubscriptionPlan } from "@/hook/subscription.hook";

const Payment = () => {
  const { subscriptionPlan } = useGetSubscriptionPlan();

  const plans = subscriptionPlan || [];

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[48px] font-space font-bold leading-[132%] tracking-[-0.48px] text-center text-foreground">
          Choose the right plan for you
        </h1>
        <p className="text-[18px] font-nunito font-normal leading-[164%] max-w-2xl mx-auto text-center text-[#6B7280] mt-4">
          Experience a smarter way to book and manage calls with automation,
          integrations, and time-saving features designed for your needs.
        </p>
      </div>

      <div className="mt-20">
        <div className="container mx-auto flex flex-wrap justify-center gap-8">
          {plans.map((plan) => (
            <Card key={plan.id} className="w-full max-w-sm">
              <CardHeader>
                <div className="bg-[#F5F4F2] p-4 rounded-lg mb-5">
                  <h1 className="text-lg font-semibold inline mr-5">
                    {plan.name}
                  </h1>
                  {plan.is_popular && (
                    <Badge className="text-black">Popular</Badge>
                  )}
                  <p className="text-primary text-sm font-normal">
                    <span className="text-2xl text-foreground font-bold">
                      ${plan.price}
                    </span>{" "}
                    / {plan.billing_interval}
                  </p>
                  <p className="max-w-lg mt-3">{plan.description}</p>
                </div>
                <CardTitle>Features included:</CardTitle>
                <CardDescription>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 items-center py-3">
                        <Righticon />
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to="#" className="w-full">
                  <Button className="w-full text-foreground">Select</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;

// {isLoading
//           ? Array.from({ length: 3 }).map((_, i) => (
//               <CardSkeleton key={i} />
//             ))
//           : plans.map((plan) => (
//               <Card key={plan.id} className="w-full">
//                 <CardHeader>
//                   <div className="bg-[#F5F4F2] p-4 rounded-lg mb-5">
//                     <h1 className="text-lg font-semibold inline mr-5">
//                       {plan.name}
//                     </h1>
//                     {plan.is_popular && <Badge>Popular</Badge>}
//                     <p className="text-primary text-sm font-normal">
//                       <span className="text-2xl text-foreground font-bold">
//                         ${plan.price}
//                       </span>{" "}
//                       / {plan.billing_interval}
//                     </p>
//                     <p className="max-w-lg mt-3">{plan.description}</p>
//                   </div>
//                   <CardTitle>Features included:</CardTitle>
//                   <CardDescription>
//                     <ul>
//                       {plan.features.map((feature, i) => (
//                         <li key={i} className="flex gap-2 items-center">
//                           <Righticon />
//                           <p>{feature}</p>
//                         </li>
//                       ))}
//                     </ul>
//                   </CardDescription>
//                 </CardHeader>
//                 <CardFooter>
//                   <Link to="/paymentdetails" className="w-full">
//                     <Button className="w-full text-foreground">Select</Button>
//                   </Link>
//                 </CardFooter>
//               </Card>
//             ))}
