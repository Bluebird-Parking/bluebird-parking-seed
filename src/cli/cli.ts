interface CLIArgs {
    method: string;
}

export function cli(args: CLIArgs): void {
    console.log(args);
}
