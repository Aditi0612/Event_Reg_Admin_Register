import "./error_pg.css";

const validate = (userRegistration) => {
  let errors = {};

  if (!userRegistration.username) {
    errors.username = "Name is required !";
  }
  if (!userRegistration.email) {
    errors.email = "Email is required !";
  } else if (!/\S+@\S+\.\S+/.test(userRegistration.email)) {
    errors.email = "Email is invalid !";
  }
  if (!userRegistration.phone) {
    errors.phone = "Phone No. is required !";
  }
  if (!userRegistration.aphone) {
    errors.aphone = "Alternate mobile no. is required !";
  }
  if (!userRegistration.ad1) {
    errors.ad1 = "Address 1 is required !";
  }
  if (!userRegistration.ad2) {
    errors.ad2 = "Address 2 is required !";
  }
  if (!userRegistration.state) {
    errors.state = "State is required !";
  }
  if (!userRegistration.pin) {
    errors.pin = "Pincode is required !";
  } else if (userRegistration.pin.length !== 6) {
    errors.pin = "Invalid pincode !";
  }
  if (!userRegistration.edq) {
    errors.edq = "Educational Qualification is required !";
  }
  if (!userRegistration.cllg) {
    errors.cllg = "College name is required !";
  }
  if (!userRegistration.course) {
    errors.course = "Course name is required !";
  }
  if (!userRegistration.yop) {
    errors.yop = "Year of passing is required !";
  }
  if (!userRegistration.cname) {
    errors.cname = "Company Name is required !";
  }
  if (!userRegistration.ccemail) {
    errors.ccemail = "Company email is required !";
  } else if (!/\S+@\S+\.\S+/.test(userRegistration.email)) {
    errors.ccemail = "Email is invalid !";
  }
  if (!userRegistration.desg) {
    errors.desg = "Designation/job profile is required !";
  }
  if (!userRegistration.pass) {
    errors.pass = "Password is required !";
  } else if (userRegistration.pass.length < 6) {
    errors.pass = "Password must have atleast 6 characters!";
  } else if (userRegistration.pass.length > 10) {
    errors.pass = "Password length cannot exceed more than 10 characters !";
  }
  if (!userRegistration.cpass) {
    errors.cpass = "Confirm password is required !";
  } else if (userRegistration.pass !== userRegistration.cpass) {
    errors.cpass = "Password and Confirm Password must be same !";
  }
  if (!/\S+@\S+\.\S+/.test(userRegistration.cemail)) {
    errors.cemail = "Invalid email id";
  }
  return errors;
};

export default validate;
