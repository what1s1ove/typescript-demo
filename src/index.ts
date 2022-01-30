import { shipWeight } from './get-random-number.js';

Object.defineProperty(globalThis, 'MyApp', { value: 'v1.0.0', writable: true });

function deliveryMethod() {
  // TODO some logic
  return 'overnight';
}

function sendUpdates(emailAddr: string | string[]) {
  function sendEmail(addr: string) {
    console.log(
      `Sipping to ${addr} via ${deliveryMethod() || 'standard'} delivery.`,
    );

    if (shipWeight() > 100) {
      console.log('WARNING: oversize package.');
    }
  }

  if (Array.isArray(emailAddr)) {
    emailAddr.forEach((val) => {
      sendEmail(val.trim());
    });
  } else {
    sendEmail(emailAddr.trim());
  }
}
