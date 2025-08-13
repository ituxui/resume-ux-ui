import { AiModalContent, BooksModalContent, CoursesModalContent, HigherEducationModalContent, MediaModalContent, ProgrammsModalContent, SoftSkillsModalContent, TechnologiesModalContent } from "../children";
import type { PageModalType } from "../types";

export const ModalContent = ({ type }: { type: PageModalType }) => {
  switch (type) {
    case 'media':
      return <MediaModalContent />;
    case 'programms':
      return <ProgrammsModalContent />;
    case 'technologies':
      return <TechnologiesModalContent />;
    case 'courses':
      return <CoursesModalContent />;
    case 'ai':
      return <AiModalContent />;
    case 'soft-skills':
      return <SoftSkillsModalContent />;
    case 'books':
      return <BooksModalContent />;
    case 'higher-education':
      return <HigherEducationModalContent />;
    default:
      return <div>Контент не найден</div>;
  }
};
