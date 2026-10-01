import CashGenerationStory from "@/components/research/CashGenerationStory";
import { fcfPaper } from "@/lib/research";

export const metadata = {
  title: fcfPaper.title,
  description: `${fcfPaper.subtitle}. ${fcfPaper.question}`,
};

export default function CashGenerationPage() {
  return <CashGenerationStory />;
}
