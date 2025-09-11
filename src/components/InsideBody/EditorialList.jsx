import React from "react";

const articles = [
  {
    title: "The Future of Technology",
    about:
      "This editorial explores the transformative impact of emerging technologies such as artificial intelligence, quantum computing, and blockchain. It delves into how these innovations are expected to revolutionize industries, reshape the job market, and influence everyday life in the coming decades.",
  },
  {
    title: "Sustainable Living",
    about:
      "In this piece, we discuss practical strategies for adopting a sustainable lifestyle, including reducing waste, conserving energy, and embracing eco-friendly products. The editorial highlights the collective responsibility of individuals and communities to mitigate environmental degradation and foster a greener future.",
  },
  {
    title: "The Art of Mindfulness",
    about:
      "Mindfulness and meditation have grown from niche practices to mainstream wellness strategies. This editorial examines the psychological and physical benefits of mindfulness, offering insights into how incorporating these techniques can enhance mental clarity, reduce stress, and improve overall quality of life.",
  },
  {
    title: "Revolutionizing Education",
    about:
      "Technology is rapidly transforming education, breaking down traditional barriers and opening access worldwide. This editorial analyzes innovations such as online learning platforms, AI tutors, and virtual classrooms, discussing their potential to democratize education and tailor learning experiences to individual needs.",
  },
  {
    title: "Urban Gardening Trends",
    about:
      "As urban areas continue to grow, city dwellers are finding innovative ways to incorporate greenery into small spaces. This editorial explores the rise of urban gardening, from balcony farms to community gardens, and how this trend promotes sustainability, food security, and community engagement in metropolitan settings.",
  },
  {
    title: "The Rise of Remote Work",
    about:
      "The global shift toward remote work has redefined traditional office environments and employee lifestyles. This editorial investigates the benefits and challenges of working remotely, including increased flexibility, work-life balance, and the need for new management and communication tools.",
  },
  {
    title: "Cultural Diversity in Media",
    about:
      "Representation matters more than ever in today’s media landscape. This editorial discusses the importance of cultural diversity in films, television, and online content, emphasizing how inclusive storytelling fosters empathy, combats stereotypes, and reflects the rich tapestry of global society.",
  },
  {
    title: "Nutrition Myths Debunked",
    about:
      "With the abundance of conflicting nutrition advice, this editorial aims to separate fact from fiction. It tackles popular myths surrounding diets, superfoods, and supplements, providing evidence-based information to help readers make informed choices for their health and wellbeing.",
  },
  {
    title: "The Evolution of Social Media",
    about:
      "Social media has undergone significant changes since its inception. This editorial traces its evolution, highlighting shifts in user behavior, platform features, and the growing influence of social networks on politics, culture, and personal identity in the digital age.",
  },
  {
    title: "Climate Change and Action",
    about:
      "Climate change remains one of the most urgent challenges of our time. This editorial calls for global cooperation, policy reform, and individual action to reduce carbon emissions, protect natural habitats, and build resilient communities capable of facing environmental crises.",
  },
];

const EditorialList = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 shadow round bg-gray-50 m-1 ">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Editorial Articles
      </h1>
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {articles.map(({ title, about }, idx) => (
          <article
            key={idx}
            className="flex flex-col border border-gray-300 rounded-lg shadow-sm hover:shadow-2xl transition w-full sm:w-[48%] md:w-[31%]"
          >
            <h2 className="text-2xl font-semibold p-3 bg-blue-100">{title}</h2>
            <p className="text-gray-700 leading-relaxed p-5 flex-grow">
              {about}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default EditorialList;
