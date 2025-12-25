import axios from "axios";
``
const leetquestion = async(req,res)=>{
    const {number} = req.params;
    try{
        const response = await axios.post("https://leetcode.com/graphql",{
            query:`
            query questionData($number: Int!) {
                questionList(
                    categorySlug : ""
                    filter: { frontendQuestionId: $number }
                ){
                    questions{
                        frontendQuestionId
                        title
                        titleSlug
                        difficulty
                    }
                }
            }
            `,
            variables:{
                number : Number(number)
            }
        },
    {
      headers:{
        "Content-Type": "application/json"
      }  
    });
        const question = respose.data.data.questionList.questions[0];

        if(!question){
            return  res.status(404).json({ error: "Question not found" });
        }

        res.json({
            problemNumber: question.frontendQuestionId,
            title: question.title,
            difficulty: question.difficulty,
            url: `https://leetcode.com/problems/${question.titleSlug}/`
        });
    } catch(error){
        console.error("Error fetching question:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export {leetquestion};