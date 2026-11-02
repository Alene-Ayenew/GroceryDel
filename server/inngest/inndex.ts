import { Inngest } from "inngest";

const LOW_STOCK_THRESHOLD=10;
export const inngest = new Inngest({ id: "grocery-delivery" });

// low stock Alert to admin eemail
const helloWorld = inngest.createFunction(
  { id: "hello-world", triggers: [{ event: "test/hello.world" }] },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);
export const functions = [];