from telegram import Update
from telegram.ext import ApplicationBuilder, MessageHandler, CommandHandler, ContextTypes, filters
import google.generativeai as genai

BOT_TOKEN = "8455231502:AAGnK92CTAuHuSJyupOqBSiA6dJkdm8aurk"
GEMINI_API_KEY = "YOUR_GEMINI_API_KEY"

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-pro")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Hi 👋 I'm a Gemini-powered AI bot 🤖")

async def chat(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_text = update.message.text
    response = model.generate_content(user_text)
    await update.message.reply_text(response.text)

app = ApplicationBuilder().token(BOT_TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, chat))

app.run_polling()
