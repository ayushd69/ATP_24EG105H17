// .OTP Countdown Simulator (Console App)
// ------------------------------------
//         
//         Simulate OTP sending flow in Node.js:
//         
//         Show “OTP Sent Successfully”
//         
//         Start 10-second countdown
//         
//         Allow resend only after countdown ends
let sec=10;
let intervalId=setInterval(()=>{
    {
        sec--;
        console.log(sec);
        if(sec===0)
        {
            console.log("resend otp")
            clearInterval(intervalId);
        }
    }
},1000)
console.log("otp sent successfully")