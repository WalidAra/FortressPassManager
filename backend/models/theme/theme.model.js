const { connectToDatabase } = require("../../config/mongodb");

const Theme = {
  getUserTheme: async (user_id) => {
    const client = await connectToDatabase();
    const db = client.db("fortress");
    const collection = db.collection("theme");
    try {
      const result = await collection.findOne({ user_id: user_id });
      return result;
    } catch (error) {
      console.error("Error at getting theme", error.message);
    }
  },

  setTheme: async (user_id, theme) => {
    try {
      const client = await connectToDatabase();
      const db = client.db("fortress");
      const collection = db.collection("theme");
     const result = await collection.findOneAndUpdate(
       { user_id: user_id },
       { $set: { theme: theme.theme, color: theme.color } },
       { upsert: true, returnDocument: "after" }
     );
      return result;
    } catch (error) {
      console.error("Error at setting theme", error.message);
    }
  },
};

module.exports = Theme;
