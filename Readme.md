# Trycathchify

Personal abstraction for fast debugging and DX.

```js
const {trycatchify} = require("trycatchify");

// :: TEST CASE 1 WITH SIMPLE USAGE.
trycatchify(() => {
	func();
});
// :: TEST CASE 2 WITH 2ND PARAM AS CATCH CALLBACK HANDLER.
trycatchify(
	() => {
		func();
	},
	() => {
		console.log("Error occured :( ");
		console.log("This block is in action now!!");
	}
);
```

Thanks.

~ Sahil Rajput
