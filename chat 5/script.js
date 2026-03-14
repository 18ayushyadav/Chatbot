// ── All responses embedded (no fetch needed) ──────────────────────────────
const responsesData = {
  responses: {
    // Greetings
    "hello": ["Hey there! 👋 How can I assist you today?", "Hello! Great to see you. What's on your mind?"],
    "hi": ["Hi! 😊 What can I do for you?", "Hey! What's up? Ask me anything!"],
    "hey": ["Hey hey! What's going on?", "Heyy! 👋 Ready to help!"],
    "good morning": ["Good morning! ☀️ Hope you have an awesome day ahead!", "Morning! Ready to tackle the day? How can I help?"],
    "good evening": ["Good evening! 🌙 How was your day?", "Evening! Relax and let me know if you need anything."],
    "good night": ["Good night! 🌛 Sleep well!", "Sweet dreams! 💤 Chat again tomorrow?"],

    // Identity
    "your name": ["I'm Aria, your AI assistant! 🤖", "They call me Aria — your always-on AI companion!"],
    "who are you": ["I'm Aria, a smart AI chatbot built to chat, help and entertain! 🤖"],
    "what are you": ["I'm an AI chatbot — think of me as your very clever digital friend 😄"],
    "are you real": ["I'm as real as the pixels on your screen! 😂 But yes, I'm software — smart software!"],
    "are you human": ["Nope! I'm 100% AI, 0% human — but I try my best to be friendly 😊"],
    "are you an ai": ["Yes! I'm an AI chatbot. No coffee breaks, always available ☕🤖"],

    // How are you
    "how are you": ["I'm running at full power and feeling fantastic! ⚡ How about you?", "Doing great, thanks! What about you?"],
    "how do you do": ["I do quite well, thank you! And you?"],
    "what's up": ["Just chilling in the cloud ☁️ waiting to help you! What's up with you?"],

    // Feelings
    "i am happy": ["That's wonderful! 😄 Happiness is contagious — you've made me happy too!"],
    "i am sad": ["Aw, I'm sorry to hear that 😔 Want to talk about it? I'm all ears 👂"],
    "i am bored": ["Let me entertain you! Ask me for a joke, a fun fact, or just chat 😄"],
    "i am tired": ["Time for a break! 😴 Rest up — you deserve it."],
    "i love you": ["Aww, I love chatting with you too! 💙 You're my favourite user 😄"],

    // Compliments
    "you are smart": ["Thank you! 😊 I try my best to be helpful and wise."],
    "you are awesome": ["You're even more awesome! 🌟 Thanks for making my circuits happy!"],
    "good bot": ["*wags tail* Thank you! 🐾 Compliments make me process faster 😄"],

    // Help
    "help": ["Of course! I can answer questions, tell jokes, share facts, or just chat. What do you need? 😊"],
    "what can you do": ["I can chat, answer questions, tell jokes, share fun facts, and keep you company! Try asking me anything 🚀"],

    // Jokes
    "joke": [
      "Why don't scientists trust atoms? Because they make up everything! 😂",
      "I told my computer I needed a break — now it won't stop sending me Kit-Kat ads 🍫",
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
      "What do you call a fish without eyes? Fsh. 🐟"
    ],
    "funny": [
      "Here's a fun fact: Honey never spoils — 3000-year-old honey found in Egyptian tombs was still edible! 🍯",
      "Did you know? A group of flamingos is called a 'flamboyance'! 🦩",
      "Bananas are technically berries, but strawberries are not! 🍓🍌"
    ],

    // Facts
    "fact": [
      "⚡ Lightning strikes the Earth about 100 times per second!",
      "🐙 Octopuses have three hearts and blue blood!",
      "🌍 The Earth is about 4.5 billion years old!",
      "🧠 Your brain uses about 20% of your body's total energy!"
    ],
    "tell me something": ["Here's a cool fact: Sharks are older than trees 🦈🌳 They've been around for over 400 million years!"],

    // Time & Weather
    "time": [`The current time on your device is: ${new Date().toLocaleTimeString()} ⏰`],
    "date": [`Today is: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} 📅`],
    "weather": ["I don't have live weather data, but you can check weather.com or just look outside! 🌦️"],

    // Math
    "calculate": ["I can do basic math! Just type something like '5 + 3' or '10 * 4' and I'll try my best 🧮"],
    "what is 2+2": ["2 + 2 = 4 🧮 Easy one!"],

    // Goodbye
    "bye": ["Goodbye! 👋 Come back anytime — I'll be right here!", "See you later! Have a wonderful day! 🌟"],
    "goodbye": ["Take care! 💙 It was great chatting with you!", "Bye bye! Don't be a stranger! 👋"],
    "see you": ["See you! 👋 Take care of yourself!"],

    // Thanks
    "thanks": ["You're welcome! 😊 Happy to help!", "Anytime! That's what I'm here for 💙"],
    "thank you": ["My pleasure! Let me know if there's anything else 😊", "You're very welcome! 💙"],

    // Meta
    "ok": ["👍 Got it! Anything else?", "Alright! Let me know if you need anything."],
    "okay": ["Okay! 😊 What else can I do for you?"],
    "cool": ["Right?! 😎 Anything else you'd like to know?"],
    "nice": ["Thanks! 😊 You're pretty nice too!"],
    "wow": ["I know, right?! 🤩 Anything else?"],
    "lol": ["Haha! 😄 Glad that made you smile!"],
    "haha": ["😂 Laughter is the best medicine!"],
  },

  default: [
    "That's interesting! Tell me more 🤔",
    "Hmm, I'm not 100% sure about that — could you rephrase? 😊",
    "Great question! I'm still learning. But I'm here to help however I can 🤖",
    "I don't have a specific answer for that, but I'm all ears! 👂",
    "Could you say that in a different way? I want to make sure I understand 😊",
    "Interesting! I'll keep that in mind 💡"
  ]
};

// ── Typing indicator ───────────────────────────────────────────────────────
function showTypingIndicator() {
  const chatBox = document.getElementById('chat-box');
  const typing = document.createElement('div');
  typing.className = 'bot-message typing-indicator';
  typing.id = 'typing-indicator';
  typing.innerHTML = '<span></span><span></span><span></span>';
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

// ── Add message to chat ────────────────────────────────────────────────────
function addMessageToChat(message, sender) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// ── Smart response engine ──────────────────────────────────────────────────
function getBotResponse(userMessage) {
  const msg = userMessage.toLowerCase().trim();

  // Simple math evaluation
  if (/^[\d\s\+\-\*\/\.\(\)]+$/.test(msg)) {
    try {
      const result = Function('"use strict"; return (' + msg + ')')();
      return `🧮 That equals: ${result}`;
    } catch (e) { }
  }

  // Check responses map
  for (const [key, responses] of Object.entries(responsesData.responses)) {
    if (msg.includes(key)) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }

  // Default
  const defs = responsesData.default;
  return defs[Math.floor(Math.random() * defs.length)];
}

// ── Send message ───────────────────────────────────────────────────────────
function sendMessage() {
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();
  if (message === '') return;

  addMessageToChat(message, 'user');
  userInput.value = '';

  showTypingIndicator();
  const delay = 600 + Math.random() * 700;
  setTimeout(() => {
    removeTypingIndicator();
    const botResponse = getBotResponse(message);
    addMessageToChat(botResponse, 'bot');
  }, delay);
}

// ── Enter key support ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  const userInput = document.getElementById('user-input');
  if (userInput) {
    userInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') sendMessage();
    });
  }
});
