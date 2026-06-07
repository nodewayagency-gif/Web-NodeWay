export function renderContentBlocks(content: string) {
  return content.split('\n\n').map((paragraph, index) => {
    if (paragraph.startsWith('### ')) {
      return (
        <h3 key={index} className="text-2xl font-display text-foreground mt-8 mb-4">
          {paragraph.replace('### ', '')}
        </h3>
      );
    }
    if (paragraph.startsWith('- ')) {
      const items = paragraph.split('\n').filter((i) => i.startsWith('- '));
      return (
        <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-lg text-muted-foreground">
          {items.map((item, i) => (
            <li key={i}>{item.replace('- ', '')}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="mb-6 text-lg text-muted-foreground leading-relaxed">
        {paragraph}
      </p>
    );
  });
}
