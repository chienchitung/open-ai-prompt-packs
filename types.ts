
export interface PromptItem {
  scenario: string;
  chinesePrompt: string;
  englishPrompt: string;
}

export interface PromptSubCategory {
  title: string;
  prompts: PromptItem[];
}

export interface PromptCategory {
  title: string;
  subCategories: PromptSubCategory[];
}
