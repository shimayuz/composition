import { Section } from '../../components/layout/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';

// マークダウンファイルを読み込む関数
async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'src/app/privacy-policy/policy.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return fileContent;
}

export default async function PrivacyPolicyPage() {
  // マークダウンコンテンツを取得
  const markdownContent = await getMarkdownContent();

  return (
    <Section id="privacy-policy" background="white">
      <div className="prose prose-lg max-w-3xl mx-auto mt-8">

        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />,
            p: ({node, ...props}) => <p className="mb-4" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
            li: ({node, ...props}) => <li className="mb-1" {...props} />,
            a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </Section>
  );
}
