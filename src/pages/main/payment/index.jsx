import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

const pricingPlans = {
  monthly: [
    {
      title: "Single 30 Days Package",
      price: 2.99,
      billing: "month",
      description:
        "Affordable solo marketer solution. Monthly billing. Full feature set.",
      features: [
        "Essential features included",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      title: "Single 30 Days Package",
      price: 9.99,
      billing: "month",
      badge: true,
      description:
        "Ideal for small teams. Monthly billing with collaboration features.",
      features: [
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
      ],
    },
    {
      title: "Enterprise Plan",
      price: 19.99,
      billing: "month",
      description: "For enterprises with dedicated support. Monthly billing.",
      features: ["Unlimited users", "Dedicated manager", "24/7 support"],
    },
  ],
  yearly: [
    {
      title: "Single 1 Year Package",
      price: 29.99,
      billing: "year",
      description:
        "Affordable solo marketer solution. Yearly billing. Full feature set.",
      features: [
        "Essential features included",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      title: "Team Collaboration Annual",
      price: 99.99,
      billing: "year",
      description:
        "Ideal for small teams. Yearly billing with collaboration features.",
      features: [
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
      ],
    },
    {
      title: "Enterprise Yearly Plan",
      price: 199.99,
      billing: "year",
      description: "For enterprises with dedicated support. Yearly billing.",
      features: ["Unlimited users", "Dedicated manager", "24/7 support"],
    },
  ],
};

const Payment = () => {
  return (
    <div className=" py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[48px] font-bold leading-[132%] tracking-[-0.48px] text-center text-foreground">
          Choose the right plan for you
        </h1>
        <p className="text-[18px] font-normal leading-[164%] max-w-2xl mx-auto text-center text-[#6B7280] mt-4">
          Experience a smarter way to book and manage calls with automation,
          integrations, and time-saving features designed for your needs.
        </p>
      </div>

      <div className="mt-20">
        <Tabs defaultValue="monthly" className="container mx-auto px-[150px]">
          <TabsList className="bg-white border border-[#E8E8E8] rounded-[32px] flex gap-5 w-[300px] mx-auto mb-5">
            <TabsTrigger
              value="monthly"
              className="bg-white border-r border-[#E8E8E8] w-lg text-center font-semibold text-sm"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>

          {/* Monthly Pricing */}
          <TabsContent value="monthly">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
              {pricingPlans.monthly.map((plan, index) => (
                <Card key={index} className="w-full">
                  <CardHeader>
                    <div className="bg-[#F5F4F2] p-4 rounded-lg mb-5">
                      <h1 className="text-lg font-semibold inline mr-5">
                        {plan.title}
                      </h1>
                      {plan.badge && <Badge>Popular</Badge>}
                      <p className="text-primary text-sm font-normal">
                        <span className="text-2xl text-foreground font-bold">
                          ${plan.price}
                        </span>{" "}
                        / {plan.billing}
                      </p>
                      <p className="max-w-lg mt-3">{plan.description}</p>
                    </div>
                    <CardTitle>Features included:</CardTitle>
                    <CardDescription>
                      <ul>
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex gap-2 items-center">
                            <Righticon />
                            <p>{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link to="/paymentdetails" className="w-full">
                      {" "}
                      <Button className="w-full text-foreground">Select</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Yearly Pricing */}
          <TabsContent value="yearly">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pricingPlans.yearly.map((plan, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="bg-[#F5F4F2] p-4 rounded-lg mb-5">
                      <h1 className="text-lg font-semibold">{plan.title}</h1>
                      <p className="text-primary text-sm font-normal">
                        <span className="text-2xl text-foreground font-bold">
                          ${plan.price}
                        </span>{" "}
                        / {plan.billing}
                      </p>
                      <p className="max-w-lg mt-3">{plan.description}</p>
                    </div>
                    <CardTitle>Features included:</CardTitle>
                    <CardDescription>
                      <ul>
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex gap-2 items-center">
                            <Righticon />
                            <p>{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full text-foreground">Select</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Payment;
