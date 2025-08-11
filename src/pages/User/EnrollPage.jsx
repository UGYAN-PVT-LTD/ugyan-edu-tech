import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaCreditCard, FaLock, FaCheckCircle, FaShieldAlt, FaMobile, FaQrcode } from "react-icons/fa";
import "../../css/Courses.css";

const EnrollPage = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title } = useParams();
  const course = location.state?.course;
  const [paymentMethod, setPaymentMethod] = useState("card"); // "card" or "upi"
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);

  useEffect(() => {
    if (!user) {
      navigate("/loginorSignup", { replace: true, state: { from: location } });
    }
  }, [user, navigate, location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const formatUpiId = (value) => {
    return value.toLowerCase().replace(/\s+/g, '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (paymentMethod === "upi") {
      // Do nothing for UPI payment as backend is not implemented
      return;
    }
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStep(2);
      // Simulate successful payment
      setTimeout(() => {
        alert(`Payment Successful via ${paymentMethod.toUpperCase()}! Enrollment Complete.`);
        navigate("/profile");
      }, 2000);
    }, 3000);
  };

  if (!user) return null;

  return (
    <div className="courses-page" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div className="course-block" style={{ maxWidth: 600, width: "100%", margin: "40px auto", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ color: "#6a1b9a", fontWeight: 700, marginBottom: 20 }}>{title}</h2>
        
        {paymentStep === 1 ? (
          <div style={{ width: "100%", background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 6px 20px rgba(0,0,0,0.1)", marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <FaShieldAlt color="#6a1b9a" />
              <h3 style={{ color: "#53346D", margin: 0 }}>Secure Payment</h3>
            </div>

            {/* Payment Method Toggle */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", background: "#f8f9fa", borderRadius: 12, padding: 4, marginBottom: 16 }}>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "none",
                    background: paymentMethod === "card" ? "#6a1b9a" : "transparent",
                    color: paymentMethod === "card" ? "white" : "#666",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8
                  }}
                >
                  <FaCreditCard size={16} />
                  Credit/Debit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "none",
                    background: paymentMethod === "upi" ? "#6a1b9a" : "transparent",
                    color: paymentMethod === "upi" ? "white" : "#666",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8
                  }}
                >
                  <FaMobile size={16} />
                  UPI Payment
                </button>
              </div>
            </div>
            
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={handleSubmit}>
              {paymentMethod === "card" ? (
                <>
                  <label style={{ fontWeight: 500 }}>
                    Name on Card
                    <input 
                      type="text" 
                      name="cardName"
                      required 
                      className="enroll-btn" 
                      style={{ color: "#333", background: "#f4edf9", marginTop: 4, border: "1px solid #ccc", borderRadius: 8, padding: 8 }}
                      value={paymentData.cardName}
                      onChange={handleInputChange}
                    />
                  </label>
                  
                  <label style={{ fontWeight: 500 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <FaCreditCard color="#6a1b9a" />
                      Card Number
                    </div>
                    <input 
                      type="text" 
                      name="cardNumber"
                      required 
                      maxLength={19}
                      className="enroll-btn" 
                      style={{ color: "#333", background: "#f4edf9", marginTop: 4, border: "1px solid #ccc", borderRadius: 8, padding: 8 }}
                      value={paymentData.cardNumber}
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value);
                        setPaymentData(prev => ({ ...prev, cardNumber: formatted }));
                      }}
                      placeholder="1234 5678 9012 3456"
                    />
                  </label>
                  
                  <div style={{ display: "flex", gap: 12 }}>
                    <label style={{ fontWeight: 500, flex: 1 }}>
                      Expiry Date
                      <input 
                        type="text" 
                        name="expiry"
                        required 
                        placeholder="MM/YY" 
                        maxLength={5}
                        className="enroll-btn" 
                        style={{ color: "#333", background: "#f4edf9", marginTop: 4, border: "1px solid #ccc", borderRadius: 8, padding: 8 }}
                        value={paymentData.expiry}
                        onChange={(e) => {
                          const formatted = formatExpiry(e.target.value);
                          setPaymentData(prev => ({ ...prev, expiry: formatted }));
                        }}
                      />
                    </label>
                    <label style={{ fontWeight: 500, flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <FaLock color="#6a1b9a" />
                        CVV
                      </div>
                      <input 
                        type="password" 
                        name="cvv"
                        required 
                        maxLength={4} 
                        pattern="[0-9]{3,4}" 
                        className="enroll-btn" 
                        style={{ color: "#333", background: "#f4edf9", marginTop: 4, border: "1px solid #ccc", borderRadius: 8, padding: 8 }}
                        value={paymentData.cvv}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ background: "#f8f9fa", padding: 20, borderRadius: 12, textAlign: "center", marginBottom: 16 }}>
                    <FaQrcode size={48} color="#6a1b9a" style={{ marginBottom: 12 }} />
                    <h4 style={{ color: "#6a1b9a", marginBottom: 8 }}>Scan QR Code to Pay</h4>
                    <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: 16 }}>
                      Use any UPI app (Google Pay, PhonePe, Paytm, etc.)
                    </p>
                    <div style={{ 
                      width: 120, 
                      height: 120, 
                      background: "linear-gradient(45deg, #6a1b9a, #53346D)", 
                      margin: "0 auto 16px",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "0.8rem",
                      textAlign: "center",
                      padding: 8
                    }}>
                      QR Code<br />Placeholder
                    </div>
                    <p style={{ color: "#666", fontSize: "0.8rem" }}>
                      Amount: ₹3,179
                    </p>
                  </div>
                  
                  <label style={{ fontWeight: 500 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <FaMobile color="#6a1b9a" />
                      UPI ID (Optional)
                    </div>
                    <input 
                      type="text" 
                      name="upiId"
                      placeholder="username@upi" 
                      className="enroll-btn" 
                      style={{ color: "#333", background: "#f4edf9", marginTop: 4, border: "1px solid #ccc", borderRadius: 8, padding: 8 }}
                      value={paymentData.upiId}
                      onChange={(e) => {
                        const formatted = formatUpiId(e.target.value);
                        setPaymentData(prev => ({ ...prev, upiId: formatted }));
                      }}
                    />
                    <small style={{ color: "#666", fontSize: "0.8rem" }}>
                      Enter your UPI ID to receive payment confirmation
                    </small>
                  </label>
                  
                  <div style={{ background: "#fff3cd", border: "1px solid #ffeaa7", borderRadius: 8, padding: 12, marginTop: 8 }}>
                    <h5 style={{ color: "#856404", marginBottom: 8 }}>How to pay via UPI:</h5>
                    <ol style={{ color: "#856404", fontSize: "0.9rem", margin: 0, paddingLeft: 16 }}>
                      <li>Open any UPI app on your phone</li>
                      <li>Scan the QR code above</li>
                      <li>Enter amount: ₹3,179</li>
                      <li>Complete the payment</li>
                      <li>Click "Confirm Payment" below</li>
                    </ol>
                  </div>
                </>
              )}
              
              <div style={{ background: "#f8f9fa", padding: 12, borderRadius: 8, marginTop: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>Course Price:</span>
                  <span style={{ fontWeight: 600 }}>₹2,999</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>Tax:</span>
                  <span>₹180</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "1.1rem", borderTop: "1px solid #ddd", paddingTop: 8 }}>
                  <span>Total:</span>
                  <span style={{ color: "#6a1b9a" }}>₹3,179</span>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="enroll-btn" 
                style={{ 
                  background: "linear-gradient(to right, #000000 0%, #53346D 51%, #000000 100%)", 
                  color: "#fff", 
                  fontWeight: 700, 
                  fontSize: 18, 
                  marginTop: 16,
                  opacity: isProcessing ? 0.7 : 1,
                  cursor: isProcessing ? "not-allowed" : "pointer"
                }}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing Payment..." : paymentMethod === "upi" ? "Confirm Payment" : "Pay & Enroll"}
              </button>
            </form>
            
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, fontSize: "0.9rem", color: "#666" }}>
              <FaLock color="#6a1b9a" />
              <span>Your payment information is secure and encrypted</span>
            </div>
          </div>
        ) : (
          <div style={{ width: "100%", background: "#fff", borderRadius: 16, padding: 40, boxShadow: "0 6px 20px rgba(0,0,0,0.1)", marginBottom: 24, textAlign: "center" }}>
            <FaCheckCircle size={60} color="#28a745" style={{ marginBottom: 20 }} />
            <h3 style={{ color: "#28a745", marginBottom: 10 }}>Payment Successful!</h3>
            <p style={{ color: "#666", marginBottom: 20 }}>Processing your enrollment...</p>
            <div style={{ width: "100%", height: 4, background: "#f0f0f0", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #28a745, #20c997)", animation: "loading 2s ease-in-out" }}></div>
            </div>
          </div>
        )}
        
        <button className="go-back-btn" onClick={() => navigate(-1)} style={{ marginTop: 12 }}>← Go Back</button>
      </div>
      
      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default EnrollPage; 