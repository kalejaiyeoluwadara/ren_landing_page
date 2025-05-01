'use client'
import { useState } from 'react';
import { Icons } from '../components/icons';
import Badge from '../components/shared/Badge';
import Button from '../components/shared/Button';

// Types
type BillingCycle = 'monthly' | 'annual';

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PlanFeature[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}

// Components
const PricingHeader = () => {
  return (
    <div className="text-center w-full flex-center flex-col mb-12">
      <Badge icon={<Icons.Wallet />} text="Upgrade Plan" />
      <h2 className="mb-6">
        Flexible plans that grow<br />with your needs
      </h2>
    </div>
  );
};

const BillingToggle = ({ 
  billingCycle, 
  setBillingCycle 
}: { 
  billingCycle: BillingCycle; 
  setBillingCycle: (value: BillingCycle) => void;
}) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-gray-100 p-1 rounded-full">
        <div className="flex items-center">
          <button
            className={`py-2 px-6 rounded-full ${
              billingCycle === 'annual' 
                ? 'bg-red-500 text-white' 
                : 'text-gray-700'
            }`}
            onClick={() => setBillingCycle('annual')}
          >
            Annual
            {billingCycle === 'annual' && (
              <span className="ml-2 px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                Best Value
              </span>
            )}
          </button>
          <button
            className={`py-2 px-6 rounded-full ${
              billingCycle === 'monthly' 
                ? 'bg-red-500 text-white' 
                : 'text-gray-700'
            }`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
        </div>
      </div>
    </div>
  );
};

const PlanFeatureItem = ({ text }: PlanFeature) => {
  return (
    <li className="flex items-start mb-3">
      <span className='mr-2 '><Icons.Check  /></span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
};

const PricingCard = ({
  plan,
  billingCycle,
}: {
  plan: PricingPlan;
  billingCycle: BillingCycle;
}) => {
  const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
  const formattedPrice = price.toFixed(2).replace(/\.(\d{2})/, '.$1');
  const [dollars, cents] = formattedPrice.split('.');
  const annualBilling = billingCycle === 'annual' && plan.annualPrice > 0;
  const annualCost = plan.annualPrice * 12;

  return (
    <div
      className={`bg-[#F4F4F4] rounded-xl p-8 flex flex-col h-full 
      }`}
    >
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Ren {plan.name}</h3>
        <div className="flex items-baseline mb-1">
          <span className="text-3xl font-bold">${dollars}</span>
          <span className="text-3xl font-bold">.</span>
          <span className="text-3xl font-bold">{cents}</span>
          <span className="text-gray-600 ml-1">/Month</span>
        </div>
        {annualBilling && (
          <div className="mb-1 text-sm">
            <span className="text-gray-700">${annualCost}/year Billed Annually</span>
            <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
              Save 15%
            </span>
          </div>
        )}
        <p className="text-gray-600">{plan.description}</p>
      </div>

      <div className="">
       <div className='mb-6'>
       <Button name={plan.buttonText} isPrimary={true}/>
       </div>
        {plan.name !== 'Free' && plan.name !== 'Starter' && (
          <p className="text-gray-700 font-medium mb-4">
            Everything in the {plan.name === 'Pro' ? 'Starter' : 'Free'} Plan, Plus:
          </p>
        )}
        {plan.name === 'Starter' && (
          <p className="text-gray-700 font-medium mb-4">
            Everything in the Free Plan, Plus:
          </p>
        )}
        {plan.name === 'Free' && (
          <p className="text-gray-700 font-medium mb-4">
            Get started with:
          </p>
        )}

        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <PlanFeatureItem key={index} text={feature.text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Free',
      description: 'Perfect for small businesses starting out.',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        { text: '5 reviews per month' },
        { text: 'Share Reviews' },
        { text: 'Telegram Reviews' },
        { text: 'Ren Profile' },
      ],
      buttonText: 'Start for Free',
      buttonLink: '#',
    },
    {
      name: 'Starter',
      description: 'Ideal for growing businesses looking to build trust.',
      monthlyPrice: 12.75,
      annualPrice: 12.75,
      features: [
        { text: '25 reviews per month' },
        { text: 'Telegram Reviews' },
        { text: 'WhatsApp Reviews' },
        { text: 'Hashtag Tracking' },
        { text: 'Customise Ren Profile' },
        { text: 'Review Feedback' },
      ],
      buttonText: 'Upgrade Now',
      buttonLink: '#',
      highlighted: true,
    },
    {
      name: 'Pro',
      description: 'Designed for established businesses aiming to scale.',
      monthlyPrice: 21.25,
      annualPrice: 21.25,
      features: [
        { text: '50 reviews per month' },
        { text: 'Priority Support' },
        { text: 'Early Access to Updates' },
        { text: 'AI-Driven Insights' },
      ],
      buttonText: 'Upgrade Now',
      buttonLink: '#',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <PricingHeader />
      <BillingToggle 
        billingCycle={billingCycle} 
        setBillingCycle={setBillingCycle} 
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            billingCycle={billingCycle}
          />
        ))}
      </div>
      
      <div className="text-center mt-10 text-gray-700">
        Start for free, no credit card required.
      </div>
    </div>
  );
};

export default PricingSection;