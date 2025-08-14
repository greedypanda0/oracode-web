import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { IndianRupee, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

function PaymentSection() {
  const [donationAmount, setDonationAmount] = React.useState(0);
  const [loadingGateway, setLoadingGateway] = React.useState(null);

  const handlePayment = async (gateway) => {
  
    setLoadingGateway(gateway);

    const razorPay_Key = "rzp_test_2I9fTA8UKz94N0";
    const stripe_Key =
      "pk_test_51RrJEfJ7yR7JaiY2eqxg84xXQqSHjUgJnAW3YdjlHieKgEYkdpmmMC34IvD5d4fichvFnB4wLK2tke7hgmUddbsn00CeHx2VOy";

    try {
      if (gateway == "razorpay") {
        const options = {
          key: razorPay_Key,
          amount: donationAmount * 100,
          currency: "INR",
          name: "Oracode",
          description: "Donation for Oracode",
          handler: function (response) {
            toast(
              "Thank you for your donation!, donationId:  " +
                response.razorpay_payment_id
            );
            setLoadingGateway(null);
          },
          modal: {
            ondismiss: function () {
              setLoadingGateway(null);
            },
          },
          prefill: {
            name: "Oracode",
            email: "",
            contact: "",
          },
          theme: {
            color: "#F43F5E",
          },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();

        setTimeout(() => setLoadingGateway(null), 1000);
      } else if (gateway == "stripe") {
        const stripe = await loadStripe(stripe_Key);
        const result = await stripe?.redirectToCheckout({
          lineItems: [{ price: "price_1RrJOZJ7yR7JaiY2aNsLimSx", quantity: 1 }],
          mode: "payment",
          successUrl: window.location.origin + "/donate/?success=true",
          cancelUrl: window.location.origin + "/donate/?canceled=true",
        });
        if (result?.error) {
          toast.error(result.error.message);
          setLoadingGateway(null); 
        }
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment initialization failed. Please try again.");
      setLoadingGateway(null); 
    }
  };

  const donationAmounts = [
    { amount: 100, impact: "Provides a month of coding resources" },
    { amount: 500, impact: "Supports a workshop for 10 children" },
    { amount: 1000, impact: "Funds a coding bootcamp for a class" },
    { amount: 5000, impact: "Enables curriculum development" },
  ];

  const isLoading = loadingGateway !== null;

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-16 transform transition-all duration-500 ease-out">
      <div className="space-y-4 mb-8">
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Choose an amount:
        </p>
        <div className="grid grid-cols-2 gap-3">
          {donationAmounts.map((donation, index) => (
            <button
              key={index}
              className={`group p-4 border-2 border-muted hover:border-rose-500 rounded-xl transition-all hover:shadow-md bg-background hover:bg-rose-50 dark:hover:bg-rose-950/20 transform hover:scale-105 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => !isLoading && setDonationAmount(donation.amount)}
              disabled={isLoading}
            >
              <div className="text-2xl font-bold text-foreground group-hover:text-rose-600 mb-1">
                ₹{donation.amount}
              </div>
              <div className="text-xs text-muted-foreground leading-tight">
                {donation.impact}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <label className="text-sm font-medium text-muted-foreground">
          Or enter a custom amount:
        </label>
        <div className="relative">
          <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="number"
            placeholder="Enter amount"
            value={donationAmount > 0 ? donationAmount : ""}
            onChange={(e) => !isLoading && setDonationAmount(e.target.value)}
            disabled={isLoading}
            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-background transition-all duration-300 focus:scale-105 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium text-muted-foreground">
          Payment methods:
        </p>
        <div className="flex gap-3">
          <button
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-muted hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-medium ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            } ${loadingGateway === "razorpay" ? "bg-blue-600 text-white" : ""}`}
            disabled={!donationAmount || isLoading}
            onClick={(e) => handlePayment("razorpay")}
          >
            {loadingGateway === "razorpay" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Razorpay"
            )}
          </button>
          <button
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-muted hover:bg-purple-600 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-medium ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            } ${loadingGateway === "stripe" ? "bg-purple-600 text-white" : ""}`}
            disabled={!donationAmount || isLoading}
            onClick={(e) => handlePayment("stripe")}
          >
            {loadingGateway === "stripe" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Stripe"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSection;
