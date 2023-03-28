const googleScriptRun = async (
  functionName: string,
  ...args: any[]
): Promise<any> => {
  if (typeof google === 'undefined') {
    try {
      const stub = await import(`./stubs/${functionName}.json`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(stub);
        }, 2000); // Simulate 2 seconds delay
      });
    } catch (e) {
      throw new Error(`${functionName}のスタブがありません。`);
    }
  }

  return new Promise((resolve, reject) => {
    try {
      const run = google.script.run;
      run
        .withSuccessHandler((result: any) => {
          resolve(result);
        })
        .withFailureHandler((error: any) => {
          reject(error);
        })[functionName](...args);
    } catch (error) {
      console.error(error);
    }
  });
};

export default googleScriptRun;