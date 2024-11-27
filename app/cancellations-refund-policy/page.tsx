import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-28">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Cancellations / Refunds Policy
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Till when can I register a complaint about an Order? </h2>
        <p className="mb-4">
        All our customers can register their complaints at the time of the Order 
        delivery by Agrisarathi at doorstep. In case the order is collected by customer 
        from the store, no complaint can be register as it is the responsibility of 
        customer to check the goods before taking delivery.  
        </p>
        </section>
        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How do I register a complaint about an Order? </h2>
        <p className="mb-4">
        To register any complaint regarding an Order please reach our Customer 
        service on our Whatsapp Number: 8595022032 or on the 
        https://play.google.com/store/search?q=agrisarathi&c=apps&hl=en. 
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
        What information do I have to share to register a complaint? 
        </h2>
        <ul className="list-decimal pl-6 mb-4">
            <li>We request you to make an Unboxing video (a video of you opening your 
                package from Agrisarathi) in Order to register a complaint. Please make sure 
                that your unboxing video shows the packed Order and the company sticker 
                clearly.</li>
            
                <li>If the packaging of your Order is torn or damaged/quantity is wrong, please fill 
                    the POD Form we send with the delivery boy. Please take a picture of the POD 
                    Form after filling it, as the delivery boy will have to take it with him. Share the 
                    picture of the POD Form with us while filing a complaint. </li>
                <li>For a Refund request please send us a picture of your Bank Passbook or a 
                    cancelled cheque. Also share your Order Number. </li>
                <li>Once we receive your Order, we will inspect it and notify you that we have 
                    received your returned Order. We will notify you on the status of your refund 
                    after inspecting the item. If your return is approved, we will initiate a refund to 
                    the account used for payment. You will receive the credit within a certain 
                    amount of days, depending on your card issuer’s policies. </li>
                <li>Please note that if (i) the product(s) in the Order you have returned to us are 
                    not faulty, damaged or defective, (ii) the product(s) in the Order you have 
                    returned correspond to the description displayed on our website, or they have 
                    not been returned in accordance with our return policies or they have not been 
                    returned in accordance within the relevant returns period from receipt of order, 
                    you will not be entitled to an exchange and we will return the goods to you at 
                    your costs and expense. </li>
                </ul></section>

        
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
        When will action be taken on my complaint? 
        </h2>
        <p className="mb-4">Each customer is important to us. Our team will try its best to resolve your 
                            complaint within 20 working days. Your understanding and cooperation is 
                            appreciated.</p>
                            </section>

          
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
        CUSTOMER SUPPORT DETAILS  
        </h2>
        <ol className="list-decimal pl-6 mb-4">
          <li>Whatsapp: 8595022032​</li>
          <li>Email: reachus@agrisarathi.com</li>
        </ol>
        </section>
    </div>
  );
};

export default RefundPolicy;