import SellingOnline from './SellingOnline';
import GettingPaid from './GettingPaid';
import MoreSellingTools from './MoreSellingTools';

const SellerTools: React.FC = () => {
  return (
    <div className="p-6 px-6 md:px-40">
      <h2 className="text-3xl font-semibold">Seller Tools</h2>
      <p className="mb-12 mt-2 md:pr-96 text-lg text-slate-800/65 font-medium">
        Sell online easily and grow your business with Seller Tools. Create PayPal buttons, get instant payment notifications, and do much more.
      </p>
      <div className="flex flex-col space-y-16 px-4 md:px-16">
        <SellingOnline />
        <GettingPaid />
        <MoreSellingTools />
      </div>
    </div>
  );
};

export default SellerTools;