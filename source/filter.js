function filter(html, allowedTags) {
    html = html.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');

    const allTags = /&lt;\/?([a-zA-Z0-9]+)(.*?)&gt;/g;

    return html.replace(allTags, (findTag, tagName) => {
        tagName = tagName.toLowerCase();

        if (allowedTags.includes(tagName)) {
            const originalTag = findTag.replace(/&lt;/g, '<')
                                    .replace(/&gt;/g, '>')
                                    .replace(/&quot;/g, '"')
                                    .replace(/&#39;/g, "'")
                                    .replace(/&amp;/g, '&');
            
            return originalTag;
        }
        return findTag;
    });
}