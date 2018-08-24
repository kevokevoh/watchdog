import program from 'commander';
import fs from 'fs';

// Invoked as bin script
if (require.main === module) {
    program
        .option('-l, --fetch-live-users <type>', 'Run default users')
        .option('-c, --currency-code <type>', 'Currency code to consider')
        .option('-t, --top-apps-threshold <type>', 'Top Apps threshold')
        .parse(process.argv);

    const LiveFunction = program.fetchLiveUsers;

    if (LiveFunction) {
        console.log('Run it');
    }
}


