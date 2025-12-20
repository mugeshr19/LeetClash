import axios from "axios";

const leetcode = async(req,res)=>{
    const {username} = req.params;
    try{
            const response = await axios.post(
                "https://leetcode.com/graphql",
            {
                 query: `
                    query getUserProfile($username: String!) {
                    matchedUser(username: $username) {
                        username
                        profile {
                            ranking
                            reputation
                        }
                        submitStats {
                            acSubmissionNum {
                                difficulty
                                count
                            }
                        }
                    }
                }
                `,
                variables: { username }
            },
            {
                headers: {
                "Content-Type": "application/json"
                }
            }
            );
            const user = response.data.data.matchedUser;
            if(!user){
                return res.status(404).json({ error: "User not found" });
            }
            const stats = user.submitStats.acSubmissionNum;

            res.json({
                username: user.username,
                ranking: user.profile.ranking,
                reputation: user.profile.reputation,
                solved: {
                    easy: stats.find(s => s.difficulty === "Easy")?.count || 0,
                    medium: stats.find(s => s.difficulty === "Medium")?.count || 0,
                    hard: stats.find(s => s.difficulty === "Hard")?.count || 0,
                    total: stats.find(s => s.difficulty === "All")?.count || 0
                }
            });

    }
    catch{
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export {leetcode};