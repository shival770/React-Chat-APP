const emojis = [
    "⛩️", "🌸", "🍥", "☯", "🍜", "🎎", "🎏", "🎋", "🗻", "🏯",
    "🏮", "🎐", "🈴", "🈹", "🈲", "🈺", "🈵", "🈶", "🈷️", "🉀",
    "🎌", "🍣", "🍱", "🍙", "🍘", "🍚", "🍡", "🍢", "🍶", "🎤",
    "🎧", "📺", "🎮", "🎨", "🖌️", "🖍️", "✏️", "📚", "📖", "💮",
    "🌸", "💠", "💤", "💕", "💞", "💓", "💗", "💖", "💘", "🎇",
    "🎆", "✨", "🌟", "⭐", "⚡", "🔥", "❄️", "🌈", "🎉", "🎊"
]


export const emojiGenerator = () => {
    return emojis[Math.floor(Math.random() * emojis.length)]
}

