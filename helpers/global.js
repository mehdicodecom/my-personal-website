export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function validatePhoneNumber(phoneNumber) {
  // Define the regular expression pattern using RegExp object
  const pattern = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  );
  // Test the phone number against the pattern
  if (pattern.test(phoneNumber)) {
    console.log("Phone number is valid");
    return true;
  } else {
    console.log("Phone number is not valid");
    return false;
  }
}
