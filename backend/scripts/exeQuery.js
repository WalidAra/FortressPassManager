const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function insertCategories() {
  try {
    await prisma.category.createMany({
      data: [
        { name: "Bank", icon: "bank_icon" },
        { name: "Credit Cards", icon: "credit_card_icon" },
        { name: "Social Media", icon: "social_media_icon" },
        { name: "Email", icon: "email_icon" },
        { name: "Utility", icon: "utility_icon" },
        { name: "Gaming", icon: "gaming_icon" },
        { name: "Streaming Services", icon: "streaming_icon" },
        { name: "Shopping", icon: "shopping_icon" },
        { name: "Work", icon: "work_icon" },
        { name: "Personal Websites or Blogs", icon: "blog_icon" },
        { name: "Travel", icon: "travel_icon" },
        { name: "Healthcare", icon: "healthcare_icon" },
        { name: "Education", icon: "education_icon" },
        { name: "Membership", icon: "membership_icon" },
      ],
    });
    console.log("Categories inserted successfully");
  } catch (error) {
    console.error("Error inserting categories:", error);
  } finally {
    await prisma.$disconnect();
  }
}

insertCategories();
