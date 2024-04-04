/**
 * Call
 */

let emp = {
  firstName: "Tinku",
  lastName: "Kumar",
};

function invite(grti1, grti2) {
  console.log(grti1 + " ", this.firstName + " ", this.lastName + " ", grti2);
}

// invite.call(emp, "Hello", "How are you?");

/**
 * Apply
 */

// invite.apply(emp, ["Hello", "How are you?"]);

/**
 * Bind
 */

let inviteEmp = invite.bind(emp);

inviteEmp("Hello", "How are you?");
