function extractIdsAndModifyMessage(message: string): {
  tags: string[];
  finalMessage: string;
} {
    // Regular expression pattern to match ids in '()' format
    const pattern: RegExp = /\(([^)]+)\)/g;

    // Find all matches
    const tags: string[] = [];
    let match;
    while (match = pattern.exec(message)) {
        tags.push(match[1]);
    }

    // Remove only the '()' from the message
    const finalMessage: string = message.replace(/\(([^)]+)\)/g, '');

    // Return object containing extracted tags and final message
    return {
        tags: tags,
        finalMessage: finalMessage.trim()
    };
}

export {extractIdsAndModifyMessage};
