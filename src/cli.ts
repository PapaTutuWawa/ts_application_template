const os = require("os");

function print_system_stuff(): void {
	// Print some stuff
	console.log("I'm being written in TypeScript");
	console.log(`Running on ${os.platform()}`);
}

print_system_stuff();
