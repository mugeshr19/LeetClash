import { leetquestion } from "./api_function/leetquestion.js";

const test = async () => {
  const question = await leetquestion(1); // numeric questionId
  console.log(question);
};

test();
