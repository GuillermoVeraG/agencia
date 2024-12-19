interface Section {
  title: string;
  parrafo: string[];
  list?: { title: string; txt: string }[];
}

const text = `
Introduction
Artificial Intelligence (AI) is reshaping the gaming industry, opening doors to personalized, immersive experiences that adapt to individual players. Among the most groundbreaking applications of AI in gaming is its role in creating dynamic, personalized game narratives. By analyzing vast amounts of player data, AI algorithms can learn player preferences, behaviors, and choices—enabling developers to craft stories that resonate deeply and keep players engaged.
The Power of AI-Powered Storytelling
AI is transforming the way stories are told in games, moving beyond linear, pre-scripted plots to more dynamic, evolving narratives. Here’s how:
● Dynamic Narratives: AI can generate adaptive storylines that shift based on player choices, ensuring that each playthrough feels unique and personalized.
● Personalized Characters: AI-driven characters evolve with the player’s actions, building relationships that feel more meaningful, as they react to emotions and behaviors in real-time.
● Branching Paths: With AI, developers can create complex branching narratives, allowing players to explore different outcomes based on their in-game decisions.
● Emotional Engagement: By leveraging AI and neuromarketing techniques, developers can identify the elements of a game that spark strong emotional responses, leading to deeper player engagement and higher retention.
Real-World Examples
Several games have successfully integrated AI to enhance storytelling and player engagement:
• The Last of Us Part II: Naughty Dog used AI to create more realistic enemy behaviors, making each encounter unique and challenging.
• Middle-earth: Shadow of Mordor: This game features the Nemesis System, where AI remembers the player's actions and tailors enemy encounters accordingly.
• No Man's Sky: Uses procedural generation powered by AI to create a vast universe with unique planets, flora, and fauna.
• Dota 2: OpenAI's bot defeated professional players in a 2017 exhibition match, showcasing the potential of AI in competitive gaming.
Leveraging Data Analytics for Deeper Insights
AI-powered storytelling thrives on data. By collecting and analyzing player behavior, preferences, and in-game interactions, developers can uncover valuable insights that shape more compelling experiences.
● Player Segmentation: AI can segment players based on demographics, playstyles, and preferences, allowing developers to tailor content and features to different audiences.
● Predictive Analytics: AI can analyze historical player data to predict future behavior, helping developers make data-driven decisions on everything from game mechanics to marketing strategies.
● A/B Testing: AI enables rapid A/B testing of different game elements, helping developers identify which versions or features resonate best with players, and driving continuous improvement.
Reinforcement Learning: AI’s Role in Game Development
AI’s capabilities go beyond personalization; it’s also revolutionizing game development itself through reinforcement learning, a technique where AI agents learn optimal strategies by interacting with simulated environments.
● Game Balancing: AI can assist in fine-tuning game balance by teaching AI agents to identify and exploit weaknesses, ensuring a more polished and engaging player experience.
● NPC Behavior: AI-driven agents can learn to exhibit more realistic, engaging behaviors, making non-playable characters (NPCs) feel more alive and reactive within the game world.
● Procedural Generation: AI can be used to generate procedurally created content, from levels and enemies to quests, ensuring that each player’s journey is fresh and unique.
The Future of AI in Gaming
As AI technology advances, the potential for even more innovative and personalized gaming experiences grows. Some exciting developments on the horizon include:
● AI-Generated Narratives: AI could generate dynamic, evolving storylines that change with each playthrough, offering truly infinite possibilities.
● AI-Powered Companions: Imagine AI-driven companions that provide personalized guidance, companionship, or even emotional support, adapting to the player’s journey and choices.
● Ethical Considerations: As AI becomes more sophisticated, ethical considerations around data privacy, algorithmic bias, and potential manipulation will need to be addressed.
Conclusion
AI-powered storytelling is already transforming the gaming landscape by offering players personalized, immersive experiences that cater to their preferences and playstyles. By combining AI with data analytics, developers can create dynamic narratives, evolving characters, and interactive worlds that resonate deeply with players. As AI technology continues to evolve, the potential for crafting engaging, emotionally rich experiences in gaming is boundless—pushing the limits of what’s possible in the future of interactive entertainment.
Ready to leverage the power of AI in your next gaming project? At Audienze Labs, we specialize in helping studios create immersive, data-driven experiences that connect deeply with players. Contact us today for a consultation and discover how AI can revolutionize your game development and storytelling strategy.
`;

export function convertToJSON(text: string): { body: Section[] } {
  const sections: Section[] = [];
  const paragraphs = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  let currentSection: Section | null = null;

  paragraphs.forEach((line) => {
    // Detect section titles: any line that's not a list item and not a paragraph is considered a title
    if (
      !line.startsWith("●") &&
      !line.startsWith("•") &&
      line[0].toUpperCase() === line[0]
    ) {
      if (currentSection) {
        sections.push(currentSection); // Push the previous section
      }
      // Start a new section
      currentSection = { title: line, parrafo: [] };
    } else if (line.startsWith("●") || line.startsWith("•")) {
      // Process list items
      if (currentSection) {
        const parts = line.slice(2).split(":");
        currentSection.list = currentSection.list || [];
        currentSection.list.push({
          title: parts[0].trim(),
          txt: parts[1].trim(),
        });
      }
    } else if (currentSection) {
      // Add paragraphs to the current section
      currentSection.parrafo.push(line);
    }
  });

  // Push the last section if it exists
  if (currentSection) {
    sections.push(currentSection);
  }

  return { body: sections };
}

const jsonOutput = convertToJSON(text);
console.log(JSON.stringify(jsonOutput, null, 2));
