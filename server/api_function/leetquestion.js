import axios from "axios";

export const leetquestion = async (number) => {
  const query = `
    query problemsetQuestionList(
      $categorySlug: String,
      $limit: Int,
      $skip: Int,
      $filters: QuestionListFilterInput
    ) {
      problemsetQuestionList: questionList(
        categorySlug: $categorySlug
        limit: $limit
        skip: $skip
        filters: $filters
      ) {
        questions: data {
          frontendQuestionId: questionFrontendId
          title
          titleSlug
          difficulty
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      "https://leetcode.com/graphql",
      {
        query,
        variables: {
          categorySlug: "",
          skip: 0,
          limit: 3500,
          filters: {}, // return all problems
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0", // helps avoid being blocked
        },
      }
    );

    const questions =
      response.data?.data?.problemsetQuestionList?.questions || [];

    const found = questions.find(
      (q) => Number(q.frontendQuestionId) === Number(number)
    );
    return found || null;

  } catch (error) {
    console.error("LeetCode API error:", error.response?.data || error);
    return null;
  }
};
