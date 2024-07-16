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


module.exports.createRegistrant = createRegistrant;
  // createRegistrant,
  // earnPermit,
  // takeLicenseExam
