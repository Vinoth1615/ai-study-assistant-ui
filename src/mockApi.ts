export async function askAI(question: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`🤖 Mock Answer: "${question}" is a great question! 
This is just a demo response from your AI Study Assistant.`);
    }, 1000); // 1s delay to simulate real AI
  });
}
