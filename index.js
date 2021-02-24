const trycatchify = (cb, cb_on_exception) => {
	try {
		cb();
	} catch (e) {
		console.log("::TRYCATCHIFY::", e);
		if (typeof cb_on_exception === "function") {
			cb_on_exception();
		}
	}
};

const func = () => {
	let x = 10; //Possible 1(no error), 10(error)

	if (x > 2) {
		throw Error("#HARDWORK BEATS TALENT!");
	} else {
		console.log("good to go!");
	}
};

// :: TEST CASE 1 WITH SIMPLE USAGE.
// trycatchify(() => {
// 	func();
// });

// :: TEST CASE 2 WITH 2ND PARAM AS CATCH CALLBACK HANDLER.
// trycatchify(
// 	() => {
// 		func();
// 	},
// 	() => {
// 		console.log("Error occured :( ");
// 		console.log("This block is in action now!!");
// 	}
// );

module.exports = {trycatchify};
