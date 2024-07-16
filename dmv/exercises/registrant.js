function createRegistrant(name, age, permit = false) {
  return {
    name: name,
    age: age, 
    permit: permit,
    licenseData: {
      written: false,
      license: false,
      renewed: false
    }
  };
}

function earnPermit(registrant) {
  let statement;
  if (registrant.age >= 16) {
    registrant.permit = true;
    statement = 'You have successfully earned a permit!';
  } else {
    statement = 'Sorry, you are not able to earn a permit right now.';
  }
  return statement;
}

function takeLicenseExam(registrant) {
  let statement;
  if (registrant.permit) {
    statement = "Great job! You can take your test.";
  } else {
    statement = "Sorry, you need to earn a permit first."
  }
  return statement
}

module.exports = {
  createRegistrant: createRegistrant,
  earnPermit: earnPermit,
  takeLicenseExam: takeLicenseExam
};
  // createRegistrant,
  // earnPermit,
  // takeLicenseExam
