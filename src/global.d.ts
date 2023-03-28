type GoogleScriptFunction = (...args: any[]) => void;

interface GoogleScriptRun {
  withSuccessHandler: (handler: (result: any) => void) => GoogleScriptRun;
  withFailureHandler: (handler: (error: any) => void) => GoogleScriptRun;
  [functionName: string]: GoogleScriptFunction | any;
}

declare global {
  const google: {
    script: {
      run: GoogleScriptRun;
    };
  };
}

export {}