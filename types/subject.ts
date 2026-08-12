export interface SubTopic {
  id: string;
  title: string;
  content: string; // Content in HTML/Markdown string format
}

export interface Topic {
  id: string;
  title: string;
  content: string; // Brief description or intro
  subtopics: SubTopic[];
}

export interface Unit {
  id: string;      // e.g. "unit1", "unit2"
  number: number;  // e.g. 1, 2
  title: string;
  description: string;
  topics: Topic[];
}

export interface Subject {
  id: string;      // e.g. "cs303"
  title: string;
  description: string;
  units: Unit[];
}
