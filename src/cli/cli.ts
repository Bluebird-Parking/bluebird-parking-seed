import { main } from '../main/main';

interface CLIArgs {
    method: string;
}

export async function cli(args: CLIArgs): Promise<void> {
    console.log(args);
    main();

    // commands:
    // seed (seed an existing or new database)
    // reseed (overwrite and seed an existng database)
}
