function OrderingSystem() {
  
  // Login so that payment information can be saved for later
    // Also should consider using a cookie or somethign to keep logged in??
  function AuthenticateUser(){
  }
  
  // Allow user to choose a restaurant to show a menu for
  function RestaurantPicker() {
  }
  
  // Display a menu for the restaurant that user chooses and allow user to choose items from menu
  function RestaurantMenuDisplay() {
    // Make sure a notes section is available to user to add special instructions to cook, delivery driver, etc.
  }
  
  
  // Show order to verify correct. Use a large "Complete Order" button at bottom to finish ordering process
  function ConfirmOrder() {
  }
  
  // Choose a payment method (Credit Card, Cash, Cash App, Paypal, Venmo, Bitcoin)
  function PaymentMethod() {
  }
  
  // Submit credit card payment, or send order to cooks for cash payment on pickup
  function ProcessPayment() {
  }
  
  // Verify that Credit Card Payment tx was successful
  function VerifyPayment() {
  }
  
  // Email receipt to customer via e-mail on file via fb, twitter, google, etc. auth acquired in AuthenticateUser()
  function IssueReceipt() {
  }
}
