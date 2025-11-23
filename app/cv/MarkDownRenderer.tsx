// app/cv/components/MarkdownRenderer.tsx
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-dark.css";

interface Props {
  markdownText: string;
}

export default function MarkdownRenderer({ markdownText }: Props) {
  return (
    <div className="markdown-body !bg-black p-4 w-full max-w-3xl">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
}
